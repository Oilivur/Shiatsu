<template>
  <header>
    <router-link to="/" class="logo" aria-label="Terindo">
      <img class="logo-img" :src="logoPng" alt="Terindo" />
    </router-link>


    <input type="checkbox" id="check" v-model="menuOpen">

    <label for="check" class="icons">
      <i class="bx bx-menu" v-if="!menuOpen"></i>
      <i class="bx bx-x" v-else></i>
    </label>

    <nav :class="{ 'open': menuOpen }">
      <router-link 
        v-for="item in menuItems" 
        :key="item.link" 
        :to="item.link" 
        active-class="active"
        @click="menuOpen = false"
      >
        {{ item.label }}
      </router-link>
    
      <router-link 
        v-if="isAdmin" 
        to="/admin" 
        active-class="active"
        @click="menuOpen = false"
      >
      Admin
    </router-link>

      <button v-if="isAdmin" @click="handleLogout">Logout</button>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted, inject } from "vue";
import logoPng from "@/assets/pictures/brand/Terindo-Logo-Horizontal-dark.png";

export default {
  setup() {
    const menuOpen = ref(false);
    const isAdmin = ref(false);
    const handleLogout = inject("handleLogout");

    const menuItems = [
      { label: "Teraapiad-massaažid", link: "/termas" },
      { label: "Shindo treeningud", link: "/shindo" },
      { label: "Hinnakiri", link: "/hinnakiri" },
      { label: "Minust", link: "/minust" },
      { label: "Kontakt", link: "/kontakt" }
    ];

    const closeMenuOnOutsideClick = (event) => {
      const nav = document.querySelector("nav");
      const icons = document.querySelector(".icons");

      if (menuOpen.value && nav && !nav.contains(event.target) && !icons.contains(event.target)) {
        menuOpen.value = false;
      }
    };

    const checkScreenSize = () => {
      if (window.innerWidth > 1079) {
        menuOpen.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener("resize", checkScreenSize);
      document.addEventListener("click", closeMenuOnOutsideClick);

      const storedKey = localStorage.getItem("adminKey");
      if (storedKey) {
        isAdmin.value = true;
      }
    });

    onUnmounted(() => {
      window.removeEventListener("resize", checkScreenSize);
      document.removeEventListener("click", closeMenuOnOutsideClick);
    });

    return { menuOpen, menuItems, isAdmin, handleLogout, logoPng };
  }
};
</script>

<style scoped>
#check {
  display: none;
}

.icons {
  display: none;
  cursor: pointer;
  font-size: 2rem;
  color: var(--color-text);
}

@media (max-width: 1079px) {
  .icons {
    display: inline-flex;
  }

  nav {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0);
    backdrop-filter: blur(50px);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    opacity: 0;
    height: 0;
    transition: opacity 0.5s ease, transform 0.5s ease, height 0.5s ease;
    pointer-events: none;
  }

  nav.open {
    opacity: 1;
    transform: translateY(0);
    background: rgba(0, 0, 0, 0.1);
    height: auto;
    pointer-events: auto;
  }

  nav a {
    display: block;
    font-size: 1.1rem;
    margin: 1rem 0;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  nav.open a {
    opacity: 1;
    transform: translateY(0);
  }

  nav.open a:nth-child(1) { transition-delay: 0.1s; }
  nav.open a:nth-child(2) { transition-delay: 0.2s; }
  nav.open a:nth-child(3) { transition-delay: 0.3s; }
  nav.open a:nth-child(4) { transition-delay: 0.4s; }
  nav.open a:nth-child(5) { transition-delay: 0.5s; }
  nav.open a:nth-child(6) { transition-delay: 0.6s; } /* Admin */
}
</style>
