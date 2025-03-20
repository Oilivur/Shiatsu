<template>
  <main>
    <div class="content-box">
      <p>Lorem ipsum...</p>
      <p>Lorem ipsum...</p>
      <p>Lorem ipsum...</p>
    </div>

    <Slider />

    <footer>
      <h3>&copy; Terindo</h3>
      <p>terje@terindo.ee</p>
    </footer>
  </main>
</template>


<script>
import Slider from "@/components/Slider.vue"; // Import the new slider component

export default {
  components: {
    Slider
  }
};
</script>
