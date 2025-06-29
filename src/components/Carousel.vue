<template>
    <section class="slideshow">  
        <div class="slider-wrapper">
            <div
                ref="carousel"
                class="slider"
                @mouseenter="handleEnter"
                @mouseleave="handleLeave"
                @touchstart="handleEnter"
                @touchend="handleLeave"
                @scroll.passive="updateCurrentIndex"
            >
                <div
                class="carousel-slide"
                v-for="(img, index) in images"
                :key="index"
                >
                <img :src="img.src" :alt="img.alt" />
                </div>
            </div>

            <!-- Arrows go here now -->
            <button
                class="nav-button nav-left"
                @click="goPrevious"
                aria-label="Previous slide"
                v-show="currentIndex > 0"
            >
                &#10094;
            </button>

            <button
                class="nav-button nav-right"
                @click="goNext"
                aria-label="Next slide"
                v-show="currentIndex < images.length - 1"
            >
                &#10095;
            </button>

            <div class="slider-nav">
                <button
                v-for="(_, index) in images"
                :key="index"
                @click="goToSlide(index)"
                :class="{ dot: true, active: currentIndex === index }"
                ></button>
            </div>
        </div>

    </section>
  </template>
  
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const carousel = ref(null)
  const intervalRef = ref(null)
  const direction = ref(1)
  const currentIndex = ref(0)
  const isInteracting = ref(false)
  
  const images = [
    {
      src: new URL('@/assets/pictures/bambus.jpg', import.meta.url).href,
      alt: 'Slide 1'
    },
    {
      src: new URL('@/assets/pictures/jooga.jpg', import.meta.url).href,
      alt: 'Slide 2'
    },
    {
      src: new URL('@/assets/pictures/buda.jpg', import.meta.url).href,
      alt: 'Slide 3'
    },
    {
      src: new URL('@/assets/pictures/kivid.jpg', import.meta.url).href,
      alt: 'Slide 4'
    },
    {
      src: new URL('@/assets/pictures/murr.jpg', import.meta.url).href,
      alt: 'Slide 5'
    },
    {
      src: new URL('@/assets/pictures/tee.jpg', import.meta.url).href,
      alt: 'Slide 6'
    }
  ]
  
  function getCurrentIndex() {
    const scrollLeft = carousel.value.scrollLeft
    const slideWidth = carousel.value.clientWidth
    return Math.round(scrollLeft / slideWidth)
  }
  
  function updateCurrentIndex() {
    currentIndex.value = getCurrentIndex()
  }
  
  function goToSlide(index) {
    const slideWidth = carousel.value.clientWidth
    carousel.value.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth'
    })
  }

  function goPrevious() {
    const index = Math.max(getCurrentIndex() - 1, 0)
    goToSlide(index)
    currentIndex.value = index
    }

    function goNext() {
    const totalSlides = carousel.value.children.length
    const index = Math.min(getCurrentIndex() + 1, totalSlides - 1)
    goToSlide(index)
    currentIndex.value = index
    }

  
  function startSlideshow() {
    if (intervalRef.value) clearInterval(intervalRef.value)
  
    intervalRef.value = setInterval(() => {
      if (isInteracting.value) return
  
      const slideWidth = carousel.value.clientWidth
      const totalSlides = carousel.value.children.length
      const index = getCurrentIndex()
  
      let nextIndex = index + direction.value
  
      if (nextIndex >= totalSlides || nextIndex < 0) {
        direction.value *= -1
        nextIndex = index + direction.value
      }
  
      goToSlide(nextIndex)
      currentIndex.value = nextIndex
    }, 5000)
  }
  
  function handleEnter() {
    isInteracting.value = true
    clearInterval(intervalRef.value)
  }
  
  function handleLeave() {
    isInteracting.value = false
  
    const totalSlides = carousel.value.children.length
    const index = getCurrentIndex()
    direction.value = index === totalSlides - 1 ? -1 : 1
  
    startSlideshow()
  }
  
  onMounted(() => {
    updateCurrentIndex()
    startSlideshow()
  })
  
  onUnmounted(() => {
    clearInterval(intervalRef.value)
  })
  </script>
  <style scoped>
  .slideshow {
    padding: 2rem;
    margin-top: 1rem;
  }
  
  .slider-wrapper {
    position: relative;
    width: clamp(20rem, 85vw, 65rem);
    margin: 0 auto;
    overflow: hidden;
  }
  
  .slider {
    display: flex;
    aspect-ratio: 16 / 9;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-snap-stop: always;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    box-shadow: 0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 0.25);
    border-radius: 0.5rem;
    max-width: 100%;
    scrollbar-width: thin;
    scrollbar-color: var(--color-accent) rgba(255, 255, 255, 0.2);
  }
  .slider::-webkit-scrollbar {
    height: 8px;
  }
  .slider::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
  .slider::-webkit-scrollbar-thumb {
    background: var(--color-accent);
    border-radius: 10px;
  }
  .slider::-webkit-scrollbar-thumb:hover {
    background: #f5b9c9;
  }
  
  .carousel-slide {
    flex: 0 0 auto;
    width: 100%;
    min-width: 100%;
    scroll-snap-align: start;
    position: relative;
  }
  .carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    border-radius: 0.5rem;
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
  .dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: var(--color-accent);
    opacity: 0.75;
    transition: opacity ease 250ms;
    border: none;
    cursor: pointer;
  }
  .dot:hover {
    opacity: 1;
  }
  .dot.active {
    opacity: 1;
    background-color: var(--color-text-highlight);
  }
  
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2.5rem;
    height: 2.5rem;
    background-color: rgba(50, 50, 50, 0.4);
    color: rgb(50, 50, 50);
    font-size: 1.5rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 3;
    display: none;
  }
  .nav-left {
    left: 0.5rem;
  }
  .nav-right {
    right: 0.5rem;
  }
  
  @media (min-width: 768px) and (max-width: 1200px) {
    .slider-wrapper {
      width: clamp(20rem, 90vw, 64rem);
    }
  }
  
  @media (min-width: 640px) {
    .nav-button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
  