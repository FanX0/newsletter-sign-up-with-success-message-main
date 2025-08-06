const content = document.getElementById("content");
const section = document.getElementById("section");
const form = document.getElementById("form");
const dismissButton = document.getElementById("dismissButton");

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  document.getElementById("email-error").innerHTML = "";
  document.getElementById("email").classList.remove("error-input");

  let isValid = true;

  if (!data.email || !validateEmail(data.email)) {
    displayError("email-error", "Please Enter a valid email");
    document.getElementById("email").classList.add("error-input");
    isValid = false;
  }

  if (isValid) {
    displayData("display-data", data.email);
    section.style.display = "block";
    content.style.display = "none";
  }
};

const displayData = (elementId, message) => {
  document.getElementById(elementId).textContent = message;
};

const displayError = (elementId, message) => {
  document.getElementById(elementId).textContent = message;
};

const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

form.addEventListener("submit", handleSubmit);

dismissButton.addEventListener("click", () => {
  section.style.display = "none";
  content.style.display = "block";
});
