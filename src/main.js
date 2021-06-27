import { createApp } from 'vue'
import App from './App.vue'

import VueCodeHighlight from 'vue-code-highlight';
import 'vue-code-highlight/themes/duotone-sea.css'
import 'vue-code-highlight/themes/window.css'

// Import Router
import router from './router' 

// Import Tailwind CSS
import './assets/tailwind.css'

const app = createApp(App)
app.use(router)
app.use(VueCodeHighlight)
app.mount('#app')
