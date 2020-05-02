const preLoad = [
    { rel: 'preload', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700', as: 'style' },
    { rel: 'preload', href: '/images/mainLogo.svg', as: 'image' },
    { rel: 'preload', href: '/images/topBg.jpg', as: 'image' },
    { rel: 'preload', href: '/images/topBg.webp', as: 'image' },
    { rel: 'preload', href: '/images/camping.jpg', as: 'image' },
    { rel: 'preload', href: '/images/camping.webp', as: 'image' },
    { rel: 'preload', href: '/images/blogImage.jpg', as: 'image' },
    { rel: 'preload', href: '/images/blogImage.webp', as: 'image' },
    { rel: 'preload', href: '/images/pinstagram.jpg', as: 'image' },
    { rel: 'preload', href: '/images/pinstagram.webp', as: 'image' }
]

const link = [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700' }
]

export const head = {
    title: 'Masayuki Suzuki Portfolio Website',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0' },
        {
            hid: 'description',
            name: 'description',
            content: 'This website is a Front-end developer Masayuki Suzuki\'s' +
                'portfolio website based in Vancouver Canada.'
        },
        { property: 'og:title', content: 'Masayuki Suzuki Portfolio Website' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://masa.works/' },
        { property: 'og:image', content: 'https://masa.works/imgages/logoforFB.png' },
        { property: 'og:site_name', content: 'Masayuki Suzuki Portfolio website' },
        {
            property: 'og:description',
            content: 'This website is a Front-end developer Masayuki Suzuki\'s' +
                'portfolio website based in Vancouver Canada.'
        },
        { property: 'locale', content: 'en_CA' },
        { property: 'fb:app_id', content: '111358992872847' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Masayuki Suzuki Portfolio Website' },
        {
            name: 'twitter:description',
            content: 'This website is a Front-end developer Masayuki Suzuki\'s portfolio website based in' +
                ' Vancouver Canada.'
        },
        { name: 'twitter:image', content: 'http://masa.works/images/logoforFB.png' }
    ],
    link: [...link, ...preLoad],
    script: [
        { src: '/js/modernizr-webp.js' }
    ]
}
