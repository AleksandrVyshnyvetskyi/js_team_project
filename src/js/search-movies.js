import API from './api-service';

const refs = {
    searchForm: document.querySelector('.header_input-wrap'),
    moviesContainer: document.querySelector('.main-container--card__box'),
    errorText: document.querySelector('.header_error-msg'),
};


refs.searchForm.addEventListener('submit', onSearch);

async function onSearch(event) {
    event.preventDefault();

     searchQuery = event.currentTarget.elements.searchQuery.value.trim();

    refs.errorText.classList.add('is-hidden');
    

    if (searchQuery === '') {
        return refs.errorText.classList.remove('is-hidden');
    };

    try {
        const movies = await API.fetchMovies(searchQuery);

        if (movies.total_pages === 0) {
             return refs.errorText.classList.remove('is-hidden');
        };

        clearMoviesContainer();
        refs.errorText.classList.add('is-hidden');
        renderMoviesCard(movies.results);
        
    } catch (error) { console.log(error) };
}

//Замінити наступну функцію

function renderMoviesCard(results) {

    const markup = results
        .map(el => {
            return `
            <li class="main-container--card">
            ${el.poster_path
            ? `<img src = "https://image.tmdb.org/t/p/w500${el.poster_path}"`
            : `< img src = "https://europix.cc/no-poster.png"`
            }
            class = "movie-card__poster"
            alt="${el.title}" loading="lazy"
             />
            <h3 class="movie-card__title">${el.title}</h3>
            <h4 class="movie-card__genres">${el.genre_ids}<h4>
            <h5 class="movie-card__date">${el.release_date.slice(0,4)}</h5>
            </li> `
        })
        .join('');
    
    refs.moviesContainer.insertAdjacentHTML('beforeend', markup);
};


function clearMoviesContainer() {
  refs.moviesContainer.innerHTML = '';
}