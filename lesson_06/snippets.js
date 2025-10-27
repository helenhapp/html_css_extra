const snippets = {
  snippet1: `<html>
  <head>
  </head>
  <body>
  </body>
<html>`,

  snippet2: `<body>
  <h1>Це заголовок 1 рівня</h1>
  <h2>Це заголовок 2 рівня</h2>
  <h3>Це заголовок 3 рівня</h3>
  <h4>Це заголовок 4 рівня</h4>
  <h5>Це заголовок 5 рівня</h5>
  <h6>Це заголовок 6 рівня</h6>
</body>`,

  snippet3: `<body>
  <p>Це мій перший абзац.</p>
  <p>А це другий!</p>
</body>`,

  snippet4: `<body>
  <p>Привіт!<br>Я перейшов на новий рядок.</p>
</body>`,

  snippet5: `<p align="center">Я граю у Minecraft!</p>
<p align="right">Я граю у Roblox!</p>`,

  snippet6: `<p>
  Моя улюблена гра <b>Minecraft</b> — це <i>пісочниця</i>.
</p>`,

  snippet7: `<p>Я хотів грати у <s>Roblox</s>, але відкрив <u>Minecraft</u>.</p>`,

  snippet8: `<p>Вода: H<sub>2</sub>O</p>
<p>Камінь у Minecraft: Stone<sup>2</sup></p>`,

  snippet9: `<html>
  <head>
    <style>
      /* Тут пишемо стилі */
    </style>
  </head>

  <body></body>
</html>`,

  snippet10: `<head>
  <style>
    body {
      background-color: black; /* колір фону */
      font-family: Tahoma; /* шрифт */
    }

    p {
      color: lightblue; /* колір тексту */
      font-size: 20px; /* розмір тексту */
    }
  </style>
</head>`,

  snippet11: `селектор {
  властивість1: значення1;
  властивість2: значення2;
}`,
};

Object.entries(snippets).forEach(([id, code]) => {
  const el = document.getElementById(id);
  if (el) el.textContent = code;
});
