<template>
  <v-carousel v-model="model" hide-delimiters cycle show-arrows-on-hover>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
      <v-row
        class="fill-height"
        align="center"  
        justify="center"
      >
        <p class="title font-weight-medium" :color="item.color" style="font-size: 2rem !important;" id="caroText">{{ item.text }}</p><br>
        <v-container id="cont">
          <p class="text-center body-1">{{ item.desc }}</p>
        </v-container>
        
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=austin-distel-EMPZ7yRZoGw-unsplash.jpg",
          text: 'The fastest place to trade and achieve great income',
          desc: 'We also help you to trade and maintain your standard',
          color: 'white--text'
        },
        {
          src: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=sebastian-herrmann-NbtIDoFKGO8-unsplash.jpg",
          text: 'Join the winning team SpakTrade', 
          desc: 'Extra $50 after payment, you can cash out any time you want ',
          color: 'white--text'
        },
        {
          src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=stephen-dawson-qwtCeJ5cLYs-unsplash.jpg",
          text: 'Access to World class trading tutorials',
          desc: 'We have a complete guide that will help you trade and teach others how to trade',
          color: 'white--text'
        },
      ],
    };
  }
};
</script>

<style scoped>
  @media screen and (max-width: 1024px) {
    #caroText {
      font-size: 0.5rem !important;
      text-align: center !important;
      font-weight: 400 !important;
    }

  }
  #cont {
    padding: 0px !important;
    margin-top: -20rem !important;
  }
</style>
