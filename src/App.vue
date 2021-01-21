<template>
 
  <div id="app">
    <div class="p-d-inline p-d-flex p-jc-between">
      <menu-lateral/>
    </div>
  </div>  
</template>

<script>

import Sidebar from './components/shared/sidebar/Sidebar.vue';

export default {
  components:{
    "menu-lateral" : Sidebar,
  },

}
</script>

<style>
@import '~primevue/resources/primevue.min.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
