<script>
import { auth, database } from "@/firebase";
import { ref, get } from "firebase/database";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  name: "Admin",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    };
  },
  setup() {
    const router = useRouter(); // Vue Router instance
    return { router };
  },
  methods: {
    async login() {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

        // Store admin status
        localStorage.setItem("isAdmin", "true");

        // Redirect to the registration page
        this.router.push("/regstr");
      } catch (error) {
        this.errorMessage = error.message;
        console.error("Login failed:", error.message);
      }
    }
  }
};
</script>

<template>
  <div>
    <h1>Admin Login</h1>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Login</button>
      <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
    </form>
  </div>
</template>
