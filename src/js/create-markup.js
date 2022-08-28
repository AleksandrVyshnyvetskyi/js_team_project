import refs from "./refs";

//------- НАБРОСОК РЕНДЕР ГАЛЕРЕИ

function createContent(array) { 
    return array.reduce((acc, arr) => acc + createCard(arr), "");
}

function createCard(item, genre) {
    const url = "https://image.tmdb.org/t/p/w500";
    const { poster_path, title, original_title, original_name, release_date, first_air_date} = item;

 let moviePoster = `${url}${poster_path}`;
   
    if (!poster_path) {
        moviePoster = posterNotFound;
    }

    return `<li class="collection__item">
            <img class="film-card__img" src="${moviePoster}" loading="lazy" alt="${title || original_title || original_name}"/>
         <div class="film-card__wrap">
            <a href="">
                <h2 class="film-card__title">${title || original_title || original_name}</h2>
            </a>
            <p class="films-list__genres"> /Ganre from local storage/ | ${(release_date || first_air_date).slice(0,4)}</p>
            
        </div>
    
  </li>`
}


function appendGallery(films) { 
    const markup = createContent(films.results);
    refs.galleryHome.insertAdjacentHTML("beforeend", markup);
    addCurrrentMoviesToLocalStorage(films.results);
}

export {appendGallery};

