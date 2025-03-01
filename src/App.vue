<template>
    <Header :isAdmin="isAdmin" />
    <router-view />
  </template>
  
  <script>
  import "@/assets/css/style.css";
  import Header from "@/components/Header.vue";
  import { ref, onMounted, onUnmounted, provide } from "vue";
  import { auth, database } from "@/firebase"; // Import Firebase Auth & Database
  import { signInWithEmailAndPassword, signOut } from "firebase/auth";
  import { get, ref as dbRef } from "firebase/database";
  
  export default {
      components: { Header },
      setup() {
          const isAdmin = ref(false);
  
          // Fetch the admin key from Firebase Realtime Database
          const fetchAdminKey = async () => {
              try {
                  const adminKeyRef = dbRef(database, "adminKey");
                  const snapshot = await get(adminKeyRef);

                  console.log(adminKeyRef);
                  console.log(snapshot.val());

                  if (snapshot.exists()) {
                      console.log("✅ Admin Key from Firebase:", snapshot.val());
                      return snapshot.val();
                  } else {
                      console.warn("⚠️ No admin key found in Firebase!");
                      return null;
                  }
              } catch (error) {
                  console.error("❌ Failed to fetch admin key:", error);
                  return null;
              }
          };
  
          // Validate Admin Status (Compares Stored Key)
          const validateAdmin = async () => {
              const storedKey = localStorage.getItem("adminKey");
              if (!storedKey) return (isAdmin.value = false); // If no key, deny admin
  
              const adminKeyFromDB = await fetchAdminKey();
              isAdmin.value = storedKey === adminKeyFromDB; // Set admin state based on key match
          };
  
          // Login Function with Admin Key Retrieval
          const handleLogin = async () => {
              const email = prompt("Enter Admin Email:");
              if (!email) return;
              const password = prompt("Enter Password:");
              if (!password) return;
  
              try {
                  const userCredential = await signInWithEmailAndPassword(auth, email, password);
                  console.log("✅ Logged in:", userCredential.user.email);
  
                  const adminKey = await fetchAdminKey();
                  if (adminKey) {
                      localStorage.setItem("adminKey", adminKey);
                      isAdmin.value = true;
                  } else {
                      console.warn("⚠️ No valid admin key found!");
                      isAdmin.value = false;
                  }
              } catch (error) {
                  console.error("❌ Login failed:", error.message);
                  alert("Invalid login!");
              }
          };
  
          // Logout Function
          const handleLogout = async () => {
              try {
                  await signOut(auth);
                  localStorage.removeItem("adminKey");
                  isAdmin.value = false;
                  console.log("✅ Logged out");
                  window.location.reload();
              } catch (error) {
                  console.error("❌ Logout failed:", error.message);
              }
          };
  
          // Keyboard Shortcut to Open Login Prompt (CTRL + SHIFT + A)
          const keyListener = (event) => {
              if (event.ctrlKey && event.shiftKey && event.key === "A") {
                  handleLogin();
              }
          };
  
          onMounted(() => {
              window.addEventListener("keydown", keyListener);
              validateAdmin(); // Validate admin on load
          });
  
          onUnmounted(() => {
              window.removeEventListener("keydown", keyListener);
          });
  
          provide("handleLogout", handleLogout);
  
          return { isAdmin };
      },
  };
  </script>
  