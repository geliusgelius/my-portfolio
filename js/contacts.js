document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contacts__form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      try {
        // Показываем индикатор загрузки
        submitBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        submitBtn.disabled = true;

        // Здесь должна быть логика отправки формы
        // Например, через Fetch API или FormData
        const formData = new FormData(form);

        // Имитация отправки (замените на реальный запрос)
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Показываем уведомление об успехе
        showNotification("Сообщение успешно отправлено!", "success");
        form.reset();
      } catch (error) {
        // Показываем уведомление об ошибке
        showNotification("Ошибка при отправке. Попробуйте позже.", "error");
        console.error("Form submission error:", error);
      } finally {
        // Восстанавливаем кнопку
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  function showNotification(message, type) {
    const notification = document.createElement("div");
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("notification--show");
    }, 10);

    setTimeout(() => {
      notification.classList.remove("notification--show");
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
});
