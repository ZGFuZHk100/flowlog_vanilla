//Signup-Login
//----------------------------------------------------------------
const signupLoginOverlay = document.querySelector('.js-signup-login-overlay');

//Signup
//----------------------------------------------------------------
const signupBtn = document.querySelectorAll('.js-signup-btn');
const signupCloseBtn = document.querySelectorAll('.js-signup__header__close-btn');
const signup = document.querySelector('.js-signup');

signupBtn.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Click');
        openSignupPopup(signup);
        const signupPopupFirstInput = document.getElementById('signup__body__form__startup-name');
        signupPopupFirstInput.focus();
    });
})

signupCloseBtn.forEach(button => {
    button.addEventListener('click', () => {
        const signupPopup = document.querySelector('.js-signup');
        closeSignupPopup(signup);
    });
})

signupLoginOverlay.addEventListener('click', () => {
    closeSignupPopup(signup);
});

function openSignupPopup(signup) {
    if (signup == null) return
    signup.classList.add('active');
    signupLoginOverlay.classList.add('active');
    login.classList.remove('active');
}

function closeSignupPopup(signup) {
    if (signup == null) return
    signup.classList.remove('active');
    signupLoginOverlay.classList.remove('active');
}

//Login
//----------------------------------------------------------------
const loginBtn = document.querySelectorAll('.js-login-btn');
const loginCloseBtn = document.querySelectorAll('.js-login__header__close-btn');
const login = document.querySelector('.js-login');

loginBtn.forEach(button => {
    button.addEventListener('click', () => {
        openLoginPopup(login);
        const loginPopupFirstInput = document.getElementById('login__body__form__email');
        loginPopupFirstInput.focus();
    });
})

loginCloseBtn.forEach(button => {
    button.addEventListener('click', () => {
        closeLoginPopup(login);
    });
})

signupLoginOverlay.addEventListener('click', () => {
    closeSignupPopup(login);
});

function openLoginPopup(login) {
    if (login == null) return
    login.classList.add('active');
    signupLoginOverlay.classList.add('active');
    signup.classList.remove('active');
}

function closeLoginPopup(login) {
    if (login == null) return
    login.classList.remove('active');
    signupLoginOverlay.classList.remove('active');
}