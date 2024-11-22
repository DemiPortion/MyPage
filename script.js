document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const loginModal = document.getElementById("loginModal");
    const closeModal = document.querySelector(".close");

    loginButton.addEventListener("click", () => {
        loginModal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        loginModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });

    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Remplacez cette logique par une vraie vérification
        if (username === "admin" && password === "password") {
            alert("Connexion réussie !");
            loginModal.style.display = "none";
        } else {
            alert("Identifiants incorrects !");
        }
    });
});
