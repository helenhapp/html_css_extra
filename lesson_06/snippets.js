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

  // структура сайту
  snippet12: `<html>
  <head>
    <style>
    </style>
  </head>

  <body>
  </body>
</html>`,

  // заголовки
  snippet13: `<h1>Заголовок 1 рівня</h1>
<h2>Заголовок 2 рівня</h2>`,

  // списки
  snippet14: `<!-- Нумерований список -->
<ol type="тип нумерації">
  <li>1-й елемент списку</li>
  <li>2-й елемент списку</li>
  <li>3-й елемент списку</li>
</ol>

<!-- Маркований список -->
<ul type="тип маркерів">
  <li>1-й елемент списку</li>
  <li>2-й елемент списку</li>
  <li>3-й елемент списку</li>
</ul>`,

  // картинки
  snippet15: `<img src="посилання" alt="">`,

  // форматування тексту
  snippet16: `<b>Жирний текст</b>
<i>Похилий текст</i>
<u>Підкреслений текст</u>`,

  // CSS
  snippet17: `селектор {
  властивість: значення;
  властивість: значення;
}`,

  snippet18: `img {
  height: 190px;
}`,

  snippet19: `h1 {
  border-bottom: 5px dashed darkgreen;
}
  
img {
  border: 3px solid white;
}`,

  snippet20: `body {
  color: white;
  background-color: seagreen;  
}`,

  snippet21: `h1 {
  text-align: center; 
}`,

  snippet22: `body {
  font-family: monospace;
  font-size: 20px;
}

h2 {
  font-weight: normal;
}`,
};

Object.entries(snippets).forEach(([id, code]) => {
  const el = document.getElementById(id);
  if (el) el.textContent = code;
});
