// import refs from "./refs";

function addCurrrentMoviesToLocalStorage (array) { 
localStorage.setItem("movie_list", JSON.stringify(array))
};


// const btnAddWatched = document.querySelector("какой-токлас")
// const btnQueue = document.querySelector("какой-токлас")
// btnAddWatched.addEventListener("click", onAddWatchedClick)
// btnQueue.addEventListene("click", onQueueClick)

// const watched_movie = [];
// const queue_movie = [];

// function addWatchedFilmtoLocalStorage (film ){
//     localStorage.setItem("watched", JSON.stringify(film))
// }
// function addQueueFilmtoLocalStorage (film ){
//     localStorage.setItem("queue", JSON.stringify(film))
// }
 
// function onAddWatchedClick(evt) {
//     film.push(обьект фильма)
//     addWatchedFilmtoLocalStorage(обьект фильма)
// };
 
// function onQueueClick(evt) { 
//     film.push(обьект фильма)
//     addWatchedFilmtoLocalStorage(обьект фильма)
// };


export { addCurrrentMoviesToLocalStorage };