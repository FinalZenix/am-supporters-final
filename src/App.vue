<script>
import navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Footer,
    navbar
  },
  data(){
    return {
      languages:[
          {name: "English", image: "assets/english_flag.jpg"},
          {name: "Spanish", image: "assets/spain_flag.jpeg"},
          {name: "French", image: "assets/french_flag.png"},
          {name: "German", image: "assets/german_flag.png"},
          {name: "Arabic", image: "assets/arabic_flag.png"},
          {name: "Kurd", image: "assets/Kurd_flag.png"},
          {name: "Farsi", image: "assets/persian_flag.jpg"},
          {name: "Urdu", image: "assets/urdu_flag.png"},
          {name: "Vietnamese", image: "assets/vietnamese_flag.png"},
          {name: "Turkey", image: "assets/Turkey_flag.png"},
      ]
    }
  },
}

</script>

<template class="relative w-full bg-[#1E1612]">
  <router-view/>
  <Footer/>
</template>

<style scoped>
</style>
