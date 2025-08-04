document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skills__progress-bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const width = entry.target.style.width;
          entry.target.style.width = "0";
          setTimeout(() => {
            entry.target.style.width = width;
          }, 100);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => {
    observer.observe(bar);
  });
});
