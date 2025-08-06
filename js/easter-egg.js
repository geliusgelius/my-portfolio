document.addEventListener("DOMContentLoaded", () => {
  // Проверка основных элементов
  const secretBtn = document.querySelector(".secret-trigger__btn");
  const gameSection = document.getElementById("easter-egg");

  if (!secretBtn || !gameSection) {
    console.error("Не найдены необходимые элементы для игры!");
    return;
  }

  // Остальные элементы
  const closeBtn = gameSection.querySelector(".easter-egg__close");
  const gameArea = gameSection.querySelector(".easter-egg__game-area");
  const startBtn = gameSection.querySelector(".easter-egg__start-btn");
  const scoreDisplay = gameSection.querySelector(".easter-egg__score span");
  const timerDisplay = gameSection.querySelector(".easter-egg__timer span");

  // Состояние игры
  let score = 0;
  let timer = 30;
  let gameInterval;
  let timerInterval;
  let isGameRunning = false;

  // ========== Функции интерфейса ========== //
  function showGame() {
    gameSection.style.display = "flex";
    setTimeout(() => (gameSection.style.opacity = "1"), 10);
    document.body.style.overflow = "hidden";
  }

  function hideGame() {
    gameSection.style.opacity = "0";
    setTimeout(() => {
      gameSection.style.display = "none";
      document.querySelector(".secret-trigger").style.opacity = "1";
      document.body.style.overflow = "";
      resetGame();
    }, 500);
  }

  // ========== Логика игры ========== //
  function createCat() {
    const cat = document.createElement("div");
    const isGolden = Math.random() < 0.15;

    cat.className = `cat ${isGolden ? "golden" : ""}`;
    cat.style.backgroundImage = `url("assets/images/${
      isGolden ? "golden-cat.png" : "pink-cat.png"
    }")`;

    const maxX = gameArea.offsetWidth - 60;
    const maxY = gameArea.offsetHeight - 60;
    cat.style.left = `${Math.random() * maxX}px`;
    cat.style.top = `${Math.random() * maxY}px`;

    const size = 40 + Math.random() * 40;
    cat.style.width = `${size}px`;
    cat.style.height = `${size}px`;

    cat.addEventListener("click", (e) => {
      const points = isGolden ? 5 : 1;
      score += points;
      scoreDisplay.textContent = score;

      // Создаем элемент с анимацией
      const pointsElement = document.createElement("div");
      pointsElement.className = "points-animation";
      pointsElement.textContent = `+${points}`;
      pointsElement.style.color = isGolden ? "#FFD700" : "#FF69B4";
      pointsElement.style.fontWeight = "bold";
      pointsElement.style.fontSize = isGolden ? "24px" : "20px";
      pointsElement.style.position = "absolute";

      // Позиционируем рядом с курсором
      pointsElement.style.left = `${
        e.clientX - gameArea.getBoundingClientRect().left + 10
      }px`;
      pointsElement.style.top = `${
        e.clientY - gameArea.getBoundingClientRect().top
      }px`;

      gameArea.appendChild(pointsElement);

      // Анимация всплывания
      let pos = 0;
      const animate = () => {
        pos++;
        pointsElement.style.top = `${parseInt(pointsElement.style.top) - 1}px`;
        pointsElement.style.opacity = `${1 - pos / 100}`;

        if (pos < 100) {
          requestAnimationFrame(animate);
        } else {
          pointsElement.remove();
        }
      };
      requestAnimationFrame(animate);

      cat.remove();
    });

    gameArea.appendChild(cat);
    setTimeout(
      () => cat.remove(),
      isGolden ? 2500 : 1500 + Math.random() * 1500
    );
  }

  function startGame() {
    if (isGameRunning) return;

    isGameRunning = true;
    score = 0;
    timer = 30;
    scoreDisplay.textContent = "0";
    timerDisplay.textContent = "30";
    startBtn.disabled = true;
    startBtn.textContent = "Игра продолжается...";
    gameArea.innerHTML = "";

    timerInterval = setInterval(() => {
      timer--;
      timerDisplay.textContent = timer;
      if (timer <= 0) endGame();
    }, 1000);

    gameInterval = setInterval(createCat, 800);
  }

  function endGame() {
    clearInterval(timerInterval);
    clearInterval(gameInterval);
    isGameRunning = false;
    startBtn.disabled = false;
    startBtn.textContent = "Играть снова";

    const result = document.createElement("div");
    result.className = "game-result";
    result.innerHTML = `
      <h3>Игра окончена!</h3>
      <p>Ты собрал(а) ${score} ${getCatWord(score)}!</p>
      <p>${getFunnyMessage(score)}</p>
    `;
    gameArea.appendChild(result);
  }

  function resetGame() {
    clearInterval(timerInterval);
    clearInterval(gameInterval);
    isGameRunning = false;
    startBtn.disabled = false;
    startBtn.textContent = "Начать игру";
    gameArea.innerHTML = "";
    score = 0;
    timer = 30;
    scoreDisplay.textContent = "0";
    timerDisplay.textContent = "30";
  }

  // Вспомогательные функции
  function getCatWord(num) {
    const lastDigit = num % 10;
    if (num >= 11 && num <= 14) return "котиков";
    if (lastDigit === 1) return "котика";
    if (lastDigit >= 2 && lastDigit <= 4) return "котика";
    return "котиков";
  }

  function getFunnyMessage(score) {
    if (score === 0) return "Котики обиделись и ушли 😿";
    if (score < 5) return "Неплохо, но котики ждут больше внимания!";
    if (score < 15) return "Отличный результат! Ты явно нравишься котикам 😻";
    if (score < 30) return "Ух ты! Настоящий повелитель розовых котиков! 💖";
    return "Невероятно! Котики в восторге от тебя! 🌟";
  }

  // ========== Обработчики событий ========== //
  secretBtn.addEventListener("mouseenter", () => {
    secretBtn.classList.add("hover-effect");
    setTimeout(() => secretBtn.classList.remove("hover-effect"), 1000);
  });

  secretBtn.addEventListener("click", () => {
    document.querySelector(".secret-trigger").style.opacity = "0";
    showGame();
  });

  closeBtn.addEventListener("click", hideGame);
  gameSection.addEventListener(
    "click",
    (e) => e.target === gameSection && hideGame()
  );
  startBtn.addEventListener("click", startGame);
});
