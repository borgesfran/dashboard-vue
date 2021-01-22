<template>
    <div>
        <p-sidebar  :visible.sync="visibleLeft" class="p-sidebar-sm" :modal=false :ariaCloseLabel="pi-angle-double-left">
           <div>
               <img id="img-logo" src="../../../assets/imagens/shield.jpg" height="150" width="200" class="p-ml-4" />           
               <h3 id="titulo">ESTOQUE</h3>
           </div>
           <menu-lateral :class="p-mb-5"/>
        </p-sidebar>
        <botao icon="pi pi-bars"  @click="visibleLeft = true" class="p-mr-2" v-show="!visibleLeft"/>
    </div>
</template>

<script>
    import Sidebar from 'primevue/sidebar';
    import Button from 'primevue/button';
    import Menu from '../menu-lateral/Menu.vue';

    export default {
        components:{
            "p-sidebar":Sidebar,
            "botao": Button,
            "menu-lateral": Menu,
        },
        data(){
            return{
                visibleLeft: false,
            }
        },
        
    }
</script>

<style scoped>

.p-menu{
    margin-top:12rem;
}

#img-logo{
    width: 60%;
    height: 60%;
    border-width: 3px;
    border-color: black;
    display: inline-block;
    border-radius: 90px;
    margin: 10% 10% 0 0;
}

#titulo{
    font-family: 'Poppins';
    font-size: 1.5rem;
}


</style>