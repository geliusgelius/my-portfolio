document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    en: {
      title: "Portfolio | Angelina Smirnova",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contacts": "Contacts",
      "hero.title": "Angelina Smirnova",
      "hero.subtitle": "Frontend Developer",
      "hero.image_alt": "My photo",
      "loader.text": "Loading...",
      "about.title": "About Me",
      "about.text1":
        "A frontend developer for whom code is creativity with clear rules. I love the moment when, after hours of working in the editor, the perfect interface comes to life on the screen: beautiful, logical and `lively`",
      "about.text2": `— Developed an online store from scratch: from pixel-perfect layout to shopping cart logic \n
         — Created a website for the university (a graduation project) with adaptive design and interactive elements  \n
         — Designed dozens of landing pages, honing her attention to detail`,
      "about.skills.development.title": "Development",
      "about.skills.development.text":
        "Creating responsive and accessible web applications using modern technologies",
      "about.skills.design.title": "Design",
      "about.skills.design.text":
        "Attention to details, animations and user experience",
      "about.skills.optimization.title": "Optimization",
      "about.skills.optimization.text":
        "Loading speed and SEO are key metrics for any project",
      "about.skills.support.title": "Long-term support",
      "about.skills.support.text":
        "Clean and maintainable code for future updates",
      "skills.title": "Technical Skills",
      "skills.categories.frontend": "Frontend",
      "skills.categories.tools": "Tools",
      "skills.categories.cms": "CMS Administration",
      "projects.title": "My Projects",
      "projects.project1.title": "Restaurant Landing Page",
      "projects.project1.description":
        "Modern responsive landing page with animations and booking form.",
      "projects.project1.image_alt": "Restaurant landing page",
      "projects.project2.title": "E-commerce Store",
      "projects.project2.description":
        "Full-featured store with cart and payment system.",
      "projects.project2.image_alt": "Online store",
      "projects.tags.responsive": "Responsive design",
      "projects.links.demo": "Demo",
      "projects.links.code": "Code",
      "contacts.title": "Contacts",
      "contacts.subtitle":
        "Want to discuss a project or just say hello? I'll be happy to chat!",
      "contacts.telegram": "Telegram",
      "contacts.linkedin": "LinkedIn",
      "contacts.instagram": "Instagram",
      "contacts.github": "GitHub",
      "contacts.online": "(Online)",
      "contacts.email.text": "Or write to",
      "contacts.email.copied": "Copied!",
      "secret.text": "There's something here...",
      "easter_egg.title": "🐱 Gotcha! Now you need to pet the cats! 🐱",
      "easter_egg.score_prefix": "Score:",
      "easter_egg.time_prefix": "Time:",
      "easter_egg.seconds": "s",
      "easter_egg.start_button": "Start game",
      "footer.copyright": "Make by Angelina Smirnova with love ❤️",
    },
    ru: {
      title: "Портфолио | Ангелина Смирнова",
      "nav.home": "Главная",
      "nav.about": "Обо мне",
      "nav.skills": "Навыки",
      "nav.projects": "Проекты",
      "nav.contacts": "Контакты",
      "hero.title": "Ангелина Смирнова",
      "hero.subtitle": "Фронтенд-разработчик",
      "hero.image_alt": "Моё фото",
      "loader.text": "Загрузка...",
      "about.title": "Обо мне",
      "about.text1":
        "Фронтенд-разработчик, для которого код — это творчество с чёткими правилами. Обожаю момент, когда после часов работы в редакторе на экране оживает идеальный интерфейс: красивый, логичный и «живой».",
      "about.text2": `— Разработала интернет-магазин с нуля: от pixel-perfect вёрстки до логики корзины \n
         — Создала сайт для университета (дипломный проект) с адаптивным дизайном и интерактивными элементами \n
         — Верстала десятки лендингов, оттачивая внимание к деталям`,
      "about.skills.development.title": "Разработка",
      "about.skills.development.text":
        "Создание адаптивных и доступных веб-приложений на современных технологиях",
      "about.skills.design.title": "Дизайн",
      "about.skills.design.text":
        "Уделяю внимание деталям, анимациям и пользовательскому опыту",
      "about.skills.optimization.title": "Оптимизация",
      "about.skills.optimization.text":
        "Скорость загрузки и SEO — ключевые метрики для любого проекта",
      "about.skills.support.title": "Долгосрочная поддержка",
      "about.skills.support.text":
        "Чистый и поддерживаемый код для будущих обновлений",
      "skills.title": "Технические навыки",
      "skills.categories.frontend": "Frontend",
      "skills.categories.tools": "Инструменты",
      "skills.categories.cms": "Администрирование CMS",
      "projects.title": "Мои проекты",
      "projects.project1.title": "Лендинг для ресторана",
      "projects.project1.description":
        "Современный адаптивный лендинг с анимациями и формой бронирования.",
      "projects.project1.image_alt": "Лендинг для ресторана",
      "projects.project2.title": "Интернет-магазин",
      "projects.project2.description":
        "Полнофункциональный магазин с корзиной и платежной системой.",
      "projects.project2.image_alt": "Интернет-магазин",
      "projects.tags.responsive": "Адаптивная верстка",
      "projects.links.demo": "Демо",
      "projects.links.code": "Код",
      "contacts.title": "Контакты",
      "contacts.subtitle":
        "Хотите обсудить проект или просто поздороваться? Буду рада общению!",
      "contacts.telegram": "Telegram",
      "contacts.linkedin": "LinkedIn",
      "contacts.instagram": "Instagram",
      "contacts.github": "GitHub",
      "contacts.online": "(Online)",
      "contacts.email.text": "Или напишите на",
      "contacts.email.copied": "Скопировано!",
      "secret.text": "Кажется, здесь что-то есть...",
      "easter_egg.title":
        "🐱 Попался! А теперь тебе нужно погладить котиков! 🐱",
      "easter_egg.score_prefix": "Очки:",
      "easter_egg.time_prefix": "Время:",
      "easter_egg.seconds": "с",
      "easter_egg.start_button": "Начать игру",
      "footer.copyright": "Сделала Ангелина Смирнова с любовью ❤️",
    },
  };

  class LanguageSwitcher {
    constructor() {
      this.currentLang = this.getSavedLanguage();
      this.initElements();
      this.initServiceWorker();
      this.setLanguage(this.currentLang);
      this.addDynamicContentHandlers();
    }

    getSavedLanguage() {
      // Проверяем предпочтения браузера, если язык не сохранен
      const savedLang = localStorage.getItem("language");
      if (savedLang) return savedLang;

      const browserLang = navigator.language.split("-")[0];
      return translations[browserLang] ? browserLang : "ru";
    }

    initElements() {
      this.languageBtns = document.querySelectorAll(".language-btn");
      this.languageBtns.forEach((btn) => {
        btn.addEventListener("click", () => this.setLanguage(btn.dataset.lang));
      });

      // Добавляем кнопку "Копировать email"
      this.copyEmailBtn = document.querySelector(".copy-email");
      if (this.copyEmailBtn) {
        this.copyEmailBtn.addEventListener("click", this.copyEmail.bind(this));
      }
    }

    initServiceWorker() {
      // Регистрация Service Worker для оффлайн-работы
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => console.log("ServiceWorker registered"))
          .catch((err) => console.log("ServiceWorker not registered", err));
      }
    }

    addDynamicContentHandlers() {
      // Обработка многострочного текста
      document.querySelectorAll("[data-multiline]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[this.currentLang]?.[key]) {
          el.innerHTML = translations[this.currentLang][key].replace(
            /\n/g,
            "<br>"
          );
        }
      });
    }

    copyEmail() {
      const email = "your.email@example.com"; // Замените на реальный email
      navigator.clipboard.writeText(email).then(() => {
        const copiedText =
          translations[this.currentLang]["contacts.email.copied"];
        this.copyEmailBtn.textContent = copiedText;
        setTimeout(() => {
          this.copyEmailBtn.textContent =
            translations[this.currentLang]["contacts.email.text"];
        }, 2000);
      });
    }

    setLanguage(lang) {
      this.currentLang = lang;
      localStorage.setItem("language", lang);
      document.documentElement.lang = lang;
      document.title = translations[lang].title;

      this.updateActiveButtons(lang);
      this.translateAll();
      this.updateMetaTags(lang);
    }

    updateActiveButtons(lang) {
      this.languageBtns.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
      });
    }

    updateMetaTags(lang) {
      // Обновляем мета-теги для SEO
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.content =
          translations[lang].metaDescription ||
          "Портфолио фронтенд-разработчика Ангелины Смирновой";
      }
    }

    translateAll() {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const translation = translations[this.currentLang]?.[key];

        if (translation) {
          // Для элементов с атрибутом data-multiline сохраняем переносы строк
          if (el.hasAttribute("data-multiline")) {
            el.innerHTML = translation.replace(/\n/g, "<br>");
          }
          // Стандартная обработка для других элементов
          else if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.value = translation;
          } else if (el.hasAttribute("placeholder")) {
            el.setAttribute("placeholder", translation);
          } else if (el.hasAttribute("alt")) {
            el.setAttribute("alt", translation);
          } else {
            el.textContent = translation;
          }
        }
      });
    }
  }

  // Инициализация анимаций при загрузке
  function initAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }

  // Запускаем все
  new LanguageSwitcher();
  initAnimations();

  // Добавляем обработчик для Easter Egg
  const secretElement = document.querySelector(".secret-element");
  if (secretElement) {
    secretElement.addEventListener("click", () => {
      window.location.href = "#easter-egg";
    });
  }
});
