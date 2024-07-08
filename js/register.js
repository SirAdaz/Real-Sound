const firstNameEl = document.getElementById("firstName");
const lastNameEl = document.getElementById("lastName");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirmPassword");
const form = document.getElementById("signupForm");

// constante pour vérifier si le champ est vide ou non
const isRequired = value => value === '' ? false : true;

const isBetween =(length,min,max)=>length<min || length>max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

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
}

 //validation du nom
 const checkFirstname = () => {
    let valid = false;
    const min = 3,
    max = 25;
    const firstName = firstNameEl.value.trim();
   
    if (!isRequired(firstName)) {
        showError(firstNameEl, 'Le champ ne peut être vide');
    } else if (!isBetween(firstName.length, min, max)) {
        showError(firstNameEl, `le nom doit être compris entre ${min} et ${max} caractères.`)
    } else {
        showSuccess(firstNameEl);
        valid = true;
    }
    return valid;
}

const checkLastName = () => {
    let valid = false;
    const min = 3,
    max = 25;
    const lastName = lastNameEl.value.trim();
   
    if (!isRequired(lastName)) {
        showError(lastNameEl, 'Le champ ne peut être vide');
    } else if (!isBetween(lastName.length, min, max)) {
        showError(lastNameEl, `le nom doit être compris entre ${min} et ${max} caractères.`)
    } else {
        showSuccess(lastNameEl);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'le champ ne peut être vide');
    } else if (!isEmailValid(email)) {
        showError(emailEl, "L'adresse mail ne peut être valide")
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

//validation du mot de passe
const checkPassword = () => {
    let valid = false;
   
    const password = passwordEl.value.trim();
   
    if (!isRequired(password)) {
        showError(passwordEl, 'le mot de passe ne peut être vide');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Le mot de passe doit avoir au moins 8 caractères, il doit comporter une minuscule,une majuscule, un chiffre et un caractère spécial parmi les suivants (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
   
    return valid;
};

 //validation de la confirmation du mot de passe
 const checkConfirmPassword = () => {
    let valid = false;
   
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();
   
    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Entrez votre mot de passe');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, "Votre mot de passe et la confirmation n'est pas bonne");
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }
   
    return valid;
};

form.addEventListener('submit',function(e){ 
    e.preventDefault();
    let isFirstNamevalid = checkFirstname();
    let isLastNameValid = checkLastName();
    let isEmailValid = checkEmail();
    let isPasswordValid = checkPassword();
    let isConfirmPassword = checkConfirmPassword();
    let isFormValid = isFirstNamevalid && isLastNameValid && isEmailValid && isPasswordValid && isConfirmPassword;
    if (isFormValid==false) {
        e.preventDefault();
    } else {
        let firstNameVal = document.getElementById("firstName").value;
        let lastNameVal = document.getElementById("lastName").value;
        let mailVal = document.getElementById("email").value;
        let passordVal = document.getElementById("password").value;
        const user ={
            firstname : firstNameVal,
            lastname : lastNameVal,
            mail : mailVal,
            passord : passordVal
        }
        dataUser = localStorage.setItem('datauser',JSON.stringify(user));
        window.location.href='http://127.0.0.1:5500/login.html'
    };
});