<script>
import navbar from "./Navbar.vue";
export default {
  components: {
    navbar
  },
  data() {
    return {
      text: "",
      phrases: [
        "Übersetzen.",
        "Respektieren.",
        "Tolerieren.",
      ],
      currentPhraseIndex: 0,
      currentCharacterIndex: 0,
      currentPhrase: "",
      isDeleting: false,
      delay: 1500, // delay time in milliseconds
    };
  },
  mounted() {
    this.loop();
  },
  methods: {
    loop() {
      const currentPhraseText = this.phrases[this.currentPhraseIndex];
      if (!this.isDeleting) {
        this.currentPhrase += currentPhraseText[this.currentCharacterIndex];
        this.currentCharacterIndex++;
        this.delay = 0;
      } else {
        this.currentPhrase = this.currentPhrase.slice(0, -1);
        this.currentCharacterIndex--;
        this.delay = 0;
      }
      this.text = this.currentPhrase;
      if (this.currentCharacterIndex === currentPhraseText.length) {
        this.isDeleting = true;
        this.delay = 1500; // set the delay time after typing the word
      }
      if (this.currentCharacterIndex === 0) {
        this.currentPhrase = "";
        this.isDeleting = false;
        this.currentPhraseIndex++;
        if (this.currentPhraseIndex === this.phrases.length) {
          this.currentPhraseIndex = 0;
        }
        this.delay = 500; // set the delay time before typing the next word
      }
      const spedUp = 65;
      const normalSpeed = 65;
      const time = this.isDeleting ? spedUp : normalSpeed;
      setTimeout(this.loop, time + this.delay); // add the delay time to the typing time
    },
  },
};
</script>


<template>
  <div class="">
    <video autoplay muted loop class="absolute object-cover -z-10 brightness-[25%] w-full h-full">
      <source src="@/assets/Discussion.mp4" type="video/mp4" />
    </video>
    <navbar/>
    <section class="">
      <div class="flex flex-col lg:text-right justify-start md:flex-col w-full mt-0 md:my-8 md:w-11/12 mx-auto">
        <div class="flex flex-col md:w-4/7 space-y-3 mt-4 justify-around md:mx-0 w-full mx-auto">
          <p class="flex flex-col text-5xl md:text-8xl  lg:text-center text-center text-primary font-[Playfair] w-fit mx-auto" >AWS - Mehr als nur <span class="italic brightness-125 w-fit mx-auto">{{text}}<span class="animate-blink">|</span></span></p>
        </div>
        <div class="flex flex-col lg:text-right md:flex-row w-11/12 mt-10 mx-auto md:mt-10 md:mb-20 mb-5">
          <div class="flex flex-col md:w-full space-y-3 mt-4 md:mx-0 mx-auto">
            <p class="text-3xl md:text-4xl text-center lg:text-center text-bottom text-gray-100 font-extralight">Wir sind eine Gruppe von jungen Menschen, die ehrenamtlich als Dolmetscher tätig sind. Wir übersetzen alltägliche Briefe, helfen bei Terminen beim Amt, bei Ärzten oder Ähnlichem.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="w-full h-fit bg-[#1E1612]">
    <div class="mx-auto grid grid-cols-3 xl:grid-cols-4 gap-12 w-3/4 justify-between -z-40 pt-8 pb-16">
    </div>
  </div>
</template>

<style scoped>
@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 1s infinite;
}
</style>