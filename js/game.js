const gameArea = document.getElementById("game-area");
const startBtn = document.getElementById("start-game");

startBtn.addEventListener("click", () => {
  gameArea.innerHTML = '<div class="target">Поймай меня!</div>';
  const target = document.querySelector(".target");

  target.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
  });
});
