import Vue from 'vue';
import App from './App';
import Register from './Register';
import FindRecipe from './FindRecipe';
import SignIn from './SignIn';
import VueFirestore from 'vue-firestore';
import Vuex from "vuex";

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

new Vue({
  el: '#signin',
  template: '<SignIn/>',
  components: { SignIn },
})

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