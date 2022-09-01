import axios from 'axios';
const API_KEY = '2994e3a31c3cad99fd99bf3fe61d916f';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
import Pagination from './pagination.js';
import API from './api-service.js';
import { addCurrrentMoviesToLocalStorage } from './local-storage';
import { preloaderShow, preloaderShowLonger, hidePreloader } from './loader';
// import { renderFilmList } from './create-markup';

const refs = {
  containerBox: document.querySelector(`.main-container--card__box`),
  containerCard: document.querySelector(`.main-container--card`),
};

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




// function renderFilmList (films){
//   const markup = films.map(film => {
//       return `
//         <li class="main-container--card">
//             <img
//             class="film-poster"
//             src="${
//               film.poster_path === null
//                 ? './no_image.jpg'
//                 : `https://image.tmdb.org/t/p/w500${film.poster_path}`
//             }" 
//                 alt="${film.original_title}"
//                 loading="lazy" data-id="${film.id}">
//             <p class="film-info">
//             <h2 class="film-title" data-id="${
//               film.id
//             }">${film.original_title.toUpperCase()}</h2>
//             <p class="more-info"> ${transformId(
//               film.genre_ids
//             )} | ${film.release_date.slice(0, 4)}</p>
//             </p>
//         </li>
//       `;
//     })
//     .join('');
//   refs.containerBox.innerHTML = markup;
// }


// =============================================================================================================================


// import refs from "./refs";
// import { addCurrrentMoviesToLocalStorage } from "./local-storage"



// const IMG_URL = "https://image.tmdb.org/t/p/w500"




///////////// --функція для створення карток популярних фільмів на головну сторінку----///////
function renderFilmList(films) {
  refs.containerBox.innerHTML = '';

    const markup = films
      .map((film) => {
            let date = film.release_date ?? film.first_air_date ?? null;
            date = (date !== null) ? date.slice(0, 4) : '';
            
            let posterPath = ``
            if(film.poster_path){posterPath=`${IMG_URL}${film.poster_path}`}
            else{posterPath="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"}

            return `
            <li class="main-container--card"
        data-modal-open>
        <img class="card-poster"
        data-id="${film.id}" 
        src='${posterPath}'
        alt="${film.original_name}" loading="lazy">
        <div class="card-wrap">
        <h2 class="card-title" data-id="${film.id}">${film.original_title.toUpperCase() || film.title.toUpperCase()}</h2>
        <p class="card-info"> ${transformId(film.genre_ids)} | ${date} </p>
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
          let date = film.release_date ?? film.first_air_date ?? null;
          date = (date !== null) ? date.slice(0, 4) : '';

        if (!film.poster_path) {
          return `
        <li class="main-container--card"
        data-modal-open>
          <img class="card-poster"
        data-id="${film.id}" 
        src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" >
        <div class="card-wrap">
        <h2 class="card-title" data-id="${film.id}">${film.original_title.toUpperCase() || film.title.toUpperCase() || film.title.toUpperCase()}</h2>
        <p class="card-info"> ${transformId(film.genre_ids)} | ${date} <span class="card-rating"> ${film.vote_average.toFixed(1)}</span></p>
         </div>
    </li>`;
        };        

        return `
        <li class="main-container--card"
        data-modal-open>
          <img class="card-poster"
        data-id="${film.id}" 
        src="${IMG_URL}${film.poster_path}" 
        alt="${film.original_name}" loading="lazy">
        <div class="card-wrap">
        <h2 class="card-title" data-id="${film.id}">${film.original_title.toUpperCase() || film.title.toUpperCase() || film.title.toUpperCase()}</h2>
        <p class="card-info"> ${transformId(film.genre_ids)} | ${date} <span class="card-rating"> ${film.vote_average.toFixed(1)}</span></p>
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
  // console.log(array)

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


// import refs from "./refs";
// import { addCurrrentMoviesToLocalStorage } from "./local-storage";


// const IMG_URL = "https://image.tmdb.org/t/p/w500";




// ///////////// --функція для створення карток популярних фільмів на головну сторінку----///////
// function renderFilmList(films) {
//     const markup = films
//         .map((film) => {
//         console.log(film)
//             return `
//             <li class="main-container--card"
//         data-modal-open>
//         <img class="card-poster"
//         data-id="${film.id}" 
//         src="${film.poster_path === null ? './no_image.jpg'
//               : `${IMG_URL}${film.poster_path}`
//           }"
//         alt="${film.original_name}" loading="lazy">
//         <div class="card-wrap">
//         <h2 class="card-title" data-id="${film.id}">${film.original_title.toUpperCase() || film.title.toUpperCase() || film.title.toUpperCase()}</h2>
//         <p class="card-info"> ${transformId(film.genre_ids)} | ${(film.release_date || first_air_date).slice(0,4)} </p>
//          </div>
//     </li>`;
//         }).join("");
// refs.containerBox.innerHTML = markup;
// }

// export {renderFilmList};

// ///////////// --функція для створення карток  фільмів в MY LIBRARY----///////
// function renderMoviesCard(films) {
//     const filmCards = films
//     .map((film) => {
//         return `
//         <li class="main-container--card"
//         data-modal-open>
//         <img class="card-poster"
//         data-id="${film.id}" 
//         src="${IMG_URL}${film.poster_path}" 
//         alt="${film.original_name}" loading="lazy">
//         <div class="card-wrap">
//         <h2 class="card-title" data-id="${film.id}">${film.original_title.toUpperCase() || film.title.toUpperCase() || film.title.toUpperCase()}</h2>
//         <p class="card-info"> ${transformId(film.genre_ids)} | ${(film.release_date || first_air_date).slice(0,4)} <span class="card-rating"> ${film.vote_average.toFixed(1)}</span></p>
//          </div>
//     </li>`;
//         }).join("");
    
//     refs.moviesContainer.insertAdjacentHTML('beforeend', filmCards);
    
// };

// export {renderMoviesCard};


// ///////////// --функція для створення списку жанрів----///////
// function transformId ([...arr]) {
//     const g = localStorage.getItem("GENRES");
//     const genres = JSON.parse(g);
//     let genreName;
//     const array = [...arr]
//     for (let i = 0; i < genres.length; i++) {
//         for (let x = 0; x < array.length; x++) {
//             if (array[x] === genres[i].id) {
//                 genreName = genres[i].name;
//                 array[x] = genreName
//             };
//         };
//     };
//      if (array.length > 2) {
//         return `${array[0]}, ${array[1]}, Other`
//     }
//     return `${array[0]}, ${array[1]}`
// };
