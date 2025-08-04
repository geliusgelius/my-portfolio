document.addEventListener("DOMContentLoaded", () => {
  const contactsSection = document.querySelector(".contacts");
  const contactsItems = document.querySelector(".contacts__items");

  if (contactsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contactsItems.classList.add("contacts__items--animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(contactsSection);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.querySelector(".contacts__copy-btn");
  const notification = document.querySelector(".contacts__copy-notification");

  if (copyBtn && notification) {
    copyBtn.addEventListener("click", () => {
      const email = "angelina68tmb@gmail.com";
      navigator.clipboard
        .writeText(email)
        .then(() => {
          notification.classList.add("contacts__copy-notification--show");
          setTimeout(() => {
            notification.classList.remove("contacts__copy-notification--show");
          }, 2000);
        })
        .catch((err) => console.error("Ошибка копирования:", err));
    });
  }
});
