<template>
    <div>
        <menu-lateral :model="items"/>
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
    }
</script>

<style scoped>

</style>