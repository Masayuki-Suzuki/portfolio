# syntax=docker/dockerfile:1

# ---------- build stage ----------
FROM node:24-alpine AS build

WORKDIR /www

# yarn 4 (package.json の packageManager を corepack が解決する)
RUN corepack enable

COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --immutable

COPY . .
# ビルド時に焼き込まれる値(compose の build.args 経由で .env から注入される):
# - NUXT_PUBLIC_STRAPI_URL: 画像 URL 解決用の公開オリジン
# - NUXT_STRAPI_GRAPHQL_ENDPOINT: SSR 用 GraphQL(同一ホスト構成ではコンテナ直結を指定)
ARG NUXT_PUBLIC_STRAPI_URL
ARG NUXT_STRAPI_GRAPHQL_ENDPOINT
RUN yarn build

# ---------- runtime stage ----------
FROM node:24-alpine

ENV NODE_ENV=production \
    NITRO_HOST=0.0.0.0 \
    NITRO_PORT=3000

WORKDIR /www

# Nitro のスタンドアロン出力のみ(node_modules 不要)
COPY --from=build /www/.output ./.output

EXPOSE 3000

# 秘密情報や測定 ID などの runtimeConfig は起動時に環境変数で注入する
# (NUXT_RESEND_API_KEY / NUXT_RECAPTCHA_SECRET_KEY / NUXT_PUBLIC_GTAG_ID など。
#  一覧は .env.example を参照)
CMD ["node", ".output/server/index.mjs"]
