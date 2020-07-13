<template>
  <div class="home">
    <app-bar />
    <v-main>
      <carousel />

      <home-body />
      <v-sheet height="50"></v-sheet>

    </v-main>
    <footer-app />
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from "@/components/core/AppBar.vue";
//import Carousel from '@/components/partials/Carousel.vue';
// import Parallax from '@/components/partials/Parallax.vue';
import Carousel from "@/components/partials/Carousel.vue";
import HomeBody from "@/components/partials/HomeBody.vue";
// import Slide from "@/components/partials/Slide.vue";
import Footer from "@/components/core/Footer.vue";

export default {
  name: "Home",
  components: {
    "app-bar": AppBar,
    // 'parallax': Parallax,
    
    'carousel': Carousel,
    "home-body": HomeBody,
    "footer-app": Footer
  }
};
</script>
