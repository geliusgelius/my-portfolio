document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".projects__item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }, index * 150);
        }
      });
    },
    { threshold: 0.1 }
  );

  projects.forEach((project) => {
    project.style.opacity = 0;
    project.style.transform = "translateY(30px)";
    project.style.transition = "all 0.6s ease-out";
    observer.observe(project);
  });
});
