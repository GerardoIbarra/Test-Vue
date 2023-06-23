import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/bootstrap.min.css'
import '@/assets/bootstrap.bundle.min.js'
import 'material-icons/iconfont/material-icons.css'
import VueAxios from 'vue-axios'
import axios from 'axios'
import md5 from 'md5'
import Cookies from 'js-cookie'

const app = createApp(App)

app.use(router)

app.mount('#app')
app.use(VueAxios, axios)
app.use(md5)
app.use(Cookies)
