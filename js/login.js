let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let form = document.getElementById("signupForm");
let user =localStorage.getItem("datauser");
let objUser=JSON.parse(user);

const showError = (input, message) => {
    // reprendre le form-field element
    const formField = input.parentElement;
    // ajouter la class error et supprimer la class success
    formField.classList.remove('success');
    formField.classList.add('error');
   
    // afficher le message d'erreur
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // reprendre le form-field element
    const formField = input.parentElement;
   
    // ajouter la class success et supprimer la class error
    formField.classList.remove('error');
    formField.classList.add('success');
   
    // cacher le message d'erreur
    const error = formField.querySelector('small');
    error.textContent = '';
};

const checkEmail = () => {
    let valid = false;
    const mail = emailEl.value.trim();
    if (objUser.mail != mail) {
        showError(emailEl, 'le mot de passe ne peut être vide');
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};
const checkPassword = () => {
    let valid = false;
    const passord = passwordEl.value.trim();
    if (objUser.passord != passord) {
        showError(passwordEl, 'le mot de passe ne peut être vide');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    let isEmailValid = checkEmail();
    let isPasswordValid = checkPassword();
    let isFormValid = isEmailValid && isPasswordValid;
    if (isFormValid==false) {
        e.preventDefault();
    } else {
        window.location.href='http://127.0.0.1:5500/pageProduits.html';
    }
});
