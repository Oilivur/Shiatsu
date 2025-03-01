<template>
    <h1>Welcome to the Shindo Website</h1>
    <router-view />
  </template>
  
  <script>
  import "@/assets/css/style.css";
  import { onMounted } from "vue";

  export default {
    name: "App",
    setup() {
        onMounted(() => {
            import("@/javascript/slides.js").then((module) => {
                // Ensure slides.js runs only after Vue has mounted
            }).catch((error) => {
                console.error("Error loading slides.js: ", error);
            });
        });
    }
  };
  </script>
  