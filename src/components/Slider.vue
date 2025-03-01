<template>
    <section class="slideshow">
        <div class="slider-wrapper">
            <div class="slider" ref="slider" @scroll="updateCurrentIndex">
              <img v-for="(image, index) in images" 
                   :key="index" 
                   :src="image.src" 
                   :alt="image.alt"
                   draggable="false" />
            </div>
            <div class="slider-nav">
              <a v-for="(image, index) in images" 
                 :key="index" 
                 @click.prevent="scrollToImage(index)" 
                 :class="{ active: currentIndex === index }">
              </a>
            </div>
        </div>
    </section>
  </template>
  

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const images = ref([
      { id: "slide-1", src: new URL('@/assets/pictures/bambus.jpg', import.meta.url).href, alt: "Bambus" },
      { id: "slide-2", src: new URL('@/assets/pictures/buda.jpg', import.meta.url).href, alt: "Buda" },
      { id: "slide-3", src: new URL('@/assets/pictures/kivid.jpg', import.meta.url).href, alt: "Buda" },
      { id: "slide-4", src: new URL('@/assets/pictures/murr.jpg', import.meta.url).href, alt: "Buda" },
      { id: "slide-5", src: new URL('@/assets/pictures/jooga.jpg', import.meta.url).href, alt: "Buda" },
      { id: "slide-6", src: new URL('@/assets/pictures/tee.jpg', import.meta.url).href, alt: "Buda" }
    ]);

    const currentIndex = ref(0);
    const slider = ref(null);

    const updateCurrentIndex = () => {
      if (!slider.value) return;
      
      const scrollLeft = slider.value.scrollLeft;
      const width = slider.value.clientWidth;
      const newIndex = Math.round(scrollLeft / width);

      // Only update if the index actually changed
      if (newIndex !== currentIndex.value) {
        currentIndex.value = newIndex;
      }
    };

    const scrollToImage = (index) => {
      if (slider.value) {
        const imageWidth = slider.value.clientWidth;

        // Scroll smoothly to the selected image
        slider.value.scrollTo({ left: index * imageWidth, behavior: "smooth" });

        // Force update currentIndex after a slight delay (ensures smooth transition tracking)
        setTimeout(() => {
          currentIndex.value = index;
        }, 300); // Small delay for transition completion
      }
    };

    onMounted(() => {
      if (slider.value) {
        slider.value.addEventListener("scroll", updateCurrentIndex);
      }
    });

    onUnmounted(() => {
      if (slider.value) {
        slider.value.removeEventListener("scroll", updateCurrentIndex);
      }
    });

    return {
      images,
      currentIndex,
      slider,
      scrollToImage
    };
  }
};
</script>


<style scoped>
.slideshow {
    padding: 2rem;
    margin-top: 1rem;
}

.slider-wrapper {
    position: relative;
    max-width: 60rem;
    margin: 0 auto;
}

.slider {
    display: flex;
    aspect-ratio: 16 / 9;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    box-shadow: 0 1.5rem 3rem  -0.75rem hsla(0, 0%, 0%, 0.25);
    border-radius: 0.5rem;
}

/* Custom scrollbar for Firefox */
.slider {
    scrollbar-width: thin; /* Makes the scrollbar thinner */
    scrollbar-color: rgb(101, 162, 97) rgba(255, 255, 255, 0.2); /* Thumb and track color */
}

/* Custom scrollbar for Chrome, Edge, and Safari */
.slider::-webkit-scrollbar {
    height: 8px; /* Slimmer scrollbar */
}

.slider::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.2); /* Semi-transparent track */
    border-radius: 10px;
}

.slider::-webkit-scrollbar-thumb {
    background: rgb(101, 162, 97); /* Matches your navigation dots */
    border-radius: 10px;
}

.slider::-webkit-scrollbar-thumb:hover {
    background: rgb(50, 120, 50); /* Darker green on hover */
}

.slider img {
    flex: 1 0 100%;
    scroll-snap-align: start;
    object-fit: cover;
}

.slider-nav {
    display: flex;
    column-gap: 1rem;
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}

.slider-nav a {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: rgb(101, 162, 97);
    opacity: 0.75;
    transition: opacity ease 250ms;
}

.slider-nav a:hover {
    opacity: 1;
}

.slider-nav a.active {
  opacity: 1;
  background-color: rgb(222, 255, 73); /* Highlight active dot */
}
</style>
  