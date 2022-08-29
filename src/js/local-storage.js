import refs from "./refs";

 function addCurrrentMoviesToLocalStorage (array) { 
localStorage.setItem("MOVIE_LIST", JSON.stringify(array))
};


// btnAddWatched.addEventListener("click", onAddWatchedClick)
// btnQueue.addEventListene("click", onQueueClick)

// const watched_movie = [];
// const queue_movie = [];

// function addWatchedFilmtoLocalStorage (film ){
//     localStorage.setItem("WATCHED", JSON.stringify(film))
// }
// function addQueueFilmtoLocalStorage (film ){
//     localStorage.setItem("QUEUE", JSON.stringify(film))
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