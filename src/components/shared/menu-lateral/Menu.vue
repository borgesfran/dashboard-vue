<template>
    <div>
        <menu-lateral :model="items"></menu-lateral>
    </div>
</template>

<script>
    import Menubar from "primevue/menu";

    export default {
        components:{
            "menu-lateral":Menubar,
        },
        data(){
            return{
                items:[
                    {label: "Sair",icon: "pi pi-power-off"}
                ]
            }
        }
    };
</script>

<style scoped>
.p-menu{
  width: 10rem !important;
}

</style>