//hamburguer menu function
function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("menu");
    var z = document.getElementById("close_hamburguer");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "block";
    }
}

// script for the pop-up
const popup_container = document.getElementById('popup_container');
const close = document.getElementById('close');

close.addEventListener('click', () => {
  popup_container.classList.remove('show')
})

// script for the validation
const form = document.getElementById('form');
const phone_number = document.getElementById('phone_number');
const day_rate = document.getElementById('day_rate');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
})

// checking the inputs
function checkInputs() {
  const phone_number_value = phone_number.value.trim();
  const day_rate_value = day_rate.value.trim();

  if(!phone_number_value.length) {
    setErrorFor(phone_number);
    var phone_number_success = false;
  } else {
    setSuccessFor(phone_number);
    var phone_number_success = true;
  }

  if(day_rate_value.length === 0) {
    setErrorFor(day_rate);
    var date_rate_success = false;
  } else {
    setSuccessFor(day_rate);
    var date_rate_success = true;
  }

  if(phone_number_success && date_rate_success) {
    document.getElementById('popup_paragraph').innerHTML = `Your phone number is: ${phone_number_value} <br> Your day rate is: ${day_rate_value}`;
    popup_container.classList.add('show')
  }
}

//functions for style of the inputs
function setErrorFor(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control error';
}
function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success';
}

// Genereting options
const form2 = document.querySelector('#form2');
document.querySelector('#number-employees').oninput = () => {

  let number_employees = document.getElementById('number-employees');
  const number_employees_value = number_employees.value.trim();

  form2.payroll_select.innerHTML = "";

  for(let i = 0; i <= number_employees_value; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    form2.payroll_select.appendChild(opcion);
  }
}

