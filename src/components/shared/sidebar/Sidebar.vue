<template>
    <div>
        <p-sidebar  :visible.sync="visibleLeft" class="p-sidebar-sm" :modal=false :ariaCloseLabel="pi-angle-double-left">
           <div>
               <div id="avatar-logo">
                    <img id="img-logo" src="../../../assets/imagens/logo-shield.png" />           
               </div>
                <h3 id="titulo">ESTOQUE</h3>
           </div>
           <menu-lateral :class="p-mb-5"/>
        </p-sidebar>
        <botao id="botao-menu"  @click="visibleLeft = true" v-show="!visibleLeft"/>
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

#botao-menu{
    background: url(../../../assets/imagens/logo-shield.png);
    background-size: 58px ;
    height: 50px;  
    width: 30px;
}

#avatar-logo{
    background-color: black;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    overflow: hidden;
    position: relative;
    margin-top:1rem;
    margin-left:3.5rem;
}

#img-logo{
    height: 100%;
    width: 120%;
    margin-left: -1rem;
}

#titulo{
    font-family: 'Poppins';
    font-size: 1.5rem;
    margin-left: 5rem;
}

.p-button{
    background-color: black;
}

</style>