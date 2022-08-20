import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
// import AmplifyVue from '@aws-amplify/ui-vue';
// import {
//   applyPolyfills,
//   defineCustomElements,
// } from '@aws-amplify/ui-components/loader';

Amplify.configure(awsconfig);

// applyPolyfills().then(() => {
//   defineCustomElements(window);
// });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
