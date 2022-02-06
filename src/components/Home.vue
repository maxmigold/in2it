 <template>
  

    <v-main>
      <v-row justify="space-around">
        <v-card width="100%" height="470">
          <v-img
            height="470px"
            src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          >
            <v-card-title class="mt-8">
              <h1 class="ml-3 dark--text lighten-3--text">
                Your Corporate Real Estate Company
              </h1>
            </v-card-title>
            <v-card-title class="mt-8"
              ><h1 class="ml-8 dark--text lighten-3-text">
                And Management
              </h1></v-card-title
            >
          </v-img>
        </v-card>
      </v-row>
      <v-container grid-list-xl>
        <h2 class="ml-5 mt-5">Know how in three industry verticals</h2>
      </v-container>
      <v-container grid-list-xl>
        <v-layout row align="center" class="gridContainer">
          <v-flex xs6 sm4 md3 xl2>
            <v-card class="mx-auto" width="500">
              <v-img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                height="200px"
                width="500px"
              ></v-img>

              <v-card-title>Real Estate Management </v-card-title>

              <v-card-subtitle> CREM</v-card-subtitle>
            </v-card>
          </v-flex>
          <v-flex xs6 sm4 md3 xl2>
            <v-card class="mx-auto" width="500">
              <v-img
                src="https://media.istockphoto.com/photos/businessman-trading-online-stock-market-on-teblet-screen-digital-picture-id1311598658?k=20&m=1311598658&s=612x612&w=0&h=DsH-Xq0w9pENqAw2i9EU4u4t-GZBKNndseKeOleByiY="
                height="200px"
                width="500px"
              ></v-img>

              <v-card-title> </v-card-title>

              <v-card-subtitle> (IT)</v-card-subtitle>
            </v-card>
          </v-flex>
          <v-flex xs6 sm4 md3 xl2>
            <v-card class="mx-auto" width="500">
              <v-img
                src="https://media.istockphoto.com/photos/portrait-handsome-working-dress-safety-vest-and-safety-helmet-hold-picture-id1309496470?k=20&m=1309496470&s=612x612&w=0&h=CUQj__3ZlMo1RUqpS6CuVCSkNXe4E11dymIhicUusew="
                height="200px"
                width="500px"
              ></v-img>

              <v-card-title> Professional Services </v-card-title>

              <v-card-subtitle></v-card-subtitle>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  
</template>

<script>

export default {
  name: "HomeWorld",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.imageMain {
  background-position: center;
  object-fit: contain;
  display: block;
}
.gridContainer {
  text-align: center;
  justify-content: space-evenly;
}
</style>


// <script>
//   export default {
//     name: 'HelloWorld',

//     data: () => ({
//       ecosystem: [
//         {
//           text: 'vuetify-loader',
//           href: 'https://github.com/vuetifyjs/vuetify-loader',
//         },
//         {
//           text: 'github',
//           href: 'https://github.com/vuetifyjs/vuetify',
//         },
//         {
//           text: 'awesome-vuetify',
//           href: 'https://github.com/vuetifyjs/awesome-vuetify',
//         },
//       ],
//       importantLinks: [
//         {
//           text: 'Documentation',
//           href: 'https://vuetifyjs.com',
//         },
//         {
//           text: 'Chat',
//           href: 'https://community.vuetifyjs.com',
//         },
//         {
//           text: 'Made with Vuetify',
//           href: 'https://madewithvuejs.com/vuetify',
//         },
//         {
//           text: 'Twitter',
//           href: 'https://twitter.com/vuetifyjs',
//         },
//         {
//           text: 'Articles',
//           href: 'https://medium.com/vuetify',
//         },
//       ],
//       whatsNext: [
//         {
//           text: 'Explore components',
//           href: 'https://vuetifyjs.com/components/api-explorer',
//         },
//         {
//           text: 'Select a layout',
//           href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
//         },
//         {
//           text: 'Frequently Asked Questions',
//           href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
//         },
//       ],
//     }),
//   }
// </script>
