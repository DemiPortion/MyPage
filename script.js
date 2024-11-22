document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginButton");
    if (loginButton) {
        loginButton.addEventListener("click", () => {
            alert("Connexion non disponible dans cette version.");
        });
    }
});
