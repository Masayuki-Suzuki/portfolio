import express from 'express'
import request from 'request'
import sgMail from '@sendgrid/mail'
import format from 'date-fns/format'

if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/contact-form', (req, res) => {
    let errorMessage = ''

    // reCAPTCHA url
    const END_POINT = 'https://www.google.com/recaptcha/api/siteverify?secret=' +
        process.env.RECAPTCHA_SECRET_KEY + '&response=' + req.body.token

    try {
        // reCAPTCHA verification
        request(END_POINT, async (error, _, body) => {
            body = JSON.parse(body)

            // If request function get something 'error'
            if (error) {
                throw error
            }

            // Failed
            if ((body.success !== undefined && !body.success) || body.score < 0.5) {
                errorMessage = 'reCAPTCHA verification failed. Perhaps you are a bot!? 🤔'
                res.status(500).json({ errorMessage, success: body.success, score: body.score })
            } else {

                // Email Params
                const msg = {
                    to: process.env.MAIL_TO || '',
                    from: process.env.MAIL_FROM || '',
                    subject: `Message from Portfolio: < ${req.body.userName} >`,
                    html: `<p>
                                <strong>Name: </strong> ${req.body.userName}<br>
                                <strong>Company: </strong> ${req.body.company}<br>
                                <strong>Email: </strong> ${req.body.email}
                           </p>
                           <p><strong>Message: </strong><br>
                           ${req.body.body.replace(/\r?\n/g, '<br>')}</p>
                           <p>Date: ${format(new Date(Date.now()), 'LLL dd, yyyy')}</p>`
                }

                // Sending Email
                try {
                    await sgMail.send(msg)
                    res.status(200).json({
                        sender: req.body.userName,
                        company: req.body.company,
                        email: req.body.email,
                        message: req.body.body,
                        date: new Date()
                    })
                }
                catch (e) {
                    console.error(e.response.body.errors)
                    res.status(500).json({
                        errorMessage: 'Failed sending email. Please try again later.',
                        errors: e.response.body.errors
                    })
                }

            }
        })
    }
    catch (err) {
        console.error(err, err.response)
        errorMessage = 'reCAPTCHA Error'
        res.status(500).json({ errorMessage })
    }

})

export default app
