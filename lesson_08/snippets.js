const snippets = {
  snippet1: `<h1>Світ Маріо</h1>
<hr>

<h2>Маріо</h2>
<p>Маріо — відважний сантехнік, який завжди рятує принцесу.<br>Він стрибає по блоках і перемагає ворогів у грибному королівстві.</p>
<img src="https://upload.wikimedia.org/wikipedia/en/5/5c/Mario_by_Shigehisa_Nakaue.png" alt="Маріо">
<hr>

<h2>Луїджі</h2>
<p>Луїджі — молодший брат Маріо.<br>Він високий і трохи боязкуватий, але завжди допомагає Маріо у пригодах.</p>
<img src="https://upload.wikimedia.org/wikipedia/en/b/be/Luigi_by_Shigehisa_Nakaue.png" alt="Луїджі">
<hr>

<h2>Принцеса Піч</h2>
<p>Принцеса Піч — добра правителька грибного королівства.<br>Вона часто потрапляє у біду і потребує допомоги Маріо та Луїджі.</p>
<img src="https://upload.wikimedia.org/wikipedia/en/1/16/Princess_Peach_Stock_Art.png" alt="Принцеса Піч">
<hr>`,

  snippet2: `body {
  background: url("./background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Comic Sans MS";
  font-size: 25px;
  text-align: center;
}
	  
h2 {
  color: blue;
}

hr {
  border: none;
  border-top: 12px double seagreen;
}`,

  snippet3: `<html>
  <head>
    <title>Маріо</title>
    <style>
      body {
        background: url("./background.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        font-family: "Comic Sans MS";
        font-size: 30px;
        text-align: center;
        color: red;
      }
      a {
        text-decoration: none;
        color: orange;
        background: white;
      }
      a:hover {
        color: black;
      }
      img {
        width: 400px;
        height: 400px;
        border: 8px double black;
      }
    </style>
  </head>

  <body>
    <h1>Маріо</h1>
    <img src="https://i.pinimg.com/1200x/b5/54/79/b55479470d072f59c7dc02301b5a931b.jpg" alt="Маріо" />

    <p><a href="">Назад на головну</a></p>
  </body>
</html>`,
};

Object.entries(snippets).forEach(([id, code]) => {
  const el = document.getElementById(id);
  if (el) el.textContent = code;
});
