<template>
    <header>
      <a href="#" class="logo">Terindo</a>
  
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
        <router-link to="/admin">Admin</router-link>
      </nav>
    </header>
  
    <div class="intro">
      <p>Lorem ipsum...</p>
      <p>Lorem ipsum...</p>
      <p>Lorem ipsum...</p>
    </div>
  
    <section class="slideshow">
      <div class="slider-wrapper">
        <div class="slider">
          <img id="slide-1" src="@/assets/pictures/bambus.jpg" alt="bambus">
          <img id="slide-2" src="@/assets/pictures/buda.jpg" alt="buda">
          <img id="slide-3" src="@/assets/pictures/kivid.jpg" alt="kivid">
          <img id="slide-4" src="@/assets/pictures/murr.jpg" alt="murr">
          <img id="slide-5" src="@/assets/pictures/tee.jpg" alt="tee">
          <img id="slide-6" src="@/assets/pictures/jooga.jpg" alt="jooga">
        </div>
        <div class="slider-nav">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
          <a href="#slide-4"></a>
          <a href="#slide-5"></a>
          <a href="#slide-6"></a>
        </div>
      </div>
    </section>
  
    <footer>
      <h3>&copy;Terindo</h3>
      <p>terje@terindo.ee</p>
    </footer>
  </template>
  