<template>
  <div class="contain">
    <div class="contact-container">
        <div class="contact-heading">
            <h6 class="touch">Get In Touch</h6>
      <div class="d-flex align-center">
        <span class="material-icons v"> home </span>
        <span class="pt-4 ml-3 texts v"
          >Address: Suite 20B, HRDC Building, University of Lagos Main Campus
          Akoka Yaba, Lagos.
        </span>
      </div>
      <div class="d-flex align-center ">
                <span class="material-icons v"> call </span>
                <p class="pt-4 ml-3 texts v">Mobile:   +234814401177</p>
              </div>
      <div class="d-flex align-center">
        <span class="material-icons v">local_post_office </span>
        <p class="pt-4 ml-3 texts v">
          Email: paul.erubami@maxmigold.com
        </p>
      </div>
        </div>
      
      <v-layout row class="pt-5 mx-7 input">
          <v-flex xs12 sm12 md6 x6 class="input-1">
            <span class="col-list">
                 <v-text-field
            label="First Name"
            width="200px"
            dark
            outlined
           ></v-text-field>
            <v-text-field
            label="Last Name"
            
            dark
            outlined
           ></v-text-field>
           <v-text-field
            label="Email"
            
            dark
            outlined
           ></v-text-field>
            </span>
              
           
            
          
          </v-flex>
          <v-flex xs12 sm12 md6 x6>
               <v-textarea
          solo
          dark
          name="input-7-4"
          label="Type your message here"
        ></v-textarea>
        
          </v-flex>
      </v-layout>
      <div class="text-center">
          <v-btn
      class="ma-2"
      outlined
      color="red"
    >
      Send Message
    </v-btn>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data: () => ({
    //
  }),
};
</script>
<style scoped>
.contain {
  height: 100%;
  max-width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1478728073286-db190d3d8ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRhcmslMjB0aGVtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
}

.contact-container {
  text-align: center;
  padding-top: 30px;
}
.contact-heading{
    text-align: center;
}
.touch {
  color: white;
  font-size: 40px;
  font-weight: 400;
}
.v {
  color: antiquewhite;
  position: relative;
  left: 5px;
  
}
.texts{
    font-size: 16px;
}
.input{
    color: white;
}


</style>
