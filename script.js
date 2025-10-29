// // *******************************************************
// //  Розкривні заголовки (Toggle Headers) з ResizeObserver
// // *******************************************************

// document.querySelectorAll(".toggle-header").forEach((header) => {
//   const content = header.nextElementSibling; // прихований блок
//   let ro = null; // спостерігач для автооновлення висоти

//   header.addEventListener("click", () => {
//     const isActive = header.classList.toggle("active");

//     if (isActive) {
//       // Показуємо блок перед обчисленням висоти
//       content.style.display = "block";
//       content.style.opacity = "1";

//       // спочатку обнуляємо висоту, щоб запустити transition
//       content.style.maxHeight = "0";
//       // чекаємо наступний кадр, щоб зміна max-height анімувалася
//       requestAnimationFrame(() => {
//         content.style.maxHeight = content.scrollHeight + "px";
//       });

//       // створюємо ResizeObserver, щоб автоматично оновлювати висоту при зміні розмірів
//       ro = new ResizeObserver(() => {
//         content.style.maxHeight = content.scrollHeight + "px";
//       });
//       ro.observe(content);
//     } else {
//       // Приховуємо блок плавно
//       content.style.maxHeight = content.scrollHeight + "px";
//       content.style.opacity = "0";

//       requestAnimationFrame(() => {
//         content.style.maxHeight = "0";
//       });

//       // після завершення анімації повністю приховуємо блок
//       setTimeout(() => {
//         content.style.display = "none";
//       }, 350);

//       // вимикаємо спостерігача
//       if (ro) {
//         ro.disconnect();
//         ro = null;
//       }
//     }
//   });
// });

// // *******************************************************
// //  Розкривні заголовки (Toggle Headers) — без анімації
// // *******************************************************

// document.querySelectorAll(".toggle-header").forEach((header) => {
//   const content = header.nextElementSibling; // прихований блок
//   let ro = null; // спостерігач для автооновлення висоти

//   header.addEventListener("click", () => {
//     const isActive = header.classList.toggle("active");

//     if (isActive) {
//       content.style.display = "block";
//       content.style.opacity = "1";
//       content.style.maxHeight = "none";

//       // спостерігаємо за змінами розміру, щоб розділ залишався адаптивним
//       ro = new ResizeObserver(() => {
//         content.style.maxHeight = "none";
//       });
//       ro.observe(content);
//     } else {
//       content.style.display = "none";
//       content.style.opacity = "0";

//       // вимикаємо спостерігача
//       if (ro) {
//         ro.disconnect();
//         ro = null;
//       }
//     }
//   });
// });

// *******************************************************
//  Розкривні заголовки (Toggle Headers) — найпростіший варіант
// *******************************************************

document.querySelectorAll(".toggle-header").forEach((header) => {
  const content = header.nextElementSibling;

  header.addEventListener("click", () => {
    const isActive = header.classList.toggle("active");
    content.style.display = isActive ? "block" : "none";
  });
});

// *******************************************************
//  Вкладки (Tabs)
// *******************************************************

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

// Для кожної кнопки вкладки додаємо обробник події
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Спочатку знімаємо "active" з усіх кнопок і вмісту
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    // Активуємо натиснуту кнопку
    btn.classList.add("active");

    // Отримуємо цільову вкладку через data-tab (наприклад, "info", "game" тощо)
    const target = btn.dataset.tab;

    // Активуємо відповідний блок контенту
    const targetContent = document.getElementById(`tab-${target}`);
    if (targetContent) targetContent.classList.add("active");
  });
});

// *******************************************************
//  Ефект плавного завантаження сторінки
// *******************************************************

// Коли сторінка повністю завантажена, додаємо клас .loaded до body
// Це активує анімацію появи (opacity) у CSS
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

// *******************************************************
//  Progress bars
// *******************************************************

// Function to initialize all progress bars automatically
function initProgressBars() {
  const checklists = document.querySelectorAll(".checklist-wrapper");

  checklists.forEach((wrapper) => {
    const checklist = wrapper.querySelector(".checklist");
    const progressBar = wrapper.querySelector(".progress-bar");
    const checkboxes = checklist.querySelectorAll("input[type='checkbox']");

    function updateProgress() {
      const total = checkboxes.length;
      const checked = checklist.querySelectorAll(
        "input[type='checkbox']:checked"
      ).length;
      const percent = total ? Math.round((checked / total) * 100) : 0;

      progressBar.style.width = percent + "%";
      progressBar.textContent = percent + "%";
    }

    checkboxes.forEach((cb) => cb.addEventListener("change", updateProgress));

    // Initialize immediately
    updateProgress();
  });
}

// Run after DOM loads
document.addEventListener("DOMContentLoaded", initProgressBars);

// *******************************************************
//  Section navigation
// *******************************************************

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("section").forEach((section) => {
    const content = section.querySelector(".content");
    if (!content) return;
    const headers = content.querySelectorAll("h3[id]");
    if (headers.length === 0) return;
    const nav = document.createElement("nav");
    nav.className = "section-nav";
    const title = document.createElement("p");
    title.className = "nav-title";
    title.textContent = "Зміст цього розділу";
    nav.appendChild(title);
    const ul = document.createElement("ul");
    headers.forEach((h3) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const cleanText = h3.textContent.trim();
      a.textContent = cleanText;
      a.href = `#${h3.id}`;
      li.appendChild(a);
      ul.appendChild(li);
    });
    nav.appendChild(ul);
    content.prepend(nav);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");
  // Show/hide button depending on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  });
  // Smooth scroll to top when clicked
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// window.addEventListener("resize", () => {
//   document.querySelectorAll(".toggle-header.active").forEach((header) => {
//     const content = header.nextElementSibling;
//     content.style.maxHeight = content.scrollHeight + "px";
//   });
// });
