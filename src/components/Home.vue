 <template>
    <v-main class="ma-0 pa-0">

        <!-- slider section -->
 <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
       
      
      <v-container grid-list-xl>
        <h1  class="ml-5 mt-5 industry-verticals" >Know how in three industry verticals</h1>
      </v-container>
      <v-container grid-list-xl>
        <v-layout row align="center" class="gridContainer">
          <v-flex xs6 sm4 md3 xl2>
            <v-card class="mx-auto" width="500">
              <v-img
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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

              <v-card-title>Information Technology </v-card-title>

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

              <v-card-subtitle>(Consultancy)</v-card-subtitle>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  
</template>

<script>

export default {
  name: "Home",

  data: () => ({
     items: [
          {
            src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
  }),
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
.imageMain {
  background-position: center;
  object-fit: contain;
  display: block;
}
.gridContainer {
  text-align: center;
  justify-content: space-evenly;
}
.industry-verticals{
  font-size: 30px;
  font-weight: 500;
}
</style>



