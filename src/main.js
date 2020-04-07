import Vue from 'vue';
import App from './App';
import Register from './Register';
import VueFirestore from 'vue-firestore';
import {Tabs, Tab} from 'vue-tabs-component';

// turns off the 'You are running Vue in development mode.' msg
Vue.config.productionTip = false;

Vue.use(VueFirestore);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
})


new Vue({
  el: '#register',
  template: '<Register/>',
  components: { Register },
})

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);