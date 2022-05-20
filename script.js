const inpFirstName = document.querySelector("form input:first-child");
const requirementsFirstN = document.querySelector("form p:nth-child(2)");

const inpLastName = document.querySelector("form input:nth-child(3)");
const requirementsLastN = document.querySelector("form p:nth-child(4)");

const inpEmail = document.querySelector("form input:nth-child(5)");
const requirementsEmail = document.querySelector("form p:nth-child(6)");

const inpPassword = document.querySelector("form input:nth-child(7)");
const requirementsPassword = document.querySelector("form p:nth-child(8)");

const form = document.querySelector("form");

function myFunction() {

  if (!inpFirstName.checkValidity()) {
    requirementsFirstN.setAttribute("class", "requirements_visible");
    inpFirstName.setAttribute("class", "input_error");
    // inpFirstName.setCustomValidity('efre');
    // inpFirstName.;
  } else {
    requirementsFirstN.setAttribute("class", "requirements");
    inpFirstName.removeAttribute("class");
  }

  if (!inpLastName.checkValidity()) {
    requirementsLastN.setAttribute("class", "requirements_visible");
    inpLastName.setAttribute("class", "input_error");
  } else {
    requirementsLastN.setAttribute("class", "requirements");
    inpLastName.removeAttribute("class");
  }

  if (!inpEmail.checkValidity()) {
    requirementsEmail.setAttribute("class", "requirements_visible");
    inpEmail.setAttribute("class", "input_error");
  } else {
    requirementsEmail.setAttribute("class", "requirements");
    inpEmail.removeAttribute("class");
  }

  if (!inpPassword.checkValidity()) {
    requirementsPassword.setAttribute("class", "requirements_visible");
    inpPassword.setAttribute("class", "input_error");
  } else {
    requirementsPassword.setAttribute("class", "requirements");
    inpPassword.removeAttribute("class");
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
});