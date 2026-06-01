const BASE_URL = "https://api.gbif.org/v1";

export async function searchSpecies(term) {

    const response = await fetch(
        `${BASE_URL}/species/search?q=${encodeURIComponent(term)}&limit=20`
    );

    const data = await response.json();

    return data.results;
}

export async function getSpeciesById(id) {

    const response = await fetch(
        `${BASE_URL}/species/${id}`
    );

    return await response.json();
}