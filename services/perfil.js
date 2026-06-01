import {
    observeAuth,
    logoutUser
} from "../services/auth.js";

observeAuth(async (user) => {

    if (!user) {

        window.location.href = "/login.html";
        return;

    }

    document.getElementById("user-name").textContent =
        user.displayName || "Usuário";

    document.getElementById("user-email").textContent =
        user.email || "";

    if (user.photoURL) {

        document.getElementById("user-photo").src =
            user.photoURL;

    }

});

document
    .getElementById("logout-btn")
    .addEventListener("click", async () => {

        await logoutUser();

        window.location.href = "/index.html";

    });