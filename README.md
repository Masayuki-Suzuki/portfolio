<p align="center">
  <img src="https://masa.works/images/mainLogo.svg" alt="logo" style="display:block; margin: auto;">
</p>

# Masayuki Suzuki Portfolio
This is my personal portfolio showcasing my front-end development skills.
See the live website: <https://masa.works>

**Notice**
This portfolio is for the author's personal use only and may NOT be reused by anyone else. This repository is published solely for reference and for trying it out on your LOCAL computer. Changing, modifying, redistributing, etc. are NOT allowed. If you wish to do any of these, you must contact the author first; otherwise the author may take legal action.

## Skills and technologies I used
* HTML5
* CSS3
* [Sass](https://sass-lang.com/) - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
* [TypeScript](https://www.typescriptlang.org/) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
* [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework.
* [Nuxt 4](https://nuxt.com/) - The Intuitive Vue Framework.
* [Pinia](https://pinia.vuejs.org/) - The intuitive store for Vue.js (migrated from Vuex).
* [Node.js](https://nodejs.org/) v24 LTS - JavaScript runtime; the app is served by Nuxt's Nitro server.
* [Vite](https://vitejs.dev/) / [Nitro](https://nitro.build/) - Build tooling and server engine bundled with Nuxt 4.
* [Pug](https://github.com/pugjs/pug) - A robust, elegant, feature-rich template engine for Node.js.
* [Resend](https://resend.com/) - Email API used by the contact form (via a Nitro server route).
* [ESLint 9](https://eslint.org/) / TypeScript 5 / Prettier 3 - see the Development Toolchain section below.
* [GraphQL](https://graphql.org/) - A query language for APIs and a runtime for fulfilling those queries with your existing data. It is used to fetch blog posts from my personal blog, [Anonymous Front-end Developer in Vancouver](https://anonymous-frontend.dev/).

## Applications I used
* IntelliJ (JetBrains)
* Sketch
* Photoshop
* Illustrator

## Server Environment
* VPS + Docker Compose (multi-stage `node:24-alpine` image, ~174MB)
* [Caddy](https://caddyserver.com/) reverse proxy with automatic HTTPS (`caddy_net` shared network -> `masa_works:3000`)

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

## Design process
### 1. Planning
#### Goal
Deciding which of my skills to exhibit on this website, and planning and choosing the technologies to use.
#### Colour
As the main colour I chose ivory because it gives a chic impression. For the sub colour I chose dark grey (almost black, but not quite), which gives a calm impression when combined with ivory.

### 2. Design
#### Wireframe
I usually use paper and pen to draw wireframes, and sometimes a tablet (iPad) with a stylus, because they let me sketch ideas faster than design applications — before my inspiration and passion fade away.
#### Logo
Created as SVG with Adobe Illustrator.
#### Mockup
Created with the Sketch app.
#### Animation
I didn't use libraries like GSAP or Fullpage.js on purpose — I wanted to code the animations from scratch to improve my JavaScript skills.

### 3. Development
#### Coding
I use IntelliJ.
#### Vue.js
**Why Vue.js?** - Demand for JavaScript frameworks keeps growing, and JavaScript developers are expected to have knowledge of and experience with them.
The typical frameworks are Angular and React, but Vue has been getting more and more popular — it even has more stars and watchers than Angular on GitHub. Vue is simpler than React and Angular, very lightweight and fast, and easier to learn than the other frameworks. I had no prior experience with any JS framework, so I needed to learn one, and I chose Vue as my first.
#### Node.js
**Why Node.js?** - Most Node users would say "Node.js is faster than other servers", but I don't think that alone is a strong reason to choose it. So why did I choose Node? Speed is certainly one reason, but not the only one. Because Node runs JavaScript, you can build the entire app — front end and back end — in a single programming language. JavaScript developers can then work across both fields, which makes communication between developers smoother and ultimately helps reduce labour costs.

#### CSS Architecture
BEM (<http://getbem.com/naming/>)
OOCSS (<http://oocss.org/>)

### 4. Performance Optimization
* Images - Compressed, with responsive sizes and the WebP format.
* CSS - Combined into one file and minified.
* Compression - Responses are compressed (gzip) before being sent from the server.
* Server Location - Japan.

### 5. Development Toolchain (Nuxt 4 / 2026-)
* **Lint** - ESLint 9 (flat config via `@nuxt/eslint`): `yarn lint` / `yarn lint:fix`
* **Type Check** - TypeScript 5 + vue-tsc: `yarn typecheck`
* **Format** - Prettier 3 (`.prettierrc`)
* **Testing** - No test runner is set up yet. If tests are added in the future, the Vite-based [Vitest](https://vitest.dev/) (with `@vue/test-utils` v2 / `@nuxt/test-utils`) is the recommended choice — the old Jest setup was removed during the Nuxt 4 migration.
