<template>
  <div id="app">
    <topo/>
    <home/>
  </div>  
</template>

<script>

import Topo from './components/shared/toolbar/Topo.vue';
import Home from './components/home/Home.vue';
export default {
  components:{
    "topo" : Topo,
    "home": Home,
  },

}
</script>

<style>
@import '~primevue/resources/primevue.min.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  position: fixed;
  width: 100%;
  margin-top: -0.8em;
  margin-left: -0.5em;
}
</style>
