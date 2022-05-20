const inpFirstName = document.querySelector("form input:first-child");
const requirementsFirstN = document.querySelector("form p:nth-child(2)");

const inpLastName = document.querySelector("form input:nth-child(3)");
const requirementsLastN = document.querySelector("form p:nth-child(4)");

const inpEmail = document.querySelector("form input:nth-child(5)");
const requirementsEmail = document.querySelector("form p:nth-child(6)");

const inpPassword = document.querySelector("form input:nth-child(7)");
const requirementsPassword = document.querySelector("form p:nth-child(8)");

const svg1Error = document.querySelector(".svg1");

const svg2Error = document.querySelector(".svg2");

const svg3Error = document.querySelector(".svg3");

const svg4Error = document.querySelector(".svg4");


const form = document.querySelector("form");

const svg = document.createElement("SVG");
svg.setAttribute("width", "24");
svg.setAttribute("height", "24");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
const contenu_svg = document.createTextNode('<g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g>');
svg.appendChild(contenu_svg);
document.body.appendChild(svg);


function myFunction() {

  if (!inpFirstName.checkValidity()) {
    requirementsFirstN.setAttribute("class", "requirements_visible");
    inpFirstName.setAttribute("class", "input_error");
    svg1Error.setAttribute("class", "svg1_visible");
  } else {
    requirementsFirstN.setAttribute("class", "requirements");
    inpFirstName.removeAttribute("class");
    svg1Error.setAttribute("class", "svg1");
  }

  if (!inpLastName.checkValidity()) {
    requirementsLastN.setAttribute("class", "requirements_visible");
    inpLastName.setAttribute("class", "input_error");
    svg2Error.setAttribute("class", "svg2_visible");
  } else {
    requirementsLastN.setAttribute("class", "requirements");
    inpLastName.removeAttribute("class");
    svg2Error.setAttribute("class", "svg2");
  }

  if (!inpEmail.checkValidity()) {
    requirementsEmail.setAttribute("class", "requirements_visible");
    inpEmail.setAttribute("class", "input_error");
    svg3Error.setAttribute("class", "svg3_visible");
  } else {
    requirementsEmail.setAttribute("class", "requirements");
    inpEmail.removeAttribute("class");
    svg3Error.setAttribute("class", "svg3");
  }

  if (!inpPassword.checkValidity()) {
    requirementsPassword.setAttribute("class", "requirements_visible");
    inpPassword.setAttribute("class", "input_error");
    svg4Error.setAttribute("class", "svg4_visible");
  } else {
    requirementsPassword.setAttribute("class", "requirements");
    inpPassword.removeAttribute("class");
    svg4Error.setAttribute("class", "svg4");
  }


}

form.addEventListener('submit', (e) => {
  e.preventDefault();
});