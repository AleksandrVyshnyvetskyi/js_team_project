import axios from "axios";
import { renderMoviesCard } from "./create-markup"


const refs = {
    searchForm: document.querySelector('.header_input-wrap'),
    inputEl: document.querySelector('.header_input'),
    moviesContainer: document.querySelector('.main-container--card__box'),
    errorText: document.querySelector('.header_error-msg'),
};

///////Буде винесено в інший файл
let searchQuery = '';

const BASE_URL = `https://api.themoviedb.org/3/search/movie`;
const KEY = `2994e3a31c3cad99fd99bf3fe61d916f`;

async function fetchSearchMovie(searchQuery) {
    return await axios.get(`${BASE_URL}?api_key=${KEY}&language=en-US&query=${searchQuery}`)
        .then(response => response.data);
}
///////////

refs.searchForm.addEventListener('submit', onSearch);

async function onSearch(event) {
    event.preventDefault();

    searchQuery = event.currentTarget.elements.query.value.trim();
    // console.log(searchQuery);

    refs.errorText.classList.add('is-hidden');
    

    if (searchQuery === '') {
        return refs.errorText.classList.remove('is-hidden');
    };
   
    try {
        const movies = await fetchSearchMovie(searchQuery);

        if (movies.total_pages === 0) {
             return refs.errorText.classList.remove('is-hidden');
        };

        clearMoviesContainer();
        refs.errorText.classList.add('is-hidden');
        renderMoviesCard(movies.results);
        addCurrrentMoviesToLocalStorage (movies.results) 
        console.log(movies.results);
        
    } catch (error) { console.log(error) };

    refs.inputEl.value = "";
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


function clearMoviesContainer() {
  refs.moviesContainer.innerHTML = '';
}

