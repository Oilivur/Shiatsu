<template>
    <main>
      <h1>Teraapiad ja massaažid</h1>
  
      <div class="content-box">
        <h2>Shindo massaaž</h2>
        <p>
          Shindo massaaž on idamaine tervendusmeetod, mis põhineb Jaapani vanadel traditsioonidel. Seansi käigus 
          mõjutatakse 12 energiameridiaani, et vabastada füüsilised ja emotsionaalsed blokeeringud ning toetada kogu keha heaolu.
          Kasutatakse sõrmi, käsi ja jalgu. Mõnes kohas võib esineda valulikkust, kuid see aitab energia taas liikuma panna.
        </p>
  
        <h2>Ki-Shiatsu teraapia</h2>
        <p>
          Ki-Shiatsu on Jaapani üks tuntumaid teraapiaid, mis stimuleerib keha isetervenemist ja suurendab organismi elujõudu.
          Teraapia aitab vabastada blokeerunud energiat ja taastada keha sisemist tasakaalu. Tehakse läbi riiete, ei kasutata õlisid ega massaažilauda,
          mistõttu sobib ka eakatele ja lastele.
        </p>
  
        <h2>MER-teraapia</h2>
        <p>
          MER (Myofascial Energetic Release) on sidekoemassaaž, mis ühendab aeglaseid venitusi ja liigeste vabastamise tehnikaid.
          Aitab vabastada emotsioone ja pingeid, parandab rühti ning toetab keha närvisüsteemi ja taastumisvõimet.
          Soovitatav kuurina – kord nädalas või üle nädala 4 korda.
        </p>
  
        <h2>Lomi-Lomi Nui massaaž</h2>
        <p>
          Lomi-Lomi Nui on Hawaii traditsiooniline massaaž rohke õliga. Kasutatakse käsi, küünarnukke ja käsivarsi, et tekitada 
          voolavaid, ookeanilaineid matkivaid liigutusi. Massaaž ühendab lõdvestuse ja energiavoo tasakaalustamise ning loob harmoonia keha ja meele vahel.
        </p>

        <router-link to="/Hinnakiri" class="price-link">Vaata hinnakirja →</router-link>
      </div>
    </main>
  </template>

<style scoped>
.content-box {
  position: relative;
}

.content-box p {
  margin-bottom: 1.9rem; /* 🔥 Adds breathing space between paragraphs */
}

.price-link {
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
  font-size: 1rem;
  color: blanchedalmond;
  text-decoration: none;
  font-weight: bold;
  opacity: 0.9;
  transition: color 0.2s ease;
}

.price-link:hover {
  color: rgb(47, 193, 103);
}
</style>
  