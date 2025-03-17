<template>
  <div class="hinnakiri">
    <h1>Hinnakiri</h1>
    <div class="intro">
      <table>
        <tr>
          <th>Teenus</th>
          <th>EUR</th>
        </tr>
        <tr>
          <td>Shindo massaaž</td>
          <td>60</td>
        </tr>
        <tr>
          <td>MER</td>
          <td>70</td>
        </tr>
        <tr>
          <td>Ki-Shiatsu</td>
          <td>60</td>
        </tr>
        <tr>
          <td>Lomi-Lomi Nui</td>
          <td>75</td>
        </tr>
        <tr>
          <td>Rühmatund</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Privaattund</td>
          <td>40</td>
        </tr>
      </table>
      <p id="rt5">Rühmatunni 5 korra kaart - 45eur</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hinnakiri"
};
</script>

<style scoped>
.hinnakiri {
  text-align: center;
}

.intro {
  max-width: 50%;
  margin: auto;
  padding: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #fff;
  padding: 8px;
}

th {
  background: rgba(255, 255, 255, 0.2);
}
</style>
