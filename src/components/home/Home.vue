<template>
    <div class="p-grid">
        <div id="dashboard-equipe" class="p-col">
            <div id="dashboard-programadores" class="box">
               <card>
                   <template #title>
                       <h4>PROGRAMADORES</h4>
                   </template>
               </card>
            </div>
        </div>

        <div id="dashboard-equipe" class="p-col">
            <div id="dashboard-analistas" class="box">
               <card>
                   <template #title>
                       <h4>ANALISTAS</h4>
                   </template>
               </card>
            </div>
        </div>
       
    </div>
</template>

<script>
import Card from 'primevue/card';
export default {
     components:{
         "card":Card,
        }
}
</script>

<style scoped>

.p-grid{
    margin: 2%;
}

h4{
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 20px;
}





</style>