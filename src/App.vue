<template>
  <v-app class="dark lighten-4">

    <v-main>
      <Navbar/>
     <router-view/> 
     <Footer/>
     
      
    </v-main>
  </v-app>
</template> 
 

<style  scoped>


</style>


<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
   
    Navbar,
    Footer,
    

   
    
  },
  data: () => ({
    //
  }),
};
</script>