# Vue.js Project

This project is a Vue.js application using Vuetify framework that utilizes Google Maps. Follow the instructions below to set up and run the project.

preview:
<img width="1606" alt="Pasted Graphic" src="https://github.com/ines-lee/geofinder/assets/48703812/6a6180d7-94ce-4c77-a7dc-9427812c74a2">


## Prerequisites

Before running the project, make sure you have the following:

- Node.js installed on your machine (version 16.19.0 or higher)
- An API key for Google Maps (details provided in Step 1)

## Getting Started

1. Add your Google Maps API key in the `main.ts` file:

```
app.use(VueGoogleMaps, {
load: {
key: '#insert your key here#',
libraries: "places"
},
```

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build
```

### Lints and fixes files

```
# yarn
yarn lint

# npm
npm run lint

# pnpm
pnpm lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).


