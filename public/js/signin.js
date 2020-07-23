const signinForm = document.getElementById("signin-form");
const signInDiv = document.getElementById("div-signin");
const signUpDiv = document.getElementById("div-signup");
const signInButton = document.getElementById("button-signin");
const newPassword = document.getElementById("inputNewPassword");
const confirmPassword = document.getElementById("confirmPassword");
const signUpButton = document.getElementById("button-signup");
const backLink = document.getElementById("back-link");

function showSignIn(form) {
    signinForm.removeChild(signUpDiv);
    signinForm.removeChild(signUpButton);

    showElements(signInDiv, backLink);

    signInButton.setAttribute("onclick", "signIn()");
    signInButton.setAttribute("type", "submit");
}

function showSignUp() {
    signinForm.removeChild(signInDiv);
    signinForm.removeChild(signInButton);

    showElements(signUpDiv, backLink);

    signUpButton.setAttribute("onclick", "signUp()");
    signUpButton.setAttribute("type", "submit");
}

function signIn() {
    const emailInput = document.getElementById("inputEmail");
    if (!isValidEmail(emailInput.value)) {
        alert("Invalid email address");
        return;
    }
    alert(emailInput.value);
    
    const passwordInput = document.getElementById("inputPassword");
    alert(passwordInput.value);
}

function signUp() {
    const emailInput = document.getElementById("inputEmail");
    alert(emailInput.value);

    const passwordInput = document.getElementById("inputNewPassword");
    alert(passwordInput.value);
}

function showElements() {
    for (a of arguments) {
        a.style.display = "block";
    }
}

function isValidEmail(email) {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase());
}

var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
newPassword.onfocus = function() {
  document.getElementById("password-message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
newPassword.onblur = function() {
  document.getElementById("password-message").style.display = "none";
}

// When the user starts to type something inside the password field
newPassword.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(newPassword.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(newPassword.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(newPassword.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if(newPassword.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

var match = document.getElementById("match-password");

// When the user clicks on the password field, show the message box
confirmPassword.onfocus = function() {
  document.getElementById("confirm-password-message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
confirmPassword.onblur = function() {
  document.getElementById("confirm-password-message").style.display = "none";
}

// When the user starts to type something inside the password field
confirmPassword.onkeyup = function() {
    if(confirmPassword.value === newPassword.value) {
        match.classList.remove("invalid");
        match.classList.add("valid");
    } else {
        match.classList.remove("valid");
        match.classList.add("invalid");
    }
}
