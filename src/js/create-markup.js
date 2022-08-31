import refs from "./refs";
import { addCurrrentMoviesToLocalStorage } from "./local-storage"
import { transformId } from "./fetch-films-main";



const IMG_URL = "https://image.tmdb.org/t/p/w500"




///////////// --функція для створення карток популярних фільмів на головну сторінку----///////
function renderFilmList(films) {
    const markup = films
        .map((film) => {
        console.log(film)
            return `
            <li class="main-container--card"
        data-modal-open>
        <img class="card-poster"
        data-id="${film.id}" 
        src="${film.poster_path === null ? './no_image.jpg'
              : `${IMG_URL}${film.poster_path}`
          }"
        alt="${film.original_name}" loading="lazy">
        <div class="card-wrap">
        <h2 class="card-title" data-id="${film.id}">${film.original_title.toUpperCase() || film.title.toUpperCase() || film.title.toUpperCase()}</h2>
        <p class="card-info"> ${transformId(film.genre_ids)} | ${(film.release_date || film.first_air_date).slice(0,4)} </p>
         </div>
    </li>`;
        }).join("");
refs.containerBox.innerHTML = markup;
}

export {renderFilmList};

///////////// --функція для створення карток  фільмів в MY LIBRARY----///////
function renderMoviesCard(films) {
    const filmCards = films
    .map((film) => {
        return `
        <li class="main-container--card"
        data-modal-open>
        <img class="card-poster"
        data-id="${film.id}" 
        src="${IMG_URL}${film.poster_path}" 
        alt="${film.original_name}" loading="lazy">
        <div class="card-wrap">
        <h2 class="card-title" data-id="${film.id}">${film.original_title.toUpperCase() || film.title.toUpperCase() || film.title.toUpperCase()}</h2>
        <p class="card-info"> ${transformId(film.genre_ids)} | ${(film.release_date || film.first_air_date).slice(0,4)} <span class="card-rating"> ${film.vote_average.toFixed(1)}</span></p>
         </div>
    </li>`;
        }).join("");
    
    refs.moviesContainer.insertAdjacentHTML('beforeend', filmCards);
    
};

export {renderMoviesCard};
