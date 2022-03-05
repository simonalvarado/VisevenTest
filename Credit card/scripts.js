// random card number function
document.querySelector('.generate_random').onclick = () => {
    document.querySelector('.card_number').innerText = Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + ' ' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + ' ' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + ' ' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10);
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
document.querySelector('.expiration_input').onkeyup = () => {
    let expiration = document.querySelector('.expiration_input').value;
    const exp = document.getElementById('exp');

    if (expiration.length === 5) {
        function validDate(expiration) {
            var result = false;
            expiration = expiration.split('/');
            var pattern = /^\d{2}$/;
          
            if (expiration[0] < 1 || expiration[0] > 12)
                result = true;
          
            if (!pattern.test(expiration[0]) || !pattern.test(expiration[1]))
                result = true;
          
            if (expiration[2])
                result = true;
          
            if (result) {
                alert("Please enter a valid date in MM/YY format.");
                setErrorFor(exp);
            }
            else{
                setSuccessFor(exp);
            }
          }
    
        validDate(expiration)
    }

    if (expiration === ''){
        expiration = "01/23";
    }

    if (expiration.length < 5) {
        setErrorFor(exp);
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