<template>
<v-app>
    <v-app-bar app color="white">
      <div class="d-flex align-center">
        <h1 class="blue--text lighten-3--text">In</h1>
        <h1>2</h1>
        <h1 class="blue--text lighten-3--text">it</h1>
      </div>

      <v-spacer></v-spacer>

      <router-link to="#" style="color: grey; text-decoration: none">
        <span class="hidden-sm-and-down links">About</span>
      </router-link>
      <router-link
        to="#"
        style="color: grey; text-decoration: none"
        class="mx-2"
      >
        <span class="hidden-sm-and-down links">Contact</span>
      </router-link>
      <router-link
        to="#"
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
        <span class="links">Careers</span>
      </router-link>
    </v-app-bar>
</v-app>
</template>
<script>
export default {
  name: "Navbar",

  data: () => ({
    //
  }),
};

</script>

