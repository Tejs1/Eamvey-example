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

  const labelMajor = document.createElement("label");
  labelMajor.setAttribute("for", "major");
  labelMajor.innerHTML = "Major: ";

  const major = document.createElement("select");
  major.setAttribute("name", "major");
  major.setAttribute("class", "major");

  const option1 = document.createElement("option");
  option1.setAttribute("value", "CSE");
  option1.innerHTML = "CSE";
  const option2 = document.createElement("option");
  option2.setAttribute("value", "ECE");
  option2.innerHTML = "ECE";
  const option3 = document.createElement("option");
  option3.setAttribute("value", "EEE");
  option3.innerHTML = "EEE";

  major.appendChild(option1);
  major.appendChild(option2);
  major.appendChild(option3);

  const labelDomain = document.createElement("label");
  labelDomain.setAttribute("for", "domain");
  labelDomain.innerHTML = "Domain: ";

  const domain = document.createElement("select");
  domain.setAttribute("name", "Domain");
  domain.setAttribute("class", "domain");

  let subOption1 = document.createElement("option");
  subOption1.setAttribute("value", "AI");
  subOption1.setAttribute("class", "subOption1");
  subOption1.innerHTML = "AI";
  let subOption2 = document.createElement("option");
  subOption2.setAttribute("value", "ML");
  subOption2.setAttribute("class", "subOption2");
  subOption2.innerHTML = "ML";

  domain.appendChild(subOption1);
  domain.appendChild(subOption2);

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
  form.appendChild(labelMajor);
  form.appendChild(major);

  form.appendChild(br.cloneNode());
  form.appendChild(labelDomain);
  form.appendChild(domain);

  form.appendChild(br.cloneNode());
  form.appendChild(submitBtn);

  output.appendChild(form);

  major.addEventListener("input", selectHandler);

  btn.setAttribute("disabled", "true");
};

const selectHandler = (e) => {
  let majorSelected = e.target.value;
  console.log(majorSelected);
  const sO1 = document.querySelector(".subOption1");
  const sO2 = document.querySelector(".subOption2");

  switch (majorSelected) {
    case "CSE":
      sO1.setAttribute("value", "AI");
      sO1.innerHTML = "AI";
      sO2.setAttribute("value", "ML");
      sO2.innerHTML = "ML";
      break;
    case "ECE":
      sO1.setAttribute("value", "ECE1");
      sO1.innerHTML = "ECE1";
      sO2.setAttribute("value", "ECE2");
      sO2.innerHTML = "ECE2";
      break;
    case "EEE":
      sO1.setAttribute("value", "EEE1");
      sO1.innerHTML = "EEE1";
      sO2.setAttribute("value", "EEE2");
      sO2.innerHTML = "EEE2";
      break;
  }
};

btn.addEventListener("click", createForm);
