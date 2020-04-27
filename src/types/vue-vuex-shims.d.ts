import Vue from 'vue'
import { StrictStore } from 'vuex'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ReCaptchaInstance } from '@nuxtjs/recaptcha'

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        store?: StrictStore
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $store: StrictStore
        $axios: NuxtAxiosInstance
        $recaptcha: ReCaptchaInstance
    }
}
