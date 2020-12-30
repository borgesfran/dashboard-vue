import Vue from 'vue'
import App from './App.vue'
// Importing the Rhea PrimeVue theme styles
import 'primevue/resources/themes/md-light-indigo/theme.css';

// Importing the base PrimeVue component styles
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.min.css';

// Importing the base PrimeIcon styles
import 'primeicons/primeicons.css';

Vue.config.productionTip = false
Vue.prototype.$primevue = {ripple: true};

new Vue({
  
  render: h => h(App),
}).$mount('#app')
