<template>
    <div>
        <p-sidebar  :visible.sync="visibleLeft" class="p-sidebar-sm" :modal=false :ariaCloseLabel="pi-angle-double-left">
            <p-menu />
        </p-sidebar>
        <botao-mostrar icon="pi pi-bars" class="p-button-text titulo-menu "  @click="visibleLeft = true" v-show="!visibleLeft"/>
    </div>
</template>

<script>
    import Sidebar from 'primevue/sidebar';
    import Button from 'primevue/button';
    import Menu from '../menu-lateral/Menu.vue';

    export default {
        components:{
            "p-sidebar":Sidebar,
            "botao-mostrar": Button,
            "p-menu": Menu,
        },
        data(){
            return{
                visibleLeft: false,
            };
        },
        
    }
</script>

<style scoped>
.p-sidebar{
    width: 20%;
}

</style>