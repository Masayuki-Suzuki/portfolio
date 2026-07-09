<p align="center">
  <img src="https://masa.works/images/mainLogo.svg" alt="logo" style="display:block; margin: auto;">
</p>

# Masayuki Suzuki Portfolio
This is my personal portfolio showing my front-end development skills.   
See actual website : <http://masa.works>

**Notice**
** This portfolio is only for author’s use and is NOT allow for reuse any users. This repository is only open for refering and trying on users LOCAL computers. Change, modify, redistribution and so on are NOT allow. If you want to do that, you must contact to autor. Otherwase, autor may take an regal action to the user.

## Skills and technologies I used
* HTML5
* CSS3
* [SASS](https://sass-lang.com/) - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
* [Typescript](https://typesciptlang.org) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
* [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework
* [Nuxt.js](https://nuxtjs.org/) - The Progressive Vue.js Framework.
* [Pinia](https://pinia.vuejs.org/) - The intuitive store for Vue.js (migrated from Vuex).
* [Node.js](https://nodejs.org/) v24 LTS - JavaScript runtime; the app is served by Nuxt's Nitro server.
* [Vite](https://vitejs.dev/) / [Nitro](https://nitro.build/) - Build tooling and server engine bundled with Nuxt 4.
* [Pug](https://github.com/pugjs/pug) - Pug – robust, elegant, feature rich template engine for Node.js.
* [Resend](https://resend.com/) - Email API used by the contact form (Nitro server route).
* [ESLint 9](https://eslint.org/) / TypeScript 5 / Prettier 3 - see Development Toolchain below.
* [GraphQL](https://graphql.org/) - GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data
* AJAX / JSON - It is used getting blog post data from my personal blog with GraphQL.
 [Anonymous Front-end Developer in Vancouver](https://anonymous-frontend.dev/)

## Applications I used
* IntelliJ (JetBrains)
* Sketch
* Photoshop
* illustrator

## Server Environment
* VPS + Docker Compose (multi-stage `node:24-alpine` image, ~174MB)
* [Caddy](https://caddyserver.com/) reverse proxy (`caddy_net` shared network -> `masa_works:3000`)

## Getting Started
```bash
corepack enable            # yarn 4 (packageManager)
yarn install
cp .env.example .env       # fill in the required values
yarn dev                   # http://localhost:3000
```
Production (Docker):
```bash
docker compose up -d --build
```
Environment variables: see [.env.example](./.env.example) — runtimeConfig values are injected at container start (never baked into the image).
* Nginx - For reverse proxy.
* TLS 1.2
* Let's Encrypt

## Design process
### 1. Planing
#### Goal
Thinking what should I exhibit my skills in this website. Also planning and choosing what technology I'll use.
#### Colour
As a main colour, I've  chosen Ivory colour because it gives chic impression. For the sub colour, I've chosen dark gray (it's almost black but not). It gives calm impression that is combined with Ivory colour.

### 2. Design
#### Wireframe
I usually use paper and pen to make wireframe, sometimes use Tablet(iPad) and Stylus pen. Because it can make wireframe more quickly than applications before my inspiration and passion is vanished.
#### Logo
Made by SVG with Adobe illustrator.
#### Mockup
Using Sketch App.
#### Animation
I haven't used a library like GSAP because I've wanted to code from scratch in order to improve my javascript skills. Also I haven't used Fullpage.js.
  
### 3. Development
#### Coding
I've used IntelliJ.
#### Vue.js
**Why Vue.js ?** - These days, Javascript framework demand is increasing and javascript developers are required knowledge and experience them. 
The typical frameworks are Angular and React but Vue is getting more and more popular moreover Vue is getting Star and Watch more than Angular in Github. Vue is simpler than React and Angular and very light weight and fast and it's easier to learn than another framework. Actually, I had no experience and knowledge of JS framework, so I have needed to learn them and I've chosen Vue to my first time JS framework. 
#### Node.js
**Why Node.js ?** - Almost Node user would say that "Node.js is faster than another server". But I reckon it isn't a strong motive to choose Node. So why have I chosen Node? Of course, one of the reasons is that it's fast but it's not only. Because Node is built by Javascript, so we are possible to make apps with only using one programming language although front-end or back-end. And then, Javascript developer can work in both fields and It would make communication smooth between developers. Finally, It would lead to reducing labor cost.

#### CSS Architecture
BEM(<http://getbem.com/naming/>)  
OOCSS(<http://oocss.org/>)
  
### 4. Performance Optimization
* Images - Compressed and responsive image size. Also, use webp format.
* CSS - Combined to one file and minified.
* Gzip - Compressed website's data before sending those data from server.
* Server Location - Located in Oregon, US which is physically close to my target users living in Vancouver, BC Canada.

### 5. Development Toolchain (Nuxt 4 / 2026-)
* **Lint** - ESLint 9 (flat config via `@nuxt/eslint`): `yarn lint` / `yarn lint:fix`
* **Type Check** - TypeScript 5 + vue-tsc: `yarn typecheck`
* **Format** - Prettier 3 (`.prettierrc`)
* **Testing** - テストランナーは未導入。追加する場合は Vite ベースの [Vitest](https://vitest.dev/)(+ `@vue/test-utils` v2 / `@nuxt/test-utils`)を推奨(旧 Jest 構成は Nuxt 4 移行時に撤去済み)
