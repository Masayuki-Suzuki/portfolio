<template lang="pug">
section.contact.common-container(:class="{'contact--active': pageActive}")
    h1.common-heading.contact__heading contact
    form.contact__form(@submit.prevent="submit")
        label.title
            | Your name
            span.required *
            | &nbsp;:
            input(v-model="senderName" type="text" placeholder="John Snow" name="name" required)

        label.title
            | Company :
            input(v-model="company" type="text" placeholder="House Stark of Winterfell" name="email")

        label.title
            | e-mail
            span.required *
            | &nbsp;:
            input(v-model="email" type="email" placeholder="john@stark.com" name="email" required)

        label.title
            | Message
            span.required *
            | &nbsp;:
            textarea(v-model="body" placeholder="Winter is Coming..." rows="1" name="msg" required)

        .btn(v-if="!connecting")
            button.submit send

            .recaptcha
                p.capiton This site is protected by reCAPTCHA and the Google
                .links
                    a(href="https://policies.google.com/privacy") Privacy Policy&nbsp;
                    span and&nbsp;
                    a(href="https://policies.google.com/terms") Terms of Service&nbsp;
                    span apply.

        //- Loading animation
        .sending-loader(v-if="connecting")
            .sending-loader__box(v-for="i in 4")
            .sending-loader__text

        p.submit-msg(v-if="submitted") Success!! Your message sent properly. Cheers!!

        //- Error messages
        p.submit-msg.submit-msg--error(v-if="errorMsg.length") ERORR: {{ errorMsg }}
            //- | Oops!! Sorry, couldn't send your message. please try again.

</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from '@vue/composition-api'
import { checkPageActivation } from '~/libs/checkPageActivation'

export default defineComponent({
    name: 'contact',
    setup(_, { root: { $store, $recaptcha, $axios } }) {
        // --------------------------------------
        // Local state
        const senderName = ref('')
        const company = ref('')
        const email = ref('')
        const body = ref('')
        const connecting = ref<boolean>(false)
        const submitted = ref<boolean>(false)
        const errorMsg = ref('')

        // --------------------------------------
        // Computed from vuex state
        const delayedActivePage = computed(() => $store.getters['scrolls/delayedActivePage'])

        // --------------------------------------
        // Computed
        const pageActive = computed((): boolean =>
            checkPageActivation($store, delayedActivePage.value, 'contact'))

        // --------------------------------------
        //  Methods
        const resetForm = (): void => {
            senderName.value = ''
            company.value = ''
            email.value = ''
            body.value = ''
        }

        const submit = async () => {
            submitted.value = false
            errorMsg.value = ''
            connecting.value = true
            const token = await $recaptcha.execute('login').catch(err => {
                console.error('recCaptcha Login error', err)
                errorMsg.value = 'Login error of reCAPTCHA. Please try again later.'
                connecting.value = false
            })

            if (token) {
                // Email API params
                const params = {
                    userName: senderName.value,
                    company: company.value,
                    email: email.value,
                    body: body.value,
                    token
                }

                // Send email
                const res = await $axios.post('/contact-form', params).catch(err => {
                    errorMsg.value = err.response.data.errorMessage
                    console.error(err.response)
                })
                if (res) {
                    resetForm()
                    submitted.value = true
                }
                connecting.value = false
            }

        }

        // --------------------------------------
        // Lifecycle
        onMounted(() => {
            $recaptcha.init()
        })

        return {
            senderName,
            company,
            email,
            body,
            connecting,
            submitted,
            pageActive,
            errorMsg,
            submit
        }
    }
})
</script>

<style lang="sass" scoped>
$container-width: 600px
$animation-time: 1s
$size: 30px

@keyframes loading-text
    0%
        content: 'Sending'

    25%
        content: 'Sending.'

    50%
        content: 'Sending..'

    75%
        content: 'Sending...'

@keyframes loader
    0%,
    30%,
    100%
        opacity: 0

    90%
        opacity: 1

