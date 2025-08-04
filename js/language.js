document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contacts": "Contacts",
      "hero.subtitle": "Frontend Developer",
      "loader.text": "Loading...",
      "secret.text": "There's something here...",
    },
    ru: {
      "nav.home": "Главная",
      "nav.about": "Обо мне",
      "nav.skills": "Навыки",
      "nav.projects": "Проекты",
      "nav.contacts": "Контакты",
      "hero.subtitle": "Фронтенд разработчик",
      "loader.text": "Загрузка...",
      "secret.text": "Кажется, здесь что-то есть...",
    },
  };

  class LanguageSwitcher {
    constructor() {
      this.currentLang = localStorage.getItem("language") || "ru";
      this.initElements();
      this.setLanguage(this.currentLang);
    }

    initElements() {
      this.languageBtns = document.querySelectorAll(".language-btn");
      this.languageBtns.forEach((btn) => {
        btn.addEventListener("click", () => this.setLanguage(btn.dataset.lang));
      });
    }

    setLanguage(lang) {
      this.currentLang = lang;
      localStorage.setItem("language", lang);
      document.documentElement.lang = lang;

      this.languageBtns.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
      });

      this.translateAll();
    }

    translateAll() {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (
          translations[this.currentLang] &&
          translations[this.currentLang][key]
        ) {
          el.textContent = translations[this.currentLang][key];
        }
      });
    }
  }

  new LanguageSwitcher();
});
