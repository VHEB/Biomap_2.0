import {
    searchSpecies
} from "../../services/gbif.js";

console.log(document.getElementById("search-btn"));
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", async () => {

    const term = document
        .getElementById("search-input")
        .value
        .trim();

    const container =
        document.getElementById("results");

    if (!term) {

        container.innerHTML =
            "<p>Digite o nome de uma espécie.</p>";

        return;
    }

    try {

        container.innerHTML =
            "<p>Pesquisando...</p>";

        const results =
            await searchSpecies(term);

        if (!results.length) {

            container.innerHTML =
                "<p>Nenhuma espécie encontrada.</p>";

            return;
        }

        container.innerHTML = "";

        results.forEach(species => {

            container.innerHTML += `
                <div class="result-card">

                    <h3>
                        ${species.canonicalName || "Sem nome"}
                    </h3>

                    <p>
                        ${species.scientificName || ""}
                    </p>

                    <p>
                        <strong>Reino:</strong>
                        ${species.kingdom || "-"}
                    </p>

                    <button
                        class="details-btn"
                        data-id="${species.key}"
                    >
                        Ver detalhes
                    </button>

                </div>
            `;
        });

    } catch (error) {

        console.error(error);

        container.innerHTML =
            "<p>Erro ao realizar a pesquisa.</p>";
    }

});

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("details-btn")) {

        const speciesId =
            e.target.dataset.id;

        window.location.href =
            `resultado.html?id=${speciesId}`;
    }

});