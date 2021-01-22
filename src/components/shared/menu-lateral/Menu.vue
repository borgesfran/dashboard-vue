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
                    {separator: true},
                    {   label: "Projetos",
                        icon: "pi pi-th-large",
                        items:[
                            {label:"REST-API"},
                            {label:"Task"}
                        ]
                        },
                    {label: "Sair",icon: "pi pi-power-off"}
                ]
            }
        }
    };
</script>

<style scoped>

.p-submenu-list {
  float: right !important;
  margin-left: auto;
}
.subitem {
  font-size: 50% !important;
}

.p-menu{
  width: 100% !important;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  border: none;
  padding: 0;
}

</style>