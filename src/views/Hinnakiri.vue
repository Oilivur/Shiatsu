<template>
    <main>
      <h1>Hinnakiri</h1>
  
      <div class="content-box">
        <h2 class="name">Teenused ja hinnad</h2>
  
        <ul class="price-list">
          <li>
            <span>Shindo massaaž (1,5h)</span>
            <span>60 €</span>
          </li>
          <li>
            <span>Shindo privaatne venitus (1h)</span>
            <span>40 €</span>
          </li>
          <li>
            <span>Ki-Shiatsu teraapia (1,5h)</span>
            <span>55 €</span>
          </li>
          <li>
            <span>MER-teraapia (1,5h)</span>
            <span>65 €</span>
          </li>
          <li>
            <span>Lomi-Lomi Nui massaaž (1,5h)</span>
            <span>70 €</span>
          </li>
        </ul>
      </div>
    </main>
  </template>
  
  <style scoped>
.price-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.price-list li {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 235, 205, 0.4);
  font-size: 1.1rem;
  font-weight: 500;
}

.price-list li span:first-child {
  flex: 1;
  word-break: break-word;
}

.price-list li span:last-child {
  min-width: 3.5rem;
  text-align: right;
}

.price-list li:last-child {
  border-bottom: none;
}
</style>
