
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

window.Vue = require('vue');
import 'vuetify/dist/vuetify.min.css'	
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'
// import LayoutComponent from '.components/LayoutComponent'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(VueApollo)
Vue.use(Vuetify)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('layout-component', require('./components/LayoutComponent.vue'));

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:8000/graphql'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

const app = new Vue({
    el: '#app',
    apolloProvider,
    vuetify: new Vuetify(),
});
