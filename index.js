const signupButton = document.querySelectorAll('.js-signup-button');
const signupPopupCloseButton = document.querySelectorAll('.js-signup-popup-close-button');
const signupPopupOverlay = document.querySelector('.js-popup-overlay');

signupButton.forEach(button => {
    button.addEventListener('click', () => {
        const signupPopup = document.querySelector('.js-signup-popup')
        openSignupPopup(signupPopup);
        const signupPopupFirstInput = document.getElementById('signup-popup_startup-name');
        signupPopupFirstInput.focus();
    });
})

signupPopupCloseButton.forEach(button => {
    button.addEventListener('click', () => {
        const signupPopup = document.querySelector('.js-signup-popup');
        closeSignupPopup(signupPopup);
    });
})

signupPopupOverlay.addEventListener('click', () => {
    const signupPopup = document.querySelector('.js-signup-popup');
    closeSignupPopup(signupPopup);
});

function openSignupPopup(signupPopup) {
    if (signupPopup == null) return
    signupPopup.classList.add('active');
    signupPopupOverlay.classList.add('active');
}

function closeSignupPopup(signupPopup) {
    if (signupPopup == null) return
    signupPopup.classList.remove('active');
    signupPopupOverlay.classList.remove('active');
}