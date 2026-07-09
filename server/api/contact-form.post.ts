import { format } from 'date-fns'

type ContactFormBody = {
    userName?: string
    company?: string
    email?: string
    body?: string
    token?: string
}

type RecaptchaVerifyResponse = {
    success: boolean
    score?: number
    action?: string
    'error-codes'?: string[]
}

const escapeHtml = (str: string): string =>
    str.replace(/[&<>"']/g, c => (
        { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string
    ))

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const body = await readBody<ContactFormBody>(event)

    const userName = (body?.userName ?? '').trim()
    const company = (body?.company ?? '').trim()
    const email = (body?.email ?? '').trim()
    const message = (body?.body ?? '').trim()
    const token = body?.token ?? ''

    // --------------------------------------
    // Validation
    if (!userName || !email || !message) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
            data: { errorMessage: 'Name, email and message are required.' }
        })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
            data: { errorMessage: 'Invalid email address.' }
        })
    }
    if (userName.length > 200 || company.length > 200 || message.length > 5000) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
            data: { errorMessage: 'Input is too long.' }
        })
    }

    // --------------------------------------
    // reCAPTCHA v3 verification
    const verify = await $fetch<RecaptchaVerifyResponse>(
        'https://www.google.com/recaptcha/api/siteverify',
        {
            method: 'POST',
            body: new URLSearchParams({
                secret: config.recaptchaSecretKey,
                response: token
            })
        }
    ).catch(() => null)

    const scoreThreshold = Number(config.recaptchaScoreThreshold) || 0.5
    if (!verify || !verify.success || (verify.score ?? 0) < scoreThreshold) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
            data: {
                errorMessage: 'reCAPTCHA verification failed. Perhaps you are a bot!? 🤔',
                success: verify?.success ?? false,
                score: verify?.score
            }
        })
    }

    // --------------------------------------
    // Send email via Resend REST API
    // https://resend.com/docs/api-reference/emails/send-email
    try {
        await $fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { Authorization: `Bearer ${config.resendApiKey}` },
            body: {
                from: `Portfolio Contact <${config.mailFrom}>`,
                to: [config.mailTo],
                reply_to: email,
                subject: `Message from Portfolio: < ${userName} >`,
                html: `<p>
                            <strong>Name: </strong> ${escapeHtml(userName)}<br>
                            <strong>Company: </strong> ${escapeHtml(company)}<br>
                            <strong>Email: </strong> ${escapeHtml(email)}
                       </p>
                       <p><strong>Message: </strong><br>
                       ${escapeHtml(message).replace(/\r?\n/g, '<br>')}</p>
                       <p>Date: ${format(new Date(), 'LLL dd, yyyy')}</p>`
            }
        })
    } catch (err) {
        console.error('[contact-form] Resend API error:', err)
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            data: { errorMessage: 'Failed sending email. Please try again later.' }
        })
    }

    return {
        sender: userName,
        company,
        email,
        message,
        date: new Date()
    }
})
