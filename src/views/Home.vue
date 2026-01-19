<template>
  <main>
    <h1>Tere tulemast!</h1>

    <div class="content-box">
      <p>
        Massaaž on nagu maagiline puudutus, mis toob sinu kehale ja vaimule vajalikku hoolitsust. 
        See on võti stressi maandamiseks ja üldise heaolu suurendamiseks. 
      </p>
      <p>
        Massaaž on aeg iseendale, kus saad taastada oma keha, laadida energiavarusid ning tunda end 
        täielikult tasakaalus ja lõõgastununa. See pole mitte ainult nauding, vaid ka hädavajalik samm 
        sinu tervise ja heaolu nimel.
      </p>
    </div>

    <Carousel />
  </main>
</template>



<script>
import Carousel from "@/components/Carousel.vue";

export default {
  components: {
    Carousel
  }
};
</script>