import refs from "../refs";

refs.watchedList.addEventListener("click", onWathedListClick);

function onWathedListClick(evt) { 
    evt.preventDefault();
    refs.queueList.classList.remove("current-btn")
    refs.watchedList.classList.add("current-btn")
    // const moviesWarched = localStorage.getItem("WATCHED").parse();
    // renderFilmList(moviesWarched);
    // let currentMovie = moviesWarched.find(movie => movie.id === currentMovieID);
    // берем значения из лс watched и рендерим разметку 
    // при открытии модалки должен фиксироваться ID текущего фильма 
}



// let cities = [{ id: 121, name: 'г. Урюпинск' }, { id: 122, name: 'г. Париж' }, { id: 123, name: 'г. Москва' }, { id: 124, name: 'г. Штормград' }];
// let searchTerm = 'г. Москва';
// let cityId = cities.find(city => city.name === searchTerm).id
// console.log(cityId);

