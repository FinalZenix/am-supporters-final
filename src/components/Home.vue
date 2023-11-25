<script>
import navbar from "./Navbar.vue";

export default {
  components: {
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

<template>
  <div class="">
    <video autoplay muted loop class="absolute object-cover -z-10 brightness-[25%] w-full h-full">
      <source src="@/assets/Discussion.mp4" type="video/mp4" />
    </video>
    <navbar/>
    <section class="">
      <div class="flex flex-col lg:text-right justify-start md:flex-col w-full mt-0 md:my-8 md:w-10/12 mx-auto">
        <div class="flex flex-col md:w-4/7 space-y-3 mt-4 justify-around md:mx-0 w-11/12 mx-auto">
          <p class="text-5xl md:text-8xl  lg:text-start text-bottom text-primary font-[Playfair]">Alle Menschen sind <span class="italic brightness-125">frei</span> und <span class="italic brightness-125">gleich</span> an <span class="italic brightness-125">Würden</span> und <span class="italic brightness-125">Rechten</span> geboren.</p>
        </div>
        <div class="flex flex-col lg:text-right md:flex-row w-11/12 mt-10 mx-auto md:mt-10 md:mb-20 mb-5">
          <div class="flex flex-col md:w-full space-y-3 mt-4 md:mx-0">
            <p class="text-3xl md:text-4xl text-center lg:text-end text-bottom text-gray-100 font-extralight">Sind Sie auf der Suche nach einem Dolmetscher? Dann sind Sie hier richtig!</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="w-full h-fit bg-[#1E1612]">
    <div class="mx-auto grid grid-cols-3 xl:grid-cols-4 gap-12 w-3/4 justify-between -z-40 pt-8 pb-16">
      <a href="#" v-for="(lang, index) in languages" :key="index" class="relative group min-h-[50] aspect-[3/2] brightness-[85%]">
        <img :src="lang.image" alt="" class="absolute group-hover:blur-md transition-all duration-400 group-hover:brightness-[50%] object-cover aspect-[3/2] rounded-lg md:rounded-xl">
        <div class="w-full absolute text-center text-lg md:text-2xl text-primary opacity-0 group-hover:opacity-100 transition-all duration-400 bottom-[40%] mx-auto font-bold z-10" >{{lang.name}}</div>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>