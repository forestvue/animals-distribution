import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import VueFirestore from "vue-firestore"

Vue.config.productionTip = false

Vue.use(VueFirestore);

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent(){
      return router[this.currentRoute]
    }
  },
  
  router,
  render: h => h(App)
}).$mount('#app')
