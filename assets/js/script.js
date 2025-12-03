// Валідація форми входу
function validateLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (password.length < 6) {
    alert("Пароль має містити не менше 6 символів!");
    return false;
  }

  alert(`Вітаємо, ${email}! Ви успішно увійшли.`);
  return true;
}

// Валідація форми реєстрації
function validateRegister() {
  const name = document.getElementById("fullname").value.trim();
  const terms = document.getElementById("terms").checked;

  if (name === "") {
    alert("Будь ласка, введіть ім’я.");
    return false;
  }

  if (!terms) {
    alert("Потрібно погодитися з умовами сайту.");
    return false;
  }

  alert("Реєстрація успішна!");
  return true;
}
