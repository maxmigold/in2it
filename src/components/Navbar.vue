<template>
  <div>
    <nav>
      <v-app-bar class="ma-0 pa-0" app color="white">
        <router-link to="/"
         style="text-decoration: none">
          <div class="d-flex align-center">
            <h1 class="blue--text lighten-3--text logo-text">In</h1>
            <h1 class="logo-number">2</h1>
            <h1 class="blue--text lighten-3--text logo-text">it</h1>
          </div>
        </router-link>

        <v-spacer></v-spacer>
         
         <v-navigation-drawer  v-model="drawer" app class="grey darken-4">
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
            :to="link.route"
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
          <span class="hidden-sm-and-down links">About</span>
        </router-link>
        <router-link
          to="/#"
          style="color: grey; text-decoration: none"
          class="mx-2"
        >
          <span class="hidden-sm-and-down links">Our Story</span>
        </router-link>
        <router-link
          to="#"
          style="color: grey; text-decoration: none"
          class="mx-2"
        >
          <span class="hidden-sm-and-down links">Blog</span>
        </router-link>
        <router-link
          to="/Contact"
          style="color: grey; text-decoration: none"
          class="mx-2"
        >
          <span class="hidden-sm-and-down links">Contact</span>
        </router-link>
      <v-app-bar-nav-icon right medium @click="drawer = !drawer"  class="hidden-md-and-up  mx-1"></v-app-bar-nav-icon>
      </v-app-bar>
    </nav>
  </div>
</template>
<style scoped>
.logo-text{
    font-size: 33px;
}
.logo-number{
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
          {text:"Home", route:"/"},
          {text:"About", route:"/About"},
          {text:"Our Story", route:"/"},
          {text:"Blog", route:"/"},
          {text:"Contact", route:"/"},
      ]
      }),

    
 
};
</script>
