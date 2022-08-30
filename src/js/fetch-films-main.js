import axios from 'axios';
const API_KEY = '2994e3a31c3cad99fd99bf3fe61d916f';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
import Pagination from './pagination.js';
import API from './api-service.js';
import { addCurrrentMoviesToLocalStorage } from './local-storage';

const refs = {
  containerBox: document.querySelector(`.main-container--card__box`),
  containerCard: document.querySelector(`.main-container--card`),
};

const containerBox = document.querySelector(`.main-container--card__box`);

const apiService = new API();
const pagination = new Pagination();

getPopularMovie();

// Фун-ия, которая берет и передает данные по апи, имеет первый! параметр page = false. После параметра page можете передавать свои.
function getPopularMovie(page = false) {
  const queryPage = page ? page : 1; // Проверка страниц, обязательно до fetch
  apiService.setPageNumber = queryPage; // Передает текущую страницу в класс api

  apiService.fetchPopularMovie().then(data => {
    pagination.setCurrentPage = queryPage; // Передает страницу в пагинатор
    pagination.setTotalPages = data.total_pages; // Передает общее кол-во страниц в пагинатор
    pagination.setCallback = getPopularMovie; // Передает ссылку на коллбэк функцию
    pagination.renderPagination(); // Вызов пагинации

    renderFilmList(data.results);
  });
}

const searchFilms = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  renderFilmList(response.data.results);
  // console.log(response.data.results);
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
  // console.log(array)

  if (array.length > 2) {
    return `${array[0]}, ${array[1]}, Other`;
  }
  return `${array[0]}, ${array[1]}`;
}

function renderFilmList(films) {
  const markup = films
    .map(film => {
      // console.log(film)
      return `
        <li class="main-container--card">
            <img
            class="film-poster"
            src="${
              film.poster_path === null
                ? './no_image.jpg'
                : `https://image.tmdb.org/t/p/w500${film.poster_path}`
            }" 
                alt="${film.original_title}"
                loading="lazy">
            <p class="film-info">
            <h2 class="film-title">${film.original_title.toUpperCase()}</h2>
            <p class="more-info"> ${transformId(
              film.genre_ids
            )} | ${film.release_date.slice(0, 4)}</p>
            </p>
        </li>
      `;
    })
    .join('');
  refs.containerBox.innerHTML = markup;
}
