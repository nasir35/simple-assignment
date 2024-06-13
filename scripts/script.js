// navbar color correction script
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const threshold = 50;
  const darkBackgroundSections = document.querySelectorAll(".dark-bg-section");

  let isDarkBackground = false;

  darkBackgroundSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= threshold && rect.bottom >= threshold) {
      isDarkBackground = true;
    }
  });

  if (isDarkBackground) {
    navbar.classList.add("dark-theme");
  } else {
    navbar.classList.remove("dark-theme");
  }
});

// footer form script
document
  .getElementById("subscription-form-2")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email-2");
    const message = document.getElementById("message-2");
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
