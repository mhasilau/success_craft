import { createApp } from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(Vuelidate)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