.contact
    +smAndDown
        background: #fff
        padding: 90px 0

    +customMedia(550, false)
        padding: 50px 0

    &__heading
        margin-top: 70px

        +customMediaV(800, false)
            margin-top: 5%

        +customMediaV(750, false)
            font-size: 5.5rem
            margin-top: 3%

        +customMediaV(700, false)
            font-size: 4.5rem
            margin-top: 5%

        +customMediaV(650, false)
            margin-top: 3%

        +customMediaV(600, false)
            font-size: 4rem

        +customMediaV(550, false)
            margin-top: 2.5%

        +smAndDown
            font-size: 5rem
            line-height: 1
            margin: 0

        +xsAndDown
            font-size: 4rem

    &__form
        margin: 70px auto 0
        max-width: $container-width

        +customMediaV(800, false)
            margin-top: 3%

        +customMediaV(600, false)
            margin-top: 2%

        +xsAndDown
            margin-top: 30px
            width: 80%

.recaptcha
    color: $main-color
    font-size: 1.3rem
    line-height: 1.5
    letter-spacing: .02em
    margin-left: 24px

    +customMedia(650, false)
        margin-top: 24px
        margin-left: 0

    a
        color: #05c
        font-weight: 600

        +pseudo(#05c)

.title
    font-size: 2.2rem
    font-weight: 300
    text-transform: uppercase
    display: block
    opacity: 0
    transform: translateY(30px)

    +customMediaV(700, false)
        font-size: 1.8rem

    input,
    textarea
        background: none
        border: 0
            bottom: solid 1px #979797
        border-radius: 0
        font-size: 2.2rem
        font-weight: 300
        display: block
        margin: 10px 0 35px
        padding: 5px 0 10px
        width: 100%

        +customMediaV(700, false)
            font-size: 1.8rem
            margin-bottom: 25px

        +customMediaV(600, false)
            margin-top: 0

        &-ms-inputplaceholder,
        &::-webkit-input-placeholder,
        &:placeholder-shown
            color: #999
            font-weight: 300

.btn
    display: flex
    align-items: center
    opacity: 0
    transform: translateY(30px)

    +customMedia(650, false)
        display: block

.submit
    background: $main-color
    border: solid 1px $main-color
    color: #fff
    font-size: 1.6rem
    font-weight: 500
    letter-spacing: .02em
    line-height: 1
    text-transform: uppercase
    position: relative
    z-index: 2
    display: block
    padding: 12px 20px
    width: 180px
    transition: color .3s ease
    overflow: hidden

    &::after
        background: $bg-color
        content: ''
        position: absolute
        top: 0
        left: 50%
        z-index: -1
        height: 100%
        width: 0
        transform: matrix(1, 0, -1, 1, 0, 0)
        transition: all .45s ease

    &:hover
        color: $main-color

        &::after
            left: -25%
            width: 150%

.submit-msg
    color: #028760
    font-size: 2rem
    font-weight: 500
    line-height: 1
    margin-top: 20px

    &--error
        color: #d23037

.required
    color: #d23037
    font-weight: 500

.sending-loader
    position: relative
    display: block
    margin: auto
    height: $size
    width: $size

    &__box
        animation: loader $animation-time linear infinite
        background: rgba(0, 0, 0, .7)
        position: absolute
        height: 45%
        width: 45%
        opacity: 0
        filter: blur(.7px)

        $box-position: 2.5%

        &:first-of-type
            top: $box-position
            left: $box-position

        &:nth-of-type(2)
            top: $box-position
            right: $box-position
            animation-delay: -($animation-time / 4)

        &:nth-of-type(3)
            right: $box-position
            bottom: $box-position
            animation-delay: -($animation-time / 4) * 2

        &:nth-of-type(4)
            bottom: $box-position
            left: $box-position
            animation-delay: -($animation-time / 4) * 3

    &__text
        position: absolute
        top: 130%
        left: -51%
        margin: auto
        width: 6.5em

        &::after
            animation: loading-text 3s infinite
            color: $main-color
            content: 'Sending'
            font-size: 1.6rem
            font-weight: 400
            display: inline-block

.contact--active
    .contact__heading,
    .title,
    .btn
        opacity: 1
        transform: translateY(0)
        transition: all .4s ease .2s

    .title
        &:first-of-type
            transition-delay: .4s

        &:nth-of-type(2)
            transition-delay: .6s

        &:nth-of-type(3)
            transition-delay: .8s

        &:last-of-type
            transition-delay: 1s

    .btn
        transition-delay: 1.2s

</style>
