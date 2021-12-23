const output = document.querySelector(".output");
const btn = document.querySelector(".btn");

const createForm = () => {
  console.log("hi");
  // Create a form synamically
  const form = document.createElement("form");

  // Create an label and input element for Full Name
  const label = document.createElement("label");
  label.setAttribute("for", "input");
  label.innerHTML = "Name: ";
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Full Name");

  form.appendChild(label);
  form.appendChild(input);

  output.appendChild(form);
};

btn.addEventListener("click", createForm);
