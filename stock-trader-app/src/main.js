import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes';
import store from './store/store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root='https://vuejs-stock-trader-f8346-default-rtdb.asia-southeast1.firebasedatabase.app/';
Vue.filter('currency', (value)=>{
   return  '$' + value.toLocaleString();
});
const router=new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  render: h => h(App),
  router,store,
}).$mount('#app')
