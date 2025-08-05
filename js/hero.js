// js/hero.js
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");

  // Создаем элемент для эффекта курсора
  const cursor = document.createElement("div");
  cursor.classList.add("hero__cursor-track");
  hero.appendChild(cursor);

  // Анимация курсора
  let mouseX = 0,
    mouseY = 0;
  let cursorX = 0,
    cursorY = 0;
  const speed = 0.2;

  const animate = () => {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;

    cursorX += dx * speed;
    cursorY += dy * speed;

    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(animate);
  };
  animate();

  hero.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
});

document
  .querySelector(".hero__image")
  .addEventListener("mouseenter", function () {
    const logos = document.querySelectorAll(".tech-logo");
    logos.forEach((logo, index) => {
      setTimeout(() => {
        logo.style.opacity = "1";
        logo.style.transform = "scale(1)";
      }, index * 100);
    });
  });

document
  .querySelector(".hero__image")
  .addEventListener("mouseleave", function () {
    const logos = document.querySelectorAll(".tech-logo");
    logos.forEach((logo) => {
      logo.style.opacity = "0";
      logo.style.transform = "scale(0.5)";
    });
  });
