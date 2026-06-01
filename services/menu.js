import {
    observeAuth,
    logoutUser
} from "./auth.js";

observeAuth((user) => {

    const authMenu =
        document.getElementById("auth-menu");

    if (!authMenu) return;

    if (user) {

        authMenu.innerHTML = `
            <li>
                <a href="./templates/perfil.html">
                    Perfil
                </a>
            </li>

            <li>
                <a href="#" id="logout-btn">
                    Sair
                </a>
            </li>
        `;

        document
            .getElementById("logout-btn")
            .addEventListener(
                "click",
                async (e) => {

                    e.preventDefault();

                    await logoutUser();

                    window.location.href =
                        "index.html";
                }
            );

    } else {

        authMenu.innerHTML = `
            <li>
                <a href="/templates/login.html">
                    Entrar
                </a>
            </li>
        `;
    }

});