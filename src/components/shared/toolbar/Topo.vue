<template>
 
    <p-toolbar>
        <template #left>
             <sidebar id="menu-lateral"/>
             <p id="nome-pagina">SQUAD ESTOQUE</p>
        </template>
    </p-toolbar>

</template>

<script>
    import Toolbar from "primevue/toolbar";
    import Sidebar from "../sidebar/Sidebar.vue";
    export default {
        components:{
            "p-toolbar":Toolbar,
            "sidebar": Sidebar,
        }
    }
</script>

<style scoped>
.p-toolbar{
    background-color: black;
    color: #fff;
    width: 100%;
    padding: 0.5%;
    margin-left: 0%;
    margin-bottom: 2%;
}

#menu-lateral{
    margin-top:0.5rem;
}

#nome-pagina{
    margin-top:1.5rem;
    font-size: 18px;
}


</style>