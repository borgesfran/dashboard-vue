<template>
  <div>
    <barra-lateral/>
  </div>
  
</template>

<script>
import Sidebar from './shared/toolbar/Topo.vue';

export default {
  name: 'HelloWorld',
  components:{
    'barra-lateral':Sidebar
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
