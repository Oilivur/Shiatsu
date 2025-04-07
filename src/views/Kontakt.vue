<template>
    <main>
      <h1>Kontakt</h1>
  
      <div class="content-box kontakt-box">
        <h2>Terje Loorits</h2>
  
        <p class="kontakt-row">
          <span>Telefon:</span>
          <a href="tel:+3725122945">512 2945</a>
        </p>
        
        <p class="kontakt-row">
          <span>E-mail:</span>
          <a href="mailto:terje.loorits@gmail.com">terje.loorits@gmail.com</a>
        </p>

        <p class="kontakt-loc">
          Tallinn-Nõmme, Keila, Saku
        </p>

      </div>
    </main>
  </template>
  
<style scoped>
.kontakt-box {
  text-align: left;
  padding: 1rem 2rem;
}

.kontakt-box h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.kontakt-row {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(255, 235, 205, 0.2);
}

.kontakt-row:last-of-type {
  border-bottom: none;
}

.kontakt-row span {
  min-width: 5rem;
  font-weight: 500;
}

.kontakt-row a {
  color: blanchedalmond;
  text-decoration: none;
  font-weight: bold;
}

.kontakt-row a:hover {
  color: rgb(47, 193, 103);
}

.kontakt-loc {
  text-align: center;
}

</style>
  