<template>
    <main>
      <h1>Shindo rühmatund</h1>
  
      <div class="content-box">
        <!-- 🟢 Tuesday session -->
        <div class="session-block">
          <p class="weekday">Esmaspäeviti ja teisipäeviti kell 17:45</p>
          <p class="place">Rahumäe Põhikool – Vabaduse pst 50, Tallinn</p>
          <iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2032.0021228878852!2d24.700928077328744!3d59.38299170672401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692953d52d28a4b%3A0x5929cdfeb0e0b0f8!2sVabaduse%20pst%2050%2C%2011615%20Tallinn!5e0!3m2!1set!2see!4v1744010222394!5m2!1set!2see" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <!-- 🟢 Wednesday session -->
        <div class="session-block">
          <p class="weekday">Kolmapäeviti kell 17:30</p>
          <p class="place">Keila Teraapiakeskus – Keskväljak 17, Keila</p>
          <iframe
            class="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2177.376031872398!2d24.41202931601721!3d59.304453611388665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692ea3d947ea4cb%3A0x9e4f0ccab71f9a7c!2sKeskv%C3%A4ljak%2017%2C%20Keila%2C%2076612%20Harju%20maakond!5e0!3m2!1set!2see!4v1712316568277!5m2!1set!2see"
            width="100%" height="300" style="border:0;" allowfullscreen=""
            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>


  
        <p>
          Shindo on Jaapani massaaži-, venitus- ja lõõgastusharjutuste süsteem, mis aitab kehal ja vaimul lõdvestuda, 
          annab uut jõudu ja ideid suurte muutuste ajas elavale, tulevikku vaatavale inimesele.
        </p>
  
        <p>
          Idamaise tava kohaselt käsitleb shindo inimest kui tervikut. Igapäevaelu viib meid tasakaalust välja 
          ning vaevama hakkavad erinevad tervisehäired.
        </p>
  
        <ul>
          <li>
            Shindo eesmärgiks on vabastada keha ja meel sinna kuhjunud füüsilistest ning emotsionaalsetest 
            pingetest ning saavutada keha ja meele tasakaal. Füüsilisel pinnal aitavad venitusharjutused hästi 
            tugiliikumisaparaadi vaevuste ja liigeseprobleemide puhul.
          </li>
          <li>
            Venituste, hingamise ja juhendaja poolse toetava massaaži mõjul suureneb keha võime taastuda ja end ise parandada.
          </li>
          <li>
            Lihtsad ja tõhusad Shindo venitusharjutused lõdvestavad keha ja vaimu, samas andes energiat ja mõtteselgust 
            ning loovad seeläbi silla südame ja maailma vahele.
          </li>
        </ul>
  
        <p>
          Mida paindlikum on inimese keha, seda paindlikum on tema meel – seda rohkem saab ta tunda end vabana.
        </p>
  
        <p>
          1,5 tunni jooksul venitame, võimleme, treenime tasakaalu, mudime, hingame ja pikutame. 
          See ei ole tund passiivset venimist ja püsimist, see on tund tegelemist iseendaga!
        </p>
  
        <h2>Riietus</h2>
        <p>
          Selga soovitan panna mugavad pikad retuusid, pikkade või lühikeste varrukatega pikem särk, 
          ja kui on, siis jalga varvassokid.
        </p>
  
        <h2>Hind</h2>
        <p>
          Rühmatunnis osalustasu 1 × 10 €<br>
          5× kaart (kasutamiseks kahe kuu jooksul) – 45 €
        </p>
      </div>
    </main>
  </template>
  
  <style scoped>
  .content-box {
    text-align: left;
    line-height: 1.6;
  }
  
  .content-box ul {
    margin-left: 1.5rem;
    padding-left: 0;
    list-style-type: disc;
  }
  
  .content-box li {
    margin-bottom: 0.5rem;
  }
  
  .content-box h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .content-box h2 + p {
    text-align: center;
  }

  .session-block {
  margin-bottom: 2.5rem;
  text-align: center;
}

.session-block .weekday {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: var(--color-text);
}

.session-block .place {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.map-frame {
  border-radius: 1rem;
  box-shadow: 0px 0.5rem 1rem rgba(0, 0, 0, 0.3);
}

  
  @media (min-width: 1200px) {
    .content-box {
      max-width: 40rem;
    }
  }
  </style>
  