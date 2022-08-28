import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3/search/movie`;
const KEY = `2994e3a31c3cad99fd99bf3fe61d916f`;


async function fetchMovies(searchQuery) {
    return await axios.get(`${BASE_URL}?api_key=${KEY}&language=en-US&query=${searchQuery}`)
        .then(response => response.data);
}

export default { fetchMovies };