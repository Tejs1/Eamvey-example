const output = document.querySelector(".output");
const btn = document.querySelector(".btn");

const createForm = (e) => {
  e.preventDefault();

  // Create a form dynamically
  const form = document.createElement("form");

  // Create an label and input element for Full Name
  const label = document.createElement("label");
  label.setAttribute("for", "input");
  label.innerHTML = "Name: ";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Full Name");

  // Create a break line element
  const br = document.createElement("br");

  // Create an label and input element for Phone no
  const labelNo = document.createElement("label");
  labelNo.setAttribute("for", "phoneNo");
  labelNo.innerHTML = "Phone: ";

  const inputNo = document.createElement("input");
  inputNo.setAttribute("type", "tel");
  inputNo.setAttribute("class", "phoneNo");
  inputNo.setAttribute("pattern", "[0-9]{10}");
  inputNo.setAttribute("placeholder", "0123456789");

  // Create an label and input element for Email
  const labelMail = document.createElement("label");
  labelMail.setAttribute("for", "email");
  labelMail.innerHTML = "Email: ";

  const inputMail = document.createElement("input");
  inputMail.setAttribute("type", "email");
  inputMail.setAttribute("class", "email");
  inputMail.setAttribute("placeholder", "abc@art.com");

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "button");
  submitBtn.innerHTML = "Submit";

  form.appendChild(label);
  form.appendChild(input);
  // Inserting a line break
  form.appendChild(br.cloneNode());
  form.appendChild(labelNo);
  form.appendChild(inputNo);

  form.appendChild(br.cloneNode());
  form.appendChild(labelMail);
  form.appendChild(inputMail);

  form.appendChild(br.cloneNode());
  form.appendChild(submitBtn);

  output.appendChild(form);
};

btn.addEventListener("click", createForm);
