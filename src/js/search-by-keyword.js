import { renderFilmList } from "./fetch-films-main.js"
import { preloaderShow, preloaderShowLonger, hidePreloader } from './loader';
import { addCurrrentMoviesToLocalStorage } from "./local-storage";
import Pagination from './pagination.js';
import API from './api-service.js';
import refs from './refs';

/////////////////винесено в refs
// const refs = {
//     searchForm: document.querySelector('.header_input-wrap'),
//     inputEl: document.querySelector('.header_input'),
//     moviesContainer: document.querySelector('.main-container--card__box'),
//     errorText: document.querySelector('.header_error-msg'),
// };

const apiService = new API;
const pagination = new Pagination;

///////винесено в api-service
// let searchQuery = '';

// const BASE_URL = `https://api.themoviedb.org/3/search/movie`;
// const KEY = `2994e3a31c3cad99fd99bf3fe61d916f`;

// async function fetchSearchMovie(searchQuery) {
//     return await axios.get(`${BASE_URL}?api_key=${KEY}&language=en-US&query=${searchQuery}`)
//         .then(response => response.data);
// }
///////////

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
    
    event.preventDefault();
    apiService.inputQuery = event.currentTarget.elements.query.value.trim();

    if (refs.inputEl.value === "") {
         return refs.errorText.classList.remove('is-hidden');
    }
    
    // console.log(searchQuery);
    refs.errorText.classList.add('is-hidden');
   
    getSearchMovie();
    preloaderShow();
    refs.inputEl.value = "";
}

async function getSearchMovie(page = false) {
    
    const queryPage = page ? page : 1; // Проверка страниц, обязательно до fetch
    apiService.setPageNumber = queryPage; // Передает текущую страницу в класс api

    try {
        await apiService.fetchSearchMovie().then(data => {
          if (data.total_pages === 0) {
             return refs.errorText.classList.remove('is-hidden');
           };
            pagination.setCurrentPage = queryPage; // Передает страницу в пагинатор
            pagination.setTotalPages = data.total_pages; // Передает общее кол-во страниц в пагинатор
            pagination.setCallback = getSearchMovie; // Передает ссылку на коллбэк функцию 
            pagination.renderPagination(); // Вызов пагинации
            
            refs.errorText.classList.add('is-hidden');
            
            renderFilmList(data.results);
            addCurrrentMoviesToLocalStorage(data.results);
            // console.log(data.total_pages);
        });      
    } catch (error) {
        console.log(error)
    } finally {
       hidePreloader();
    }
    
}

///////////// --функція перенесена в файл create-markup----///////
// function renderMoviesCard(results) {
//     const markup = results
//         .map(el => {
//             return `
//             <li class="main-container--card">
//             <img src = "https://image.tmdb.org/t/p/w500${el.poster_path}"
//             class = "film-poster"
//             alt="${el.original_title}" loading="lazy"
//              />
//             <div class="film-info">
//             <h3 class="film-title">${el.original_title.toUpperCase()}</h3>
//             <p class="more-info">${transformId(el.genre_ids)} | ${el.release_date.slice(0, 4)}</p>
//             </div>
//             </li> `
//         })
//         .join('');
    
//     refs.moviesContainer.insertAdjacentHTML('beforeend', markup);
// };

///////////// --функція перенесена в файл create-markup----///////
// function transformId ([...arr]) {
//     const g = localStorage.getItem("GENRES");
//     const genres = JSON.parse(g);
//     let genreName;
//     const array = [...arr]
//     for (let i = 0; i < genres.length; i++) {
//         for (let y = 0; y < array.length; y++) {
//             if (array[y] === genres[i].id) {
//                 genreName = genres[i].name;
//                 array[y] = genreName
//             };
//         };
//     };
//     // console.log(array)
//     if (array.length > 3) {
//         return `${array[0]}, ${array[1]}, Other`
//     } else if (array.length > 2) {
//         return `${array[0]}, ${array[1]}, ${array[2]}`
//     } else if (array.length > 1) {
//         return `${array[0]}, ${array[1]}`
//     }
//     return `${array[0]}`
// };


