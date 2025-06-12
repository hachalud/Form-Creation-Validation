document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      feedbackDiv.textContent = "Please fill in all fields.";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      feedbackDiv.textContent = "Please enter a valid email address.";
      return;
    }

    feedbackDiv.style.color = "green";
    feedbackDiv.textContent = "Form submitted successfully!";
    form.reset();
  });
});
