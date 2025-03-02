const loginForm= document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email=loginForm.email.value;
localStorage.setItem('email', email);
window.location.href='home.html';
})
