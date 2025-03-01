<template>
    <header>
      <router-link to="/" class="logo">Terindo</router-link>
  
      <input type="checkbox" id="check">
      <label for="check" class="icons">
        <i class="bx bx-menu" id="menu-icon"></i>
        <i class="bx bx-x" id="x-icon"></i>
      </label>
  
      <nav>
        <router-link to="/termas">Teraapiad-massaažid</router-link>
        <router-link to="/shindo">Shindo treeningud</router-link>
        <router-link to="/hinnakiri">Hinnakiri</router-link>
        <router-link to="/minust">Minust</router-link>
        <router-link to="/kontakt">Kontakt</router-link>
        <router-link v-if="isAdmin" to="/admin">Admin</router-link>
        <button v-if="isAdmin" @click="handleLogout">Logout</button>
      </nav>
    </header>
  </template>

<script>
import { inject, ref, onMounted } from "vue";

export default {
  setup() {
    const isAdmin = ref(false);
    const handleLogout = inject("handleLogout");

    onMounted(() => {
      // ✅ Secure check for admin key
      const storedKey = localStorage.getItem("adminKey");
      if (storedKey) {
        isAdmin.value = true;
      }
    });

    return { isAdmin, handleLogout };
  }
};
</script>


<style scoped>
/* Ensure the icons are visible */
.icons {
  display: inline-flex;
  cursor: pointer;
  font-size: 2rem;
  color: blanchedalmond;
}

/* Initially hide the close icon */
.icons #x-icon {
  display: none;
}

/* When the menu is checked, show the close icon */
#check:checked ~ .icons #menu-icon {
  display: none;
}

#check:checked ~ .icons #x-icon {
  display: inline;
}


/* Style the logout button */
button {
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 5px;
  font-size: 1rem;
}

button:hover {
  background: darkred;
}
</style>
  