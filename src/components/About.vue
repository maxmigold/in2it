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
        <v-card-subtitle class="text-justify">
          In2It Africa is a corporate real estate management company which offers consulting services, training, customization of software 
          and solutions with a major focus on digitalization facilities and management Building Information Modelling (BIM).
          In2It Africa is incorporated in Nigeria as <strong>In2CREM Ltd.</strong> In2it Africa provides you solutions for investment planning, land acquisition, 
          design, construction/fit-up, management and maintenance of coporate and commercial real estate at your finger tips.
          With In2It Africa services, you can save costs and prevent problems by digitalizing your building and civil works systems.  
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
  
    data() {
    return {
      txtString: `Note: This property was originally implemented in WebKit and has some issues. It got standardized for legacy support. The CSS Overflow Module Level 3 specification also defines a line-clamp property, which is meant to replace this property and avoid its issues.`,
    }
  },

  
 
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