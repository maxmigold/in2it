<template>
  <div>
    <nav>
      <v-app-bar class="ma-0 pa-0" app color="white" >
      <v-toolbar-title class="dark--text">
       <router-link to="/" style="text-decoration: none">
          <div class="d-flex align-center">
            
            <v-img
             max-height="100"
             max-width="160"
             src="/assets/in2itlogo.png"
             class="mt-5"
></v-img>
          </div>
        </router-link>
      </v-toolbar-title>
       

        <v-spacer></v-spacer>
        
        <v-navigation-drawer
      v-model="drawer"
        class="grey darken-4"
        app  clipped hide-overlay
       
    >
     <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title white--text">
              Welcome!
            </v-list-item-title>
            <v-list-item-subtitle class="white--text">
              
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.routes"
            link
            style="text-decoration: none;"
          >
           

            <v-list-item-content>
              <v-list-item-title
                class=" white--text"
                style="color: white; text-decoration: none;"
                >{{ link.text }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
     
    </v-navigation-drawer>

        <router-link to="/" style="color: grey; text-decoration: none">
          <span class="hidden-sm-and-down links">Home</span>
        </router-link>
        <router-link
          to="/About"
          style="color: grey; text-decoration: none"
          class="mx-2"
        >
          <span class="hidden-sm-and-down links">About Us</span>
        </router-link>
        <router-link
          to="/Story"
          style="color: grey; text-decoration: none"
          class="mx-2"
        >
          <span class="hidden-sm-and-down links">Our Story</span>
        </router-link>
        <router-link
          to="#"
          style="color: grey; text-decoration: none"
          class="mx-2"
          disabled
        >
          <span disabled class="hidden-sm-and-down links">Blog</span>
        </router-link>
        <router-link
          to="/Contact"
          style="color: grey; text-decoration: none"
          class="mx-2"
        >
          <span class="hidden-sm-and-down links">Contact Us</span>
        </router-link>
        <v-icon
          right
          medium
          @click="drawer = !drawer"
          class="material-icons-round  hidden-md-and-up mx-1" 
        >menu</v-icon>
      </v-app-bar>
    </nav>
  </div>
</template>
<style scoped>
.logo-text {
  font-size: 33px;
}
.logo-number {
  font-size: 33px;
  color: black;
}
</style>
<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    links: [
      { text: "Home", routes: "/" },
      { text: "About",  routes: "/About" },
      { text: "Our Story", routes: "/Story" },
      { text: "Blog", routes: "/Blog" },
      { text: "Contact", routes: "/Contact" },
    ],
  }),
  watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
