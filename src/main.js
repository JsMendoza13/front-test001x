import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'boostrap/dist/css/bootstrap.css'


createApp(App).use(store).use(router).mount('#app')



import 'boostrap/dist/js/boostrap'