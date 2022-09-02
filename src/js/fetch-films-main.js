import axios from 'axios';
const API_KEY = '2994e3a31c3cad99fd99bf3fe61d916f';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
import Pagination from './pagination.js';
import API from './api-service.js';
import { addCurrrentMoviesToLocalStorage } from './local-storage';
import { preloaderShow, preloaderShowLonger, hidePreloader } from './loader';
import refs from './refs'

const containerBox = document.querySelector(`.main-container--card__box`);
const inputEl = document.querySelector('.header_input');
const apiService = new API;
const pagination = new Pagination;
getPopularMovie();
// Фун-ия, которая берет и передает данные по апи, имеет первый! параметр page = false. После параметра page можете передавать свои.
function getPopularMovie(page = false) {
  preloaderShowLonger();
  const queryPage = page ? page : 1; // Проверка страниц, обязательно до fetch
  apiService.setPageNumber = queryPage; // Передает текущую страницу в класс api
  apiService.fetchPopularMovie().then(data => {
    pagination.setCurrentPage = queryPage; // Передает страницу в пагинатор
    pagination.setTotalPages = data.total_pages; // Передает общее кол-во страниц в пагинатор
    pagination.setCallback = getPopularMovie; // Передает ссылку на коллбэк функцию
    pagination.renderPagination(); // Вызов пагинации
    addCurrrentMoviesToLocalStorage(data.results);
    renderFilmList(data.results);
  });
}
const searchFilms = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  renderFilmList(response.data.results);
  addCurrrentMoviesToLocalStorage(response.data.results);
  return response.data;
};
searchFilms();
const addGenresToLocalStorage = async () => {
  const genres = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  localStorage.setItem('GENRES', JSON.stringify(genres.data.genres));
};
addGenresToLocalStorage();


// --функція для створення карток популярних фільмів на головну сторінку
function renderFilmList(films) {
  refs.containerBox.innerHTML = '';
    const markup = films
      .map((film) => {
            let date = film.release_date ?? film.first_air_date ?? null;
            date = (date !== null) ? date.slice(0, 4) : '';
            return `
            <li class="main-container--card"
        data-modal-open>
        <img class="card-poster"
        data-id="${film.id}"
        ${imageSrc(film)}
        alt="${film.original_name}" loading="lazy">
        <div class="card-wrap">
        <h2 class="card-title" data-id="${film.id}">${film.title.toUpperCase() || film.title.toUpperCase()}</h2>
        <p class="card-info"> ${transformId(film.genre_ids)} | ${date} </p>
         </div>
    </li>`;
        }).join("");
refs.containerBox.innerHTML = markup;
}
export { renderFilmList };
function imageSrc(image) {
    if (image.original_title == "Kærlighed for voksne") {
    return `src="https://m.media-amazon.com/images/M/MV5BOWQ1ODQ0ZTQtOGJjYi00ODZmLWFkOTAtOWMzN2E4YzE0YmVjXkEyXkFqcGdeQXVyMjAwNzczNTU@._V1_.jpg"`
  };
  console.log()
  return `src=${ image.poster_path ? `${IMG_URL}${image.poster_path}` : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" }`
};
// --функція для створення карток  фільмів в MY LIBRARY

function renderMoviesCard(films) {
    if (films === [] || films === undefined) {
    return
  };
    const filmCards = films
      .map((film) => {
        let date = film.release_date ?? film.first_air_date ?? null;
        date = (date !== null) ? date.slice(0, 4) : '';
        return `
        <li class="main-container--card"
    data-modal-open>
    <img class="card-poster"
    data-id="${film.id}"
    src="${film.poster_path ? `${IMG_URL}${film.poster_path}` : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
        }"
    alt="${film.original_name}" loading="lazy">
    <div class="card-wrap">
    <h2 class="card-title" data-id="${film.id}">${film.title.toUpperCase() || film.title.toUpperCase()}</h2>
    <p class="card-info"> ${transformId(film.genre_ids)} | ${date}<span class="card-rating"> ${film.vote_average.toFixed(1)}</span></p>
     </div>
</li>`;
    }).join("");
    refs.moviesContainer.insertAdjacentHTML('beforeend', filmCards);
};
export {renderMoviesCard};

function transformId([...arr]) {
  const g = localStorage.getItem('GENRES');
  const genres = JSON.parse(g);
  let genreName;
  const array = [...arr];
  for (let i = 0; i < genres.length; i++) {
    for (let x = 0; x < array.length; x++) {
      if (array[x] === genres[i].id) {
        genreName = genres[i].name;
        array[x] = genreName;
      }
    }
  }

  if (array.length > 2) {
    return `${array[0]}, ${array[1]}, Other`;
  } else if (array.length === 1) {
        return `${array[0]}`
  }
  else if (array.length === 0) {
    return `No genre`;
  }
  return `${array[0]}, ${array[1]}`;
}