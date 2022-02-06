<template>
   <v-app class="dark lighten-4">

    <v-main>
      <Navbar/>
      <Home/>
      <!-- <router-view/>  -->
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
export default {
  name: "App",
   components: {
   
    Navbar,
    Home,
    

    
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.imageMain {
  background-position: center;
  object-fit: contain;
  display: block;
}
.gridContainer {
  text-align: center;
  justify-content: space-evenly;
}
</style>
