const signinForm = document.getElementById("signin-form");
const signInDiv = document.getElementById("div-signin");
const signUpDiv = document.getElementById("div-signup");
const signInButton = document.getElementById("button-signin");
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
