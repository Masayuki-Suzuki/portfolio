// reCAPTCHA v3(スコアベースキー)の自前組み込み。
// 旧 vue-recaptcha-v3 はメンテ停止(最終リリース 2022-05)のため依存せず、
// 公式のスクリプト読込 + grecaptcha.execute() を直接ラップする。
// バッジ非表示の CSS は assets/styles/_global.sass 側で定義
// (規約上の帰属表示テキストは contact フォームに掲示している)。

type Grecaptcha = {
    ready(cb: () => void): void
    execute(siteKey: string, options: { action: string }): Promise<string>
}

declare global {
    interface Window {
        grecaptcha?: Grecaptcha
    }
}

let loadPromise: Promise<void> | null = null

const loadScript = (siteKey: string): Promise<void> => {
    if (loadPromise) {
        return loadPromise
    }
    loadPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`
        script.async = true
        script.onload = () => {
            if (window.grecaptcha) {
                window.grecaptcha.ready(resolve)
            } else {
                reject(new Error('grecaptcha is unavailable after script load'))
            }
        }
        script.onerror = () => {
            loadPromise = null // 失敗時は再試行できるようにする
            reject(new Error('Failed to load reCAPTCHA script'))
        }
        document.head.appendChild(script)
    })
    return loadPromise
}

export const useRecaptcha = () => {
    const siteKey = useRuntimeConfig().public.recaptchaSiteKey

    // スクリプトの事前読込(mount 時のウォームアップ用)
    const load = (): Promise<void> => {
        if (import.meta.server) {
            return Promise.resolve()
        }
        return loadScript(siteKey)
    }

    // token を取得する。クライアント専用
    const execute = async (action: string): Promise<string> => {
        if (import.meta.server) {
            return ''
        }
        await loadScript(siteKey)
        return window.grecaptcha!.execute(siteKey, { action })
    }

    return { load, execute }
}
