import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { MdApp, MdToolbar, MdButton, MdContent, MdDrawer, MdField, MdIcon, MdList, MdTabs, MdMenu, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import InputColorPicker from 'vue-native-color-picker'
import VueMq from 'vue-mq'
import router from './router'
import '@/themes/all.scss'
import PesterchumIRC from '@/components/pesterchumirc/pesterchumirc'

Vue.config.productionTip = false

// Vue Material
Vue.use(MdApp)
Vue.use(MdToolbar)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdDrawer)
Vue.use(MdField)
Vue.use(MdIcon)
Vue.use(MdList)
Vue.use(MdTabs)
Vue.use(MdMenu)
Vue.use(MdCard)

// Vue Color Picker
Vue.use(InputColorPicker)

// Vue Media Queries
Vue.use(VueMq, {
    breakpoints: {
        mobile: 450,
        tablet: 900,
        laptop: 1250,
        desktop: Infinity,
    }
})

// IRC Client
Vue.use(PesterchumIRC)

new Vue({
    store,
    el: '#app',
    router,
    components: { App },
    template: '<App />'
})