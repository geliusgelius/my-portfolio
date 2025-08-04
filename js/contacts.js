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
