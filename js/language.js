import { translations } from "./translations.js";

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

    // Обновляем активную кнопку
    this.languageBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // Применяем переводы
    this.translateAll();
  }

  translateAll() {
    // Навигация
    document.querySelector('[data-i18n="nav.home"]').textContent =
      translations[this.currentLang].nav.home;

    // Герой
    document.querySelector('[data-i18n="hero.subtitle"]').textContent =
      translations[this.currentLang].hero.subtitle;

    // Секретная кнопка
    const secretText = document.querySelector(".secret-trigger__text");
    if (secretText) {
      secretText.textContent = translations[this.currentLang].secret.text;
    }
  }
}

new LanguageSwitcher();
