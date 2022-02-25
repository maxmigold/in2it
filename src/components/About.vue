<template>
  <div class="contain">
    <v-container>
        <v-img
  height="420"
  width="100%"
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
></v-img>
    </v-container>
  
 <v-card
    class="mx-auto card-container"
    outlined
  >
    <v-list-item >
      <v-list-item-content>
        <v-list-item-title class="text-h5 header-text">
          How We Work
        </v-list-item-title>
        <v-card-subtitle>
          Greyhound divisely hello coldly fonwderfully
          Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa vestil bulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per mauris fusce conubia nostra.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa vestil bulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per mauris fusce conubia nostra.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa vestil bulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per mauris fusce conubia nostra.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa vestil bulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per mauris fusce conubia nostra.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa vestil bulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per mauris fusce conubia nostra.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa vestil bulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per mauris fusce conubia nostra.
          </v-card-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <router-link
          to="/Contact"
          style="text-decoration: none"
          class="mx-2"
        >
          <v-btn
        outlined
        text
        color="orange"
      >
        Contact Us
      </v-btn>
        </router-link>
    
    </v-card-actions>
  </v-card>
  </div>




   
</template>
<script>
export default {
  name: "About",
    data: () => (
        {
            //
        }
        
    ),

    
 
};
</script>
<style scoped>
.contain{
  height: inherit;
}
.header-text{
  text-align: center;
}
.card-container{
  position: relative;
  bottom: 6rem;
  width: 50em;
}
</style>