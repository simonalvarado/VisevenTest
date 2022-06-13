//hamburguer menu function
const openHamburguer = document.getElementById('openHamburguer');
const closeHamburguer = document.getElementById('closeHamburguer');
const myLinks = document.getElementById("myLinks");
openHamburguer.addEventListener('click', () => {
  myLinks.style.display = "block";
  openHamburguer.style.display = "none";
  closeHamburguer.style.display = "block";
  body.classList.add('fixed')
})
closeHamburguer.addEventListener('click', () => {
  myLinks.style.display = "none";
  openHamburguer.style.display = "block";
  closeHamburguer.style.display = "none";
  body.classList.remove('fixed')
})

// script for the pop-up
const body = document.body;
const popupContainer = document.getElementById('popupContainer');
const close = document.getElementById('close');

close.addEventListener('click', () => {
  popupContainer.classList.remove('show')
  body.classList.remove('fixed')
})

// script for the validation
const form = document.getElementById('form1');
const phoneNumber = document.getElementById('phoneNumber');
const dayRate = document.getElementById('dayRate');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
})

// checking the inputs
function checkInputs() {
  const phoneNumberValue = phoneNumber.value.trim();
  const dateRateValue = dayRate.value.trim();
  let phoneNumberSuccess;
  let dateRateSuccess;

  if(!phoneNumberValue.length) {
    setErrorFor(phoneNumber);
    phoneNumberSuccess = false;
  } else {
    setSuccessFor(phoneNumber);
    phoneNumberSuccess = true;
  }

  if(dateRateValue.length === 0) {
    setErrorFor(dayRate);
    dateRateSuccess = false;
  } else {
    setSuccessFor(dayRate);
    dateRateSuccess = true;
  }

  if(phoneNumberSuccess && dateRateSuccess) {
    document.getElementById('popupParagraph').innerHTML = `Your phone number is: ${phoneNumberValue} <br> Your day rate is: ${dateRateValue}`;
    popupContainer.classList.add('show');
    body.classList.add('fixed')
  }
}

//functions for style of the inputs
let formControl;
function setErrorFor(input) {
  formControl = input.parentElement;

  formControl.className = 'form-control error';
}
function setSuccessFor(input) {
  formControl = input.parentElement;

  formControl.className = 'form-control success';
}

// Genereting options
const form2 = document.querySelector('#form2');
document.querySelector('#numberEmployees').oninput = () => {

  let numberEmployees = document.getElementById('numberEmployees');
  const numberEmployeesValue = numberEmployees.value.trim();

  form2.payrollSelect.innerHTML = "";

  for(let i = 0; i <= numberEmployeesValue; i++){
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    form2.payrollSelect.appendChild(option);
  }
}

