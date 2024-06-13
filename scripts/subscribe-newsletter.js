document
  .getElementById("subscription-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const message = document.getElementById("message");
    const email = emailInput.value;

    if (validateEmail(email)) {
      message.textContent = "Thank you for subscribing!";
      message.style.color = "green";
      emailInput.value = "";
      setTimeout(() => {
        message.textContent = "";
      }, 3000);
    } else {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "red";
      setTimeout(() => {
        message.textContent = "";
      }, 3000);
    }
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
