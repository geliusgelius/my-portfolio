document.addEventListener("DOMContentLoaded", () => {
  const gameArea = document.querySelector(".easter-egg__game-area");
  const startBtn = document.querySelector(".easter-egg__start-btn");
  const scoreDisplay = document.querySelector(".easter-egg__score span");
  const timerDisplay = document.querySelector(".easter-egg__timer span");

  let score = 0;
  let timer = 30;
  let gameInterval;
  let timerInterval;
  let isGameRunning = false;

  // Создаем котика
  function createCat() {
    const cat = document.createElement("div");
    cat.className = "cat";

    // Случайная позиция
    const maxX = gameArea.offsetWidth - 60;
    const maxY = gameArea.offsetHeight - 60;

    cat.style.left = `${Math.random() * maxX}px`;
    cat.style.top = `${Math.random() * maxY}px`;

    // Случайный размер
    const size = 40 + Math.random() * 40;
    cat.style.width = `${size}px`;
    cat.style.height = `${size}px`;

    // Обработчик клика
    cat.addEventListener("click", () => {
      score++;
      scoreDisplay.textContent = score;
      cat.remove();

      // Анимация "+1"
      const plusOne = document.createElement("div");
      plusOne.textContent = "+1";
      plusOne.style.position = "absolute";
      plusOne.style.left = cat.style.left;
      plusOne.style.top = cat.style.top;
      plusOne.style.color = "#8b3a62";
      plusOne.style.fontWeight = "bold";
      plusOne.style.fontSize = "20px";
      plusOne.style.animation = "floatUp 1s forwards";

      gameArea.appendChild(plusOne);
      setTimeout(() => plusOne.remove(), 1000);
    });

    gameArea.appendChild(cat);

    // Автоматическое исчезновение через 1.5-3 сек
    setTimeout(() => {
      if (cat.parentNode) cat.remove();
    }, 1500 + Math.random() * 1500);
  }

  // Начало игры
  startBtn.addEventListener("click", () => {
    if (isGameRunning) return;

    isGameRunning = true;
    score = 0;
    timer = 30;
    scoreDisplay.textContent = "0";
    startBtn.disabled = true;

    // Очищаем игровое поле
    gameArea.innerHTML = "";

    // Запускаем таймер
    timerDisplay.textContent = timer;
    timerInterval = setInterval(() => {
      timer--;
      timerDisplay.textContent = timer;

      if (timer <= 0) {
        clearInterval(timerInterval);
        clearInterval(gameInterval);
        isGameRunning = false;
        startBtn.disabled = false;

        // Показываем результат
        const result = document.createElement("div");
        result.className = "game-result";
        result.innerHTML = `
          <h3>Игра окончена!</h3>
          <p>Ты собрал(а) ${score} котиков!</p>
          <p>${getFunnyMessage(score)}</p>
        `;
        gameArea.appendChild(result);
      }
    }, 1000);

    // Запускаем появление котиков
    gameInterval = setInterval(createCat, 800);
  });

  // Забавные сообщения по результатам
  function getFunnyMessage(score) {
    if (score === 0) return "Котики обиделись и ушли 😿";
    if (score < 5) return "Неплохо, но котики ждут больше внимания!";
    if (score < 15) return "Отличный результат! Ты явно нравишься котикам 😻";
    return "Ух ты! Настоящий повелитель котиков! 💖";
  }
});

// CSS-анимация для +1
document.head.insertAdjacentHTML(
  "beforeend",
  `
  <style>
    @keyframes floatUp {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(-50px); opacity: 0; }
    }
    .game-result {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      text-align: center;
    }
    .game-result h3 {
      color: #ff66b2;
      margin-bottom: 10px;
    }
  </style>
`
);
