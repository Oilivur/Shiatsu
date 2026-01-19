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
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.1rem;
  gap: 0.3rem;
  margin-bottom: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(255, 235, 205, 0.2);
}
.kontakt-row:last-of-type {
  border-bottom: none;
}

.kontakt-row span {
  font-weight: 500;
}

.kontakt-row a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: bold;
  word-break: break-word;
  overflow-wrap: anywhere;
  font-size: 1rem;
}

.kontakt-loc {
  text-align: center;
}

</style>
  