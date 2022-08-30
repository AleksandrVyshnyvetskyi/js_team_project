import refs from "./refs";
import { addCurrrentMoviesToLocalStorage } from "./local-storage"


const IMG_URL = "https://image.tmdb.org/t/p/w500"

///////////// --функція для створення карток популярних фільмів на головну сторінку----///////
function renderFilmList(films) {
    const markup = films
        .map((film) => {
        console.log(film)
            return `
            <li class="main-container--card">
            <img class="film-poster" 
            src="${IMG_URL}${film.poster_path}" 
            alt="${film.original_name}" loading="lazy"
            data-id="${film.id}">
            <div class="film-info">
            <h2 class="film-title" data-id="${film.id}">${film.original_title.toUpperCase() || film.title.toUpperCase() || film.title.toUpperCase()}</h2>
            <p class="more-info"> ${transformId(film.genre_ids)} | ${(film.release_date || first_air_date).slice(0,4)}</p>
             </div>
        </li>
  `;
        }).join("");
refs.containerBox.innerHTML = markup;
}

export {renderFilmList};

///////////// --функція для створення карток  фільмів в MY LIBRARY----///////
function renderMoviesCard(films) {
    const filmCards = films
    .map((film) => {
        return `
    <li class="main-container--card">
        <img class="film-poster" 
        src="${IMG_URL}${film.poster_path}" 
        alt="${film.original_name}" loading="lazy"
        data-id="${film.id}">
        <div class="film-info">
        <h2 class="film-title" data-id="${film.id}">${film.original_title.toUpperCase() || film.title.toUpperCase() || film.title.toUpperCase()}</h2>
        <p class="more-info"> ${transformId(film.genre_ids)} | ${(film.release_date || first_air_date).slice(0,4)} <span class="film-rating"> ${film.vote_average} </span> </p>
         </div>
    </li>`;
        }).join("");
    
    refs.moviesContainer.insertAdjacentHTML('beforeend', filmCards);
};

export {renderMoviesCard};


///////////// --функція для створення списку жанрів----///////
function transformId ([...arr]) {
    const g = localStorage.getItem("GENRES");
    const genres = JSON.parse(g);
    let genreName;
    const array = [...arr]
    // console.log(genres)
    for (let i = 0; i < genres.length; i++) {
        // console.log(genres[i]);
        for (let x = 0; x < array.length; x++) {
            if (array[x] === genres[i].id) {
                genreName = genres[i].name;
                array[x] = genreName
            };
        };
    };
    console.log(array)
    if (array.length > 2) {
        return `${array[0]}, ${array[1]}, Other`
    }
    return `${array[0]}, ${array[1]}`
};