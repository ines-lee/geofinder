/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


// Components
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)





registerPlugins(app)

app.use(VueGoogleMaps, {
    load: {
        key: '',
        libraries: "places"
    },
}).mount('#app')