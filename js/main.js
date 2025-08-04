// скрываем лоадер
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

// потом остальной функционал
document.addEventListener("DOMContentLoaded", () => {
  // Меню
  const menuToggle = document.querySelector(".navbar__toggle");
  const menu = document.querySelector(".navbar");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Плавный скролл
  document.querySelectorAll(".navbar__menu a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      menu.classList.remove("active");

      const targetId = link.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // Подсветка активного раздела
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar__menu a");

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        const id = section.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );
        });
      }
    });
  });
});

// Анимация элементов hero после загрузки
document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero__content");
  heroContent.style.opacity = "0";
  setTimeout(() => {
    heroContent.style.opacity = "1";
  }, 300);
});
