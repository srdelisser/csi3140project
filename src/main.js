import Vue from 'vue';
import App from './App';
import Register from './Register';
import FindRecipe from './FindRecipe';
import VueFirestore from 'vue-firestore';

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

new Vue({
  el: '#findrecipe',
  template: '<FindRecipe/>',
  components: { FindRecipe },
})