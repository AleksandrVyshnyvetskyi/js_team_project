import refs from "./refs";




//------- НАБРОСОК РЕНДЕР ГАЛЕРЕИ

const IMG_URL = "https://image.tmdb.org/t/p/w500"
function createContent(array) { 
    return array.reduce((acc, arr) => acc + createCard(arr), "");
}

function createCard(film) {
    return ` <li class="main-container--card"> <img src="${IMG_URL}${film.poster_path}"  alt=""> </li>`;
}

function appendGallery(films) { 
    const markup = createContent(films.results);
    refs.galleryHome.insertAdjacentHTML("beforeend", markup);
    addCurrrentMoviesToLocalStorage(films.results);
}

export {appendGallery};