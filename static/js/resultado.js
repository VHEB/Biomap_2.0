import { getSpeciesById } from "../../services/gbif.js";

const params = new URLSearchParams(window.location.search);

const speciesId = params.get("id");

const container =
    document.getElementById("species-details");

if (!speciesId) {

    container.innerHTML =
        "<p>Espécie não encontrada.</p>";

} else {

    loadSpecies();

}

async function loadSpecies() {

    try {

        const species =
            await getSpeciesById(speciesId);

        container.innerHTML = `
        
            <div class="species-card">

                <h1>
                    ${species.canonicalName || "Sem nome"}
                </h1>

                <p>
                    <strong>Nome Científico:</strong>
                    ${species.scientificName || "Não informado"}
                </p>

                <p>
                    <strong>Status:</strong>
                    ${species.taxonomicStatus || "Não informado"}
                </p>

                <hr>

                <h3>Classificação Taxonômica</h3>

                <p><strong>Reino:</strong> ${species.kingdom || "-"}</p>

                <p><strong>Filo:</strong> ${species.phylum || "-"}</p>

                <p><strong>Classe:</strong> ${species.class || "-"}</p>

                <p><strong>Ordem:</strong> ${species.order || "-"}</p>

                <p><strong>Família:</strong> ${species.family || "-"}</p>

                <p><strong>Gênero:</strong> ${species.genus || "-"}</p>

                <p><strong>Espécie:</strong> ${species.species || "-"}</p>

            </div>

        `;

    } catch (error) {

        console.error(error);

        container.innerHTML =
            "<p>Erro ao carregar os dados da espécie.</p>";
    }
}