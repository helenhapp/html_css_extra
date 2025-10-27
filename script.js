// *******************************************************
//  Розкривні заголовки (Toggle Headers)
// *******************************************************

// Знаходимо всі елементи з класом .toggle-header
document.querySelectorAll(".toggle-header").forEach((header) => {
  const content = header.nextElementSibling; // Наступний елемент після заголовка (прихований блок)

  header.addEventListener("click", () => {
    const isActive = header.classList.toggle("active"); // Додаємо або забираємо клас "active"

    if (isActive) {
      // Якщо розкриваємо блок
      content.style.display = "block"; // Тимчасово показуємо для обчислення висоти
      const fullHeight = content.scrollHeight + "px"; // Отримуємо повну висоту контенту

      // Анімуємо розкриття
      requestAnimationFrame(() => {
        content.style.maxHeight = fullHeight;
        content.style.opacity = "1";
      });
    } else {
      // Якщо приховуємо блок
      content.style.maxHeight = content.scrollHeight + "px"; // Встановлюємо поточну висоту
      content.style.opacity = "0"; // Починаємо затемнення

      // Потім плавно згортаємо блок
      requestAnimationFrame(() => {
        content.style.maxHeight = "0";
      });
    }
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
window.addEventListener("load", () => {
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
