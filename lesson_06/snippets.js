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
    /* стилі для тегу body (вся сторінка) */
    body {
      background-color: black; /* колір фону */
      font-family: Georgia; /* шрифт */
    }

    /* стилі для тегів h1 */
    h1 
    {
      color: lightgreen; /* колір тексту */
      text-align: center; /* вирівнює текст по центру */
      font-weight: normal; /* робить текст нежирним */
    }

    /* стилі для всіх абзаців p */
    p 
    {
      color: lightblue; /* колір тексту */
      font-size: 20px; /* розмір тексту */
      font-weight: bold; /* робить текст жирним */
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
<ol type="a">
  <li>елемент 1</li>
  <li>елемент 2</li>
  <li>елемент 3</li>
</ol>

<!-- Маркований список -->
<ul type="circle">
  <li>елемент 1</li>
  <li>елемент 2</li>
  <li>елемент 3</li>
</ul>`,

  // картинки
  snippet15: `<img src="images/1-бордер-колі.jpg" alt="бордер колі">`,

  // форматування тексту
  snippet16: `<p><b>Жирний текст</b></p>
<p><i>Похилий текст</i></p>
<p><u>Підкреслений текст</u></p>`,

  // CSS
  snippet17: `body {}
h1 {}
h2 {}
img {}`,

  snippet18: `height: 190px;`,

  snippet19: `border: 3px solid white;
border-bottom: 5px dashed darkgreen;`,

  snippet20: `color: white;
background-color: seagreen;`,

  snippet21: `text-align: center;`,

  snippet22: `font-family: monospace;
font-size: 20px;
font-weight: normal;`,

  snippet23: `<!-- Заголовок 1-го рівня -->
🐩 🐕‍🦺 🐕 Топ 5 порід собак

<!-- Заголовок 2-го рівня -->
🌷 Топ 5 найрозумніших порід собак

<!-- Список 1 (нумерований) -->
Бордер-колі
Пудель
Німецька вівчарка
Золотистий ретривер
Доберман

<!-- Назви картинок до 1-го списку -->
1-бордер-колі.jpg
1-пудель.jpg
1-вівчарка.jpg
1-ретривер.jpg
1-доберман.jpg

<!-- Заголовок 2-го рівня -->
🌼 Топ 5 наймиліших порід собак

<!-- Список 2 (маркований, type="circle") -->
Такса
Шиба-іну
Валлійський коргі
Померанський шпіц
Хаскі

<!-- Назви картинок до 2-го списку -->
2-такса.jpg
2-шиба-іну.jpg
2-коргі.jpg
2-померанський-шпіц.jpg
2-хаскі.jpg

<!-- Заголовок 2-го рівня -->
🌻 Топ 5 найбільших порід собак

<!-- Список 3 (нумерований, type="a") -->
Ірландський вовкодав
Німецький дог
Бернський зененхунд
Сенбернар
Мастиф

<!-- Назви картинок до 3-го списку -->
3-ірландський-вовкодав.jpg
3-німецький-дог.jpg
3-бернський-зененхунд.jpg
3-сенбернар.jpg
3-мастиф.jpg
`,
};

Object.entries(snippets).forEach(([id, code]) => {
  const el = document.getElementById(id);
  if (el) el.textContent = code;
});
