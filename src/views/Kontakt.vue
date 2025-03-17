<template>
	<div class="kontakt">
	  <h1>Kontakt</h1>
	  <div class="intro">
		<p><strong>Kontakt:</strong></p>
		<p>Terindo OÜ</p>
		<p>Email: <a href="mailto:terje.loorits@gmail.com">terje.loorits@gmail.com</a></p>
		<p>Kodusalong: Sulevi, Kasemetsa küla, Saku vald</p> 
		<p>*LHV pank kontonumber*</p>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	name: "Kontakt"
  };
  </script>
  
  <style scoped>
  .kontakt {
	text-align: center;
  }
  
  .intro {
	max-width: 50%;
	margin: auto;
	padding: 2rem;
  }
  
  p {
	margin: 0.5rem 0;
	font-size: 1.2rem;
	color: blanchedalmond;
  }
  
  a {
	color: rgb(47, 193, 103);
	text-decoration: none;
  }
  
  a:hover {
	text-decoration: underline;
  }
  </style>
  