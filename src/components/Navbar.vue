<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    openMenu: function (){
      let x = document.getElementById("menu");
      if (x.className.includes("hidden")){
        x.className = x.className.replace("hidden", "flex");
      }else{
        x.className = x.className.replace("flex", "hidden");

      }
    }
  },
}
</script>

<template>
  <nav class="container p-3 mx-auto md:p-0 w-full md:w-3/4 ">
    <div class="flex flex-row justify-between md:hidden w-full">
      <div class="flex justify-start">
        <img class="w-24 h-auto" src="@/assets/fav.png" alt="logo_4">
      </div>
      <button class="w-20 flex items-center px-3 py-2 border-0 my-auto rounded-full flex-col space-y-2 hover:brightness-125 duration-500 transition-all" v-on:click="openMenu()">
        <a class="bg-primary rounded-3xl w-2/3 h-1"></a>
        <a class="bg-primary rounded-3xl w-full h-1"></a>
        <a class="bg-primary rounded-3xl w-2/3 h-1"></a>
      </button>
    </div>
    <div class="hidden md:block md:border-b border-b-primary border-b-[1px] lg:border-0" id="menu">
      <div class="flex flex-col md:grid md:grid-cols-9 w-full">
        <div class="col-span-4 text-lg lg:border-b-[1px] border-b-primary my-auto rounded-l mx-auto w-1/2">
          <ul class="justify-around -space-y-2 md:space-y-0 flex-col md:flex-row md:p-4 sm:px-12 md:flex font-bold md:text-l lg:text-xl text-primary text-center tracking-wider whitespace-nowrap">
            <li class="p-2 py-4 md:py-0"><router-link to="/">HOME</router-link></li>
            <li class="p-2 py-4 md:py-0"><router-link to="/about">ÜBER UNS</router-link></li>
          </ul>
        </div>
        <div class="hidden md:block">
          <div class="flex items-center justify-between">
            <img class="md:mx-auto w-40" src="@/assets/fav.png" alt="logo_4">
          </div>
        </div>
        <div class="col-span-4 text-lg lg:border-b-[1px] border-b-primary my-auto rounded-r mx-auto w-1/2">
          <ul class="justify-around -space-y-2 md:space-y-0 flex-col md:flex-row md:p-4 sm:px-12 md:flex font-bold md:text-l lg:text-xl text-primary text-center tracking-wider whitespace-nowrap">
            <li class="p-2 py-4 md:py-0"><router-link to="/">SERVICES</router-link></li>
            <li class="p-2 py-4 md:py-0"><router-link to="/contacts">KONTAKTE</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>