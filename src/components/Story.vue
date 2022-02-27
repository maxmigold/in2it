<template>

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
</template>
<script>
export default {
  name: "Story",
  data: () => ({
    
    links: [
      { text: "Home",  routes: "/" },
      { text: "About",  routes: "/About" },
      { text: "Our Story", routes: "/Story" },
      { text: "Blog", routes: "/Blog" },
      { text: "Contact", routes: "/Contact" },
    ],
  }),
};
</script>