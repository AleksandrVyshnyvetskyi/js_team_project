///////////// --функція для створення карток  фільмів в MY LIBRARY----///////
import refs from './refs';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';


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
      src="${film.poster_path ? `${IMG_URL}${film.poster_path}` : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"}"
      alt="${film.original_name}" loading="lazy">
      <div class="card-wrap">
      <h2 class="card-title" data-id="${film.id}">${film.original_title.toUpperCase() || film.title.toUpperCase()}</h2>
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
  