const username1 = document.getElementById('username')
const email1 = document.getElementById('email');
const password1 = document.getElementById('password');

// const namee = document.getElementsByClassName('usr').value.toUpperCase().charAt(0).slice(1)

const checkUsername = () => {
    let valid = false;
    const min = 4,
        max = 25;
    const username = username1.value.trim();

    if (!isRequired(username)) {
        showError(username1, 'Username hissesi bos ola bilmez!');
    } else if (!isBetween(username.length, min, max)) {
        showError(username1, `Username minimum ${min} ve maksimum ${max} character olmalidir.`)
    } else {
        showSuccess(username1);
        valid = true;
    }
    return valid;
};
const checkEmail = () => {
    let valid = false;
    const email = email1.value.trim();
    if (!isRequired(email)) {
        showError(email1, 'Email hissesi ola bilmez!');
    } else if (!isEmailValid(email)) {
        showError(email1, 'Email yoxdur!')
    } else {
        showSuccess(email1);
        valid = true;
    }
    return valid;
};


const checkPassword = () => {
    let valid = false;

    const password = password1.value.trim();

    if (!isRequired(password)) {
        showError(password1, 'Password hissesi bos ola bilmez!');
    } else if (!isPasswordSecure(password)) {
        showError(password1, 'minimum 8 herf , ən azı 1 kiçik hərf, 1 böyük hərf, 1 rəqəm və 1 xüsusi simvol olmalıdır.');
    } else {
        showSuccess(password1);
        valid = true;
    }

    return valid;
};
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = '';
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        test = test();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        test;
    if (isFormValid) {

    }
});

var Modal = document.getElementById('modal_a');
var Btn = document.getElementById('modal');
var Span = document.getElementsByClassName('modal_r')[0];
Btn.onclick = function() {
    Modal.style.display = "block";
}

Span.onclick = function() {
    Modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == Modal) {
        Modal.style.display = "none";
    }
}

function changeColor(){
	var newColor = makeColor();
	var box = document.getElementById('box').style.backgroundColor = newColor;
	document.getElementById('rgb').innerHTML = newColor;
}

function makeColor(){
	var arr = [];
	for(var i = 0; i < 3; i++){
		var num = Math.floor(Math.random() * 256);
		arr.push(num);
	}
	var newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
	return newRgb;
}


  