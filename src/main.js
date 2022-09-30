//import Vue from 'vue'
import {createApp} from 'vue'
import App from './App'
import router from './router/index'
import store from './vuex/store' // vuex 저장소 추가
// import VeeValidate from 'vee-validate'
import * as VeeValidate from 'vee-validate'

export const app = createApp(App);

//Vue.use(VeeValidate)
app.use(VeeValidate);

// Vue.config.productionTip = false
app.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
app.use(router);
app.use(store);
app.mount("#app");