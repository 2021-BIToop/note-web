import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import ElementPlus from "element-plus"
import "element-plus/lib/theme-chalk/index.css"
import VueTinymce from "@packy-tang/vue-tinymce"

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VueTinymce)
app.mount("#app")
