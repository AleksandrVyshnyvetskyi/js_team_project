import axios from 'axios'
import refs from './refs';
import { addCurrrentMoviesToLocalStorage } from "./local-storage"

const API_KEY = '2994e3a31c3cad99fd99bf3fe61d916f';
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const searchFilms = async () => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    // console.log(response.data.results)
    renderFilmList(response.data.results)
    console.log(response.data.results);
    addCurrrentMoviesToLocalStorage(response.data.results);
    return response.data;
};

searchFilms();

const addGenresToLocalStorage = async () => {
    const genres = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    // console.log(genres.data.genres)
    localStorage.setItem("GENRES", JSON.stringify(genres.data.genres))
   
};

addGenresToLocalStorage();

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
// transformId ([18, 90, 28])

function renderFilmList(films) {
        const markup = films
            .map((film) => {
            console.log(film)
                return `
        <li class="main-container--card">
            <img class="film-poster" src="${IMG_URL}${film.poster_path}" alt="${film.original_title}" loading="lazy">
            <p class="film-info">
            <h2 class="film-title">${film.original_title.toUpperCase()}</h2>
            <p class="more-info"> ${transformId(film.genre_ids)} | ${film.release_date.slice(0,4)}</p>
            </p>
        </li>
      `;
            }).join("");
    refs.containerBox.innerHTML = markup;
};

