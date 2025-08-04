document.addEventListener("DOMContentLoaded", () => {
  // Проверка основных элементов
  const secretBtn = document.querySelector(".secret-trigger__btn");
  const gameSection = document.getElementById("easter-egg");
  const confettiContainer = document.querySelector(
    ".secret-trigger__confetti-container"
  );

  if (!secretBtn || !gameSection || !confettiContainer) {
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

  // Звуковые эффекты
  const sounds = {
    meow: new Audio(
      "https://assets.mixkit.co/sfx/preview/mixkit-cat-meow-117.mp3"
    ),
    gold: new Audio(
      "https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3"
    ),
    end: new Audio(
      "https://assets.mixkit.co/sfx/preview/mixkit-game-level-completed-2059.mp3"
    ),
    open: new Audio(
      "https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3"
    ),
  };

  // Настройка звуков
  Object.values(sounds).forEach((sound) => {
    sound.volume = 0.6;
  });

  // ========== Функции интерфейса ========== //
  function showGame() {
    sounds.open.play().catch(console.error);
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

  function triggerConfetti() {
    confettiContainer.innerHTML = "";

    // Создаем 120 частиц для лучшего эффекта
    for (let i = 0; i < 120; i++) {
      const particle = document.createElement("div");
      particle.className = "confetti-particle";
      particle.style.left = `${Math.random() * 100}%`;

      // Используем цвета из SCSS переменных через CSS-классы
      const colorClasses = [
        "confetti-primary",
        "confetti-secondary",
        "confetti-gold",
        "confetti-pink",
        "confetti-white",
      ];
      particle.classList.add(
        colorClasses[Math.floor(Math.random() * colorClasses.length)]
      );

      particle.style.width = `${6 + Math.random() * 10}px`;
      particle.style.height = particle.style.width;

      if (Math.random() > 0.7) {
        particle.style.borderRadius = "0";
      }

      const duration = 2 + Math.random() * 3;
      particle.style.animation = `confetti-fall ${duration}s linear forwards`;
      particle.style.animationDelay = `${Math.random() * 0.5}s`;

      confettiContainer.appendChild(particle);
    }

    // Автоочистка через 5 секунд
    setTimeout(() => {
      if (confettiContainer) {
        confettiContainer.innerHTML = "";
      }
    }, 5000);
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

    cat.addEventListener("click", () => {
      const points = isGolden ? 5 : 1;
      score += points;
      scoreDisplay.textContent = score;

      (isGolden ? sounds.gold : sounds.meow).play().catch(console.error);

      // Анимация "+N"
      const plusText = document.createElement("div");
      plusText.className = isGolden ? "points-gold" : "points-pink";
      plusText.textContent = `+${points}`;
      plusText.style.left = cat.style.left;
      plusText.style.top = cat.style.top;
      gameArea.appendChild(plusText);

      setTimeout(() => plusText.remove(), 1000);
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
    startBtn.textContent = "Игра идет...";
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
    sounds.end.play().catch(console.error);

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
    triggerConfetti();
  });

  closeBtn.addEventListener("click", hideGame);
  gameSection.addEventListener(
    "click",
    (e) => e.target === gameSection && hideGame()
  );
  startBtn.addEventListener("click", startGame);
});
