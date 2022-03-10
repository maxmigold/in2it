<template>
  <v-main class="ma-0 pa-0">
    <!-- slider section -->
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <v-container grid-list-xl>
      <div class="d-flex align-center">
        <span class="ml-5 mt-3 vl"></span>
        <h1 class="ml-1 mt-2 industry-verticals">Our Offers</h1>
      </div>
      <p class="ml-5 mt-5">Know How in Various Industry Verticals</p>
    </v-container>
    <v-container grid-list-xl>
      <v-layout row align="center">
        <v-flex xs12 sm12 md4 xl4 
        v-for="(offer, z) in offers"
        :key="z">
          <v-card class="mx-auto" width="500">
            <v-img
              :src="offer.avatar"
              height="200px"
              width="500px"
            ></v-img>

            <v-card-title>{{offer.header}} </v-card-title>
         
          <v-card-subtitle class="text-justify ">
          {{ offer.details }}
            <span v-if="readMore == false" class="read-more">
        <a @click="readMore =! readMore">Read more</a>
      </span>
      <span v-else class="read-less">
        <a @click="readMore =! readMore">Read less</a>
      </span>
        </v-card-subtitle> 
      <div :class="{readMore:readLess == false}" class="description-info">
       
      </div>
    
  
              
           
           
          </v-card>
        </v-flex>
       
      </v-layout>
    </v-container>
    <v-divider></v-divider>
    <v-container>
      <v-layout row align="center" class="pt-5 mx-7">
        <v-flex v-for="stat in stats" :key="stat.text" xs12 sm3 md4 xl4>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="statistic"
                >{{ stat.number }} +</v-list-item-title
              >
              <v-list-item-subtitle
                class="subtitle brown--text lighten-3--text"
                >{{ stat.details }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider
            class="mx-4 hidden-xs-and-down"
            vertical
            height="10px"
          ></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider class="mt-5"></v-divider>
    <v-container grid-list-xl>
      <div class="d-flex align-center">
        <span class="ml-5 mt-3 vl"></span>
        <h1 class="ml-1 mt-2 industry-verticals">Our Team</h1>
      </div>
      <v-layout row align="center">
        <v-flex xs12 sm12 md3 xl3>
          <v-card class="mx-auto p-2" width="500">
            <v-img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              height="200px"
              width="500px"
            ></v-img>

            <v-card-title>Mario Capuri</v-card-title>

            <v-card-subtitle class="subtitle">Management And BIM Manager</v-card-subtitle>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md3 xl3>
          <v-card class="mx-auto" width="500">
            <v-img
              src="/assets/paulErubami.jpg"
              height="200px"
              width="500px"
            ></v-img>

            <v-card-title>Paul Erubami</v-card-title>

            <v-card-subtitle class="subtitle">Facility Manager And Sustainability Expert</v-card-subtitle>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md3 xl3>
          <v-card class="mx-auto" width="500">
            <v-img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              height="200px"
              width="500px"
            ></v-img>

            <v-card-title> Fisayo Animashaun</v-card-title>

            <v-card-subtitle class="subtitle">Facility And BIM Manager </v-card-subtitle>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md3 xl3>
          <v-card class="mx-auto" width="500">
            <v-img
              src="https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?b=1&k=20&m=1303539316&s=170667a&w=0&h=ePGGvjsOR__-R2KSvZ67xXl2x-CkVzKg8q_WtvqLww0="
              height="200px"
              width="500px"
            ></v-img>

            <v-card-title> Taiwo Emmanuel A. </v-card-title>

            <v-card-subtitle class="subtitle"
              >Architect And BIM Manager</v-card-subtitle
            >
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-layout row align="center" class="pt-5 mx-7">
      <v-flex xs12 sm12 md6 x6>
        <div class="left">
          <v-card
            class="mx-auto my-12"
            width="330"
            height="430"
            outlined
            style="border: 3px solid gray"
            color="lavender"
          >
            <v-card-title class="ml-8 mt-8"
              >Our Unique Selling Point</v-card-title
            >
            <div class="underline-text "></div>
            <v-card-text class="text-justify">
              We create value for design, construction, operation and maintenance of asset/civil 
              works through innovative business processes and digital solutions.
              In2it Afica has close affiliation with major firms and training instituions of international repute and remowned for excellence.
              We create and deliver personalized training programs tailored to the client`s needs from ad hoc courses 2 hours to post-graduate master
              courses covering over 300 hours of lessons. 
            </v-card-text>
            <router-link to="/About">
              <h4 align="center" style="color: grey; text-decoration: none">
                LEARN MORE ABOUT US
              </h4>
            </router-link>

            <div class="underline-learn-text"></div>
          </v-card>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md6 x6>
        <div class="right">
          <div class="d-flex align-center">
            <span class="ml-5 mt-3 vl"></span>
            <h1 class="ml-1 mt-2 industry-verticals">Why Choose Us</h1>
          </div>
          <div class="ml-4 d-flex">
            <span class="contain hidden-sm-and-down"></span>
            <span class="material-icons hidden-sm-and-down people">
              people_alt
            </span>
          </div>
          <h4 class="text-description">
            <strong>Experienced Professionals</strong>
            <p class="info-details text-justify">
              We work with several professionals which cuts across all fields we operate in. They execute tasks with a high level of 
              precision and dedication.
            </p>
          </h4>
          <div class="ml-4 d-flex">
            <span class="contain hidden-sm-and-down"></span>
            <span class="material-icons hidden-sm-and-down people">
              remove_red_eye
            </span>
          </div>
          <h4 class="text-description">
            <strong>Business Review</strong>
            <p class="info-details text-justify">
              We are involved with carrying out expressive business reviews from time to time to know how best to serve our clients.
            </p>
          </h4>
          <div class="ml-4 d-flex">
            <span class="contain hidden-sm-and-down"></span>
            <span class="material-icons hidden-sm-and-down people">
              transform
            </span>
          </div>
          <h4 class="text-description">
            <strong>Technological Transformation</strong>
            <p class="info-details text-justify">
              We are leveraging on technology to transform the real estate sector, facility management, training and so much more.
            </p>
          </h4>
        </div>
      </v-flex>
    </v-layout>
    <v-container>
      <div class="d-flex align-center">
        <span class="ml-5 mt-3 vl"></span>
        <h1 class="ml-1 mt-2 industry-verticals">Our Clients Feedback</h1>
      </div>
      <v-container grid-list-xl>
        <v-layout row align="center">
          <v-flex xs12 sm12 md4 xl4>
            <v-card class="mx-auto" width="500">
              <v-card-subtitle class="subtitle text-justify"
                >Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus
                nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum
                tincidunt malesuada tellus. Ut ult ultrices enim curabitur sit
                amet mauris.</v-card-subtitle
              >
              <v-container class="d-flex">
                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                        class="elevation-6"
                        alt=""
                        src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Doris Simon</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-actions>
              </v-container>
            </v-card>
          </v-flex>
             <v-flex xs12 sm12 md4 xl4>
            <v-card class="mx-auto" width="500">
              <v-card-subtitle class="subtitle text-justify"
                >Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus
                nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum
                tincidunt malesuada tellus. Ut ult ultrices enim curabitur sit
                amet mauris.</v-card-subtitle
              >
              <v-container class="d-flex">
                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                        class="elevation-6"
                        alt=""
                        src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Mercy Shaw</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-actions>
              </v-container>
            </v-card>
          </v-flex>
             <v-flex xs12 sm12 md4 xl4>
            <v-card class="mx-auto" width="500">
              <v-card-subtitle class="subtitle text-justify"
                >Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus
                nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum
                tincidunt malesuada tellus. Ut ult ultrices enim curabitur sit
                amet mauris.</v-card-subtitle
              >
              <v-container class="d-flex">
                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                        class="elevation-6"
                        alt=""
                        src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Brian Francis</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-actions>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>

  
  </v-main>
</template>

<script>

export default {
  name: "Home",

  data: () => ({
    readMore: false,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printertook a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronictypesetting, remaining essentially unchanged. It was popularised in the 1960s  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    items: [
      {
        src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
      {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
      {
        src: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
      },
      {
        src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    ],
    stats: [
      { number: 2342, details: "TRUSTED CLIENTS" },
      { number: 1289, details: "TOTAL EXECUTION" },
      { number: 2563, details: "SUCCESSFUL CASES" },
    ],
     offers: [
      { header:"Scan to BIM", details: "At In2It Africa, we use 3D laser scanning on your physical space or size to create an accurate digital represation of your building; turning it into a digital model that can be used planning and managing your built environment, as well as communicate and share project information with stakeholders.", avatar: "https://media.istockphoto.com/photos/businessman-trading-online-stock-market-on-teblet-screen-digital-picture-id1311598658?k=20&m=1311598658&s=612x612&w=0&h=DsH-Xq0w9pENqAw2i9EU4u4t-GZBKNndseKeOleByiY=" },
       { header:"BIM Authoring and Coordination", details: "At In2It, we make possible the effective integration of all data, both as regards the designs and the construction of your building model through coordination, management development of the project.", avatar: "https://media.istockphoto.com/photos/businessman-trading-online-stock-market-on-teblet-screen-digital-picture-id1311598658?k=20&m=1311598658&s=612x612&w=0&h=DsH-Xq0w9pENqAw2i9EU4u4t-GZBKNndseKeOleByiY=" },
        { header:"Digital Twins", details: "We generate and manage digital representations of physical assets, system and processes with our digital Twin in BIM. Get access to predictive maintenance, real-time remote monitoring, better team collaboration, better financial decision making and an accelerated risk management and production time when you work with In2it Africa. ", avatar: "https://media.istockphoto.com/photos/businessman-trading-online-stock-market-on-teblet-screen-digital-picture-id1311598658?k=20&m=1311598658&s=612x612&w=0&h=DsH-Xq0w9pENqAw2i9EU4u4t-GZBKNndseKeOleByiY=" },
         { header:"Digital Site Construction Works", details: "Our digital site works and construction offer is aimed at supplying and providing a cost effective operation and maintenance of a networked construction. At In2it, we use digital tols to reduce waste and ensure a prompt delivery, leading to increased productivity on the consruction site.", avatar: "https://media.istockphoto.com/photos/businessman-trading-online-stock-market-on-teblet-screen-digital-picture-id1311598658?k=20&m=1311598658&s=612x612&w=0&h=DsH-Xq0w9pENqAw2i9EU4u4t-GZBKNndseKeOleByiY=" },
          { header:"Facility Management and IOT", details: "The dual combination of faciity management and internet of things services is specially offered to ensure a high level of occupant satisfaction and safety across all industry wile still ensuring cost-effectiveness to maximize profit and ensure efficient management for facility managers. Think of a smart building? Think In2it!", avatar: "https://media.istockphoto.com/photos/businessman-trading-online-stock-market-on-teblet-screen-digital-picture-id1311598658?k=20&m=1311598658&s=612x612&w=0&h=DsH-Xq0w9pENqAw2i9EU4u4t-GZBKNndseKeOleByiY=" },
           { header:"Digital Solutions", details: "With our digital solutions, you can now maximize and effectively extend the useful life of all assets across facility management industry using software features for asset tracking, preventive maintenance, parts inventory, repair maintenance, work orders and many others.", avatar: "https://media.istockphoto.com/photos/businessman-trading-online-stock-market-on-teblet-screen-digital-picture-id1311598658?k=20&m=1311598658&s=612x612&w=0&h=DsH-Xq0w9pENqAw2i9EU4u4t-GZBKNndseKeOleByiY=" },
             { header:"Training And Coaching", details: "Our training offers includes: Management of information and collaboration in BIM, Modelling in architecture and MEP (Mechanical, electrical and plumbing) in BIM. 2D, 3D, 4D, 5D, 6D BIM application. Also, Application of BIM in Facility Management", avatar: "https://media.istockphoto.com/photos/businessman-trading-online-stock-market-on-teblet-screen-digital-picture-id1311598658?k=20&m=1311598658&s=612x612&w=0&h=DsH-Xq0w9pENqAw2i9EU4u4t-GZBKNndseKeOleByiY=" },
              { header:"Common Data Environment", details: "Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna", avatar: "https://media.istockphoto.com/photos/businessman-trading-online-stock-market-on-teblet-screen-digital-picture-id1311598658?k=20&m=1311598658&s=612x612&w=0&h=DsH-Xq0w9pENqAw2i9EU4u4t-GZBKNndseKeOleByiY=" },
      
    ],
    
  }),
   methods: {
 
 











  }
};
</script>

<style scoped lang="scss">
.description-info {
    width: 350px;
  }
  .readLess {
    height: 109px;
    overflow: hidden;
  }
  .read-more, .read-less {
    
    display: inline-block;
    color: white;
  }
.gridContainer {
  text-align: center;
  justify-content: space-evenly;
}
.vl {
  border-left: 6px solid #d9b650;
  height: 45px;
}
.industry-verticals {
  font-size: 30px;
  font-weight: 500;
}
.inline-block {
  display: inline-block !important;
}
.pointer {
  cursor: pointer;
}
.statistic {
  font-size: 20px;
}
.left {
  background-image: url("https://images.unsplash.com/photo-1519778119555-47f8a0929968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2t5c2NyYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
  height: 530px;
  width: 100%;
  background-size: cover;
  opacity: 0.8;
}
.right {
  background-color: whitesmoke;
  height: 530px;
  width: 100%;
}
.underline-text {
  width: 270px;
  background-color: #d9b650;
  height: 2px;
  position: relative;
  left:9%;
}
.underline-learn-text {
  width: 180px;
  background-color: #d9b650;
  height: 2px;
  position: relative;
  left: 22%;
}
.people {
  color: #d9b650;
  font-size: 36px;
  position: relative;
  right: 3em;
  top: 25px;
}
.contain {
  background-color: white;
  width: 70px;
  height: 70px;
  border: 3px solid #d9b650;
  border-radius: 50%;
  position: relative;
  right: 3.5em;
  top: 10px;
}
.text-description {
  position: relative;
  left: 1rem;
  top: 10px;
  word-wrap: break-word;
  font-size: 16px;
}
.info-details{
  font-weight: 300;
}
.client-image {
  height: 20px;
  width: 40px;
}




</style>
