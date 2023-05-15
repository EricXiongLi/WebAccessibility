/**
 * Set the form control element to valid
 * @param {object} element - The DOM element
 */
function setValid(element) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
}

/**
 * Set the form control element to invalid with the error message
 * @param {object} element - The DOM element
 */
function setInvalid(element) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
}

/**
 * Remove validation information from the element
 * @param {object} element - The DOM element
 */
function removeValidation(element) {
    element.classList.remove('is-valid');
    element.classList.remove('is-invalid');
}

/**
 * Validate the login form and try to log the user in
 * @param {object} event - The DOM event
 */
// xc_E4_Form input validation: update error messages
function login(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
        document.getElementById('login-email-error').innerHTML = 'Email can not be empty';
    } else {
        setInvalid(email);
        hasError = true;
        document.getElementById('login-email-error').innerHTML = 'Email should be in correct form';
    }

    var password = document.getElementById('login-password-control');
    if (password.value.trim().length == 0) {
        setInvalid(password);
        hasError = true;
        document.getElementById('login-password-error').innerHTML = 'Password can not be empty';
    } else {
        setValid(password);
    }

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to retrieve the password
 * @param {object} event - The DOM event
 */
function forgot(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
    } else {
        setInvalid(email);
        hasError = true;
    }

    var password = document.getElementById('login-password-control');
    removeValidation(password);

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to register the new user
 * @param {object} event - The DOM event
 */
// xc_E4_Form input validation: update error messages
function register(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;

    var firstName = document.getElementById('register-first-name-control');
    if (firstName.value.trim().length == 0) {
        setInvalid(firstName);
        hasError = true;
        document.getElementById('register-first-name-error').innerHTML = 'First name can not be empty'
    } else if (firstName.validity.valid) {
        setValid(firstName);
    }

    var lastName = document.getElementById('register-last-name-control');
    if (lastName.value.trim().length == 0) {
        setInvalid(lastName);
        hasError = true;
        document.getElementById('register-last-name-error').innerHTML = 'Last name can not be empty'
    } else if (lastName.validity.valid) {
        setValid(lastName);
    }

    var email = document.getElementById('register-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
        document.getElementById('register-email-error').innerHTML = 'Email can not be empty'
    } else {
        setInvalid(email);
        hasError = true;
        document.getElementById('register-email-error').innerHTML = 'Email should be in the correct form'
    }

    var password = document.getElementById('register-password-control');
    var passwordValue = password.value.trim();
    if (passwordValue.length < 8) {
        setInvalid(password);
        hasError = true;
        document.getElementById('register-password-error').innerHTML = 'Password length should not be less than 8 characters'
    } else if (passwordValue.length > 16) {
        setInvalid(password);
        hasError = true;
        document.getElementById('register-password-error').innerHTML = 'Password length should not be greater than 16 characters'
    } else if (passwordValue.match(/[a-zA-Z]+/) == null) {
        setInvalid(password);
        hasError = true;
        document.getElementById('register-password-error').innerHTML = 'Password should contain at least one letter'
    } else if (passwordValue.match(/[0-9]+/) == null) {
        setInvalid(password);
        hasError = true;
        document.getElementById('register-password-error').innerHTML = 'Password should contain at least one number'
    } else {
        setValid(password);
    }

    var programme = document.getElementById('register-programme-control');
    if (programme.validity.valueMissing) {
        setInvalid(programme);
        hasError = true;
        document.getElementById('register-programme-error').innerHTML = 'Please select a programme'
    } else if (!programme.validity.valid) {
        setInvalid(programme);
        hasError = true;
        document.getElementById('register-programme-error').innerHTML = 'The programme is invalid'
    } else {
        setValid(programme);
    }

    if (hasError) {
        document.getElementById('register-error').classList.remove('d-none');
    } else {
        document.getElementById('register-error').classList.add('d-none');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document
        .getElementById('login-login-button')
        .addEventListener('click', login, false);

    document
        .getElementById('login-forgot-button')
        .addEventListener('click', forgot, false);

    document
        .getElementById('register-register-button')
        .addEventListener('click', register, false);
}, false);
