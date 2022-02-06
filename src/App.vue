<template>
  <v-app class="dark lighten-4">

    <v-main>
      <Navbar/>
     <router-view/> 
     
      
    </v-main>
  </v-app>
</template> 
 

<style  scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>


<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
   
    Navbar,
   
    
  },
  data: () => ({
    //
  }),
};
</script>