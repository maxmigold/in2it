<template>
  <v-container>
   <v-card
    class="mx-auto"
    max-width="700"
  >
    <v-card-text>
      
      <p class="text-h4 text--primary text-center">
        How We Started
      </p>
      <p class="text-justify">
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
      </p>
     
    </v-card-text>
  
 

   
  </v-card>
   <v-divider class="mt-5"></v-divider>
   <v-container  grid-list-xl>
    <div class="d-flex align-center">
        <span class="ml-5 mt-3 vl"></span>
        <h1 class="ml-1 mt-2 industry-verticals">Meet the Team Behind In2it.</h1>
      </div>

      <v-layout  row align="center">
       <v-flex xs12 sm12 md3 xl3
        v-for="(team, x) in teams"
        :key="x"
       >
          <v-card class="mx-auto" width="500">
            <v-img
              :src="team.avatar"
              height="200px"
              width="500px"
            ></v-img>

            <v-card-title>{{team.name}}</v-card-title>

            <v-card-subtitle class="subtitle">{{team.position}}</v-card-subtitle>
          </v-card>
        </v-flex>
       
      </v-layout>
   </v-container>
   
  </v-container>



   
</template>
<script>
export default {
  name: "About",
    data: () => (
        {
            teams:[
                {name:"Mario Capuri", position: "Management and BIM Manager", avatar:"/assets/mario.jpeg"},
                {name:"Paul Erubami", position: "Facility Manager And Sustainability Expert", avatar:"/assets/paulErubami.jpg"},
                {name:"Fisayo Animashaun", position: "Facility And BIM Manager", avatar:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
                {name:"Taiwo Emmanuel A.", position: "Architect And BIM Modeller", avatar:"/assets/emmanuel.jpeg"},
                {name:"Sunny Ojo", position: "Mechanical Engineer", avatar:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
                {name:"Arise Oluwatobiloba", position: "Interior Designer", avatar:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
                {name:"Kehinde Ayobade", position: "Structural Engineer", avatar:"/assets/kehinde.jpeg"},
                {name:"Ani Vitalis Nnaemeka", position: "Electrical Engineer", avatar:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
               
                
            ]
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
.vl {
  border-left: 6px solid #d9b650;
  height: 45px;
}
.industry-verticals {
  font-size: 20px;
  font-weight: 500;
}
</style>