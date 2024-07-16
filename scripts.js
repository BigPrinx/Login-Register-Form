document.addEventListener('DOMContentLoaded', function() {
    const toSignup = document.getElementById('toSignup');
    const toLogin = document.getElementById('toLogin');
    const formContainer = document.querySelector('.form-container');

    toSignup.addEventListener('click', function() {
        formContainer.style.transform = 'translateX(-50%)';
        document.getElementById('signupForm').classList.remove('hidden');
        document.getElementById('loginForm').classList.add('hidden');
    });

    toLogin.addEventListener('click', function() {
        formContainer.style.transform = 'translateX(0%)';
        document.getElementById('loginForm').classList.remove('hidden');
        document.getElementById('signupForm').classList.add('hidden');
    });
});
