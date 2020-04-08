import Vue from 'vue';
import App from './App';
import Register from './Register';
import SignIn from './SignIn';
import FindRecipe from './FindRecipe';
import VueFirestore from 'vue-firestore';
import Vuex from "vuex";

// turns off the 'You are running Vue in development mode.' msg
Vue.config.productionTip = false;

Vue.use(VueFirestore);

export default new Vuex.Store({
  state: {
    user: {
      email: '',
      firstName: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {}
 });

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

new Vue({
  el: '#account',
  template: '<Account/>',
  components: { Account },
})

new Vue({
  el: '#signin',
  template: '<SignIn/>',
  components: { SignIn },
})