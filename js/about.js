// Анимация при скролле
const aboutSection = document.querySelector(".about");
const aboutContent = document.querySelector(".about__content");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutContent.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

observer.observe(aboutSection);
