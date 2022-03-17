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
              contain
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
                {name:"Mario Capuri", position: "A Senior Executive and Managing Director at in2it, also a Faculty Member. He is a BIM Manager Master of Politecnico di Milano. Industry Focus: Digitalization (BIM Methodology and Facility Management).Functional experience in Change Management, Global Sourcing, Process and Organization Redesign.", avatar:"/assets/mario.jpeg"},
                {name:"Paul Erubami", position: "An Experienced Facility Manager, Industrial Engineer & Sustainability ExpertLecturer at the University of Lagos. Masters in FM program, IFMA qualified trainer for CFM, FMP and SFP Credentials. Industry Focus: Oil and Gas, Telecoms, and Corporate Real Estate. Functional experience in Strategy Implementation, Technology Deployment, Operations systems and Processes Change Management.", avatar:"/assets/paulErubami.jpg"},
                {name:"Fisayo Animashaun", position: "A Skilled Facilities/Project Management Professional with over 7 years of experience in supervising and managing operations in a wide range of industries with outstanding skills and competencies in project management, maintenance management, operations, safety management and Facilities Management technologies (BIM, BMS, IoT etc.).He Displays exceptional skills in problem-solving, team building, negotiation and leadership.", avatar:"/assets/fisayo.jpeg"},
                {name:"Taiwo Emmanuel A.", position: "A highly talented, driven, and flexible Architect with a proven record of delivering creative and innovative design solutions, with experience in Architectural Design, Construction and Building Information Modelling (BIM). He is always ready for innovation, innovative ideas and technology alongside deploying solutions to solve big problems faced in the AEC Industry.", avatar:"/assets/emmanuel.jpeg"},
                {name:"Sunny Ojo", position: "An Experienced BIM Modeler with a demonstrated history of working in the facilities services industry. Skilled in AutoCAD, HVAC, Computer-Aided Design (CAD), Engineering, and Revit. Strong arts and design professional graduated from Obafemi Awolowo University", avatar:"/assets/sunny.jpeg"},
                {name:"Arise Oluwatobiloba", position: "A talented architectural and graphic designer. He's a graduate of building technology with excellent knowledge in using Revit, 3dsmax, Rhino, SketchUp, adobe photoshop,  adobe illustrator, InDesign and Premiere Pro. He's skilled in interfacing with these tools for both architectural designs, image enhancements and graphic design.", avatar:"/assets/Arise.jpeg"},
                {name:"Kehinde Ayobade", position: "I am an intelligent, versatile, problem solving and highly proactive practitioner Of Civil Engineering; with experience in Building Information Modelling (BIM), Structural Engineering, Computational and Algorithm Design, Programming anddatabase management.I am a good team player who can learn and apply new technologies.I am a fan of innovation, innovative ideas and technology alongside deploying solutions to solve big problems faced in the AEC Industry. I’m also interested in mentoring and educating students and young professionals within the AEC space and beyond on how to leverage technology for full scale disruption in the industry.", avatar:"/assets/kehinde.jpeg"},
                {name:"Ani Vitalis Nnaemeka", position: "A trained Electrical Engineer and worked as an Electrical power Engineer. It's more of been specialised in the installation, maintenance and repairs of Electrical power fittings and services equipment for buildings, sites and industrial uses.", avatar:"/assets/vitalis.jpeg"},
               
                
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