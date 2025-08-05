document.addEventListener("DOMContentLoaded", function () {
  const gameArea = document.getElementById("game-area");
  const startBtn = document.getElementById("start-game");

  if (!startBtn) return;

  startBtn.addEventListener("click", () => {
    if (!gameArea) return;

    gameArea.innerHTML = '<div class="target">Поймай меня!</div>';
    const target = document.querySelector(".target");

    if (!target) return;
    target.addEventListener("mouseover", () => {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 100);
      target.style.left = `${x}px`;
      target.style.top = `${y}px`;
    });
  });
});
