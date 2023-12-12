import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SvgIcon from './components/SvgIcon.vue'
import 'virtual:svg-icons-register' 
import router from './router'


let app = createApp(App)
app.use(router)
app.component('svg-icon', SvgIcon)
app.mount('#app')