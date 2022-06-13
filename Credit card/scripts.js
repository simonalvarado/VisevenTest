// random card number function
let random 
document.querySelector('.generate_random').onclick = () => {
    random = Math.floor(Math.random()*10000000000000000).toString().replace(/([0-9]{4})/g,'$1 ').trim();
    
    if (random.length === 18) {
        random = '0' + random;
    } else if (random.length === 17) {
        random = '00' + random;
    }

    document.querySelector('.card_number').innerText = random;
}

// validating the name
document.querySelector('.name_input').oninput = () => {
    let nameInput = document.querySelector('.name_input').value;

    document.querySelector('.name_input').value = nameInput
    //regular expression to replace letters
    .replace(/\d/g, '');

    nameInput = document.querySelector('.name_input').value;

    if (nameInput === ''){
        nameInput = "JOHN DOE";
    }

    document.querySelector('.name_expiration').innerText = nameInput.toUpperCase();
}

// validating the card number
document.querySelector('.card_number_input').oninput = () => {
    let numberInput = document.querySelector('.card_number_input').value;

    document.querySelector('.card_number_input').value = numberInput
    //regular expression to replace spaces
    .replace(/\s/g, '')
    //regular expression to replace letters
    .replace(/\D/g, '')
    //regular expression to add space every 4 carachters
    .replace(/([0-9]{4})/g, '$1 ')
    //deleting the last space
    .trim();

    numberInput = document.querySelector('.card_number_input').value;

    if (numberInput === ''){
        numberInput = "0123 4567 8910 1112";
    }

    document.querySelector('.card_number').innerText = numberInput;
}

//checking the expiration date
document.querySelector('.expiration_input').oninput = () => {
    let expiration = document.querySelector('.expiration_input').value;
    const exp = document.getElementById('exp');

    expiration = expiration
    .replace(/\D/g, '')
    .replace(/\//g, "").substring(0, 2) + 
    (expiration.length > 2 ? '/' : '') + 
    expiration.replace(/\//g, "").substring(2, 4)
    .replace(/\D/g, '');

    document.querySelector('.expiration_input').value = expiration;

    if (expiration.length < 5) {
        setErrorFor(exp);
    } else {
        setSuccessFor(exp);
    }

    if (expiration === ''){
        expiration = "01/23";
    }

    document.querySelector('.number_expiration').innerText = expiration;
}

// function for error class style
function setErrorFor(input) {
    const formControl = input.parentElement;
  
    formControl.className = 'input_container error';
}
// function for succes class style
function setSuccessFor(input) {
    const formControl = input.parentElement;
  
    formControl.className = 'input_container success';
}