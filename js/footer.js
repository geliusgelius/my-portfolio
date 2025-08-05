// Автоматическое обновление года в подвале
document.getElementById("current-year").textContent = new Date().getFullYear();

// Кнопка "Наверх"
const toTopBtn = document.querySelector(".footer__to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    toTopBtn.classList.add("visible");
  } else {
    toTopBtn.classList.remove("visible");
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
