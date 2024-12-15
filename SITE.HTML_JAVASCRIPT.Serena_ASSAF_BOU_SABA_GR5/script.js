//Javascript de Darkmode
let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.getElementById('dark-mode-toggle');


const enableDarkMode = () => {
    document.body.classList.add('dark-mode'); 
    localStorage.setItem('darkMode', 'enabled'); 
};


const disableDarkMode = () => {
    document.body.classList.remove('dark-mode'); 
    localStorage.setItem('darkMode', 'disabled'); 
};


if (darkMode === 'enabled') {
    enableDarkMode();
}


darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode'); 
    if (darkMode !== 'enabled') {
        enableDarkMode(); 
    } else {
        disableDarkMode();
    }
});
//Javascript du formulaire
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const nicknameInput = document.getElementById("Nickname");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        
        formMessage.textContent = "";
        formMessage.className = "";

   
        const nickname = nicknameInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (nickname.length !== 6) {
            displayMessage("Nickname must be exactly 6 characters long.", "error");
            return;
        }

        if (password.length < 8) {
            displayMessage("Password must be at least 8 characters long.", "error");
            return;
        }

        if (password !== confirmPassword) {
            displayMessage("Passwords do not match.", "error");
            return;
        }

  
        displayMessage("Registration successful!", "success");
        form.reset(); 
    });

    function displayMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = type === "success" ? "success-message" : "error-message";
    }
});
