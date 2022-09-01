import refs from "./refs";

const MOVIE_LIST_KEY = "MOVIE_LIST";
const WATCHED_LIST_KEY = "WATCHED_LIST"; 
const QUEUE_LIST_KEY = "QUEUE_LIST";

let watchedArray = [];
let queueArray = [];
localStorage.setItem(WATCHED_LIST_KEY, JSON.stringify(watchedArray));
localStorage.setItem(QUEUE_LIST_KEY, JSON.stringify(queueArray));

export function addListener(filmId) { 
    const btnAddWatched = document.querySelector("[data-addwatched]");
    const btnRemoveWatched = document.querySelector("[data-removewatched]");

    const btnAddQueue = document.querySelector("[data-addqueue]");
    const btnRemoveQueue = document.querySelector("[data-removequeue]");

    const isMovieinWatchedList = movietoWatchedList(filmId);
    const isMovieinQueueList = movietoQueueList(filmId);

    if (isMovieinWatchedList) {
        btnAddWatched.classList.add("is-hidden");
        btnRemoveWatched.classList.remove("is-hidden");
        btnRemoveWatched.addEventListener("click", onRemoveWathedClick);
    }
    else { 
           btnAddWatched.addEventListener("click", onAddWathedClick);
    }

     if (isMovieinQueueList) {
        btnAddQueue.classList.add("is-hidden");
        btnRemoveQueue.classList.remove("is-hidden");
        btnRemoveQueue.addEventListener("click", onRemoveQueueClick);
    }
    else { 
           btnAddQueue.addEventListener("click", onAddQueueClick);
    }
    function onAddQueueClick(e) { 
        console.log("hi");

        e.preventDefault();
        const film = getObjectbyId(filmId);
        if (!isMovieinQueueList) { 
            queueArray.push(film); 
            btnAddQueue.classList.add("is-hidden");
            btnRemoveQueue.classList.remove("is-hidden");   
            btnRemoveQueue.addEventListener("click", onRemoveQueueClick);
            
        }
        localStorage.setItem(QUEUE_LIST_KEY, JSON.stringify(queueArray));

    }

    function onRemoveQueueClick(e) {

        btnAddQueue.classList.remove("is-hidden");
        btnRemoveQueue.classList.add("is-hidden");
        btnAddQueue.addEventListener("click", onAddQueueClick);
       
        const film = getObjectbyId(filmId);
        const queue_list = localStorage.getItem(QUEUE_LIST_KEY);
        const queue_list_array = JSON.parse(queue_list);
        const indexFilm = queue_list_array.findIndex(fil => fil.id === film.id);
        queueArray.splice(indexFilm, 1);
        localStorage.setItem(QUEUE_LIST_KEY, JSON.stringify(queueArray));
    }


    
    function onAddWathedClick(e) { 
        e.preventDefault();
        const film = getObjectbyId(filmId);
        if (!isMovieinWatchedList) { 
            watchedArray.push(film); 
            btnAddWatched.classList.add("is-hidden");
            btnRemoveWatched.classList.remove("is-hidden");   
            btnRemoveWatched.addEventListener("click", onRemoveWathedClick);
            
        }
        localStorage.setItem(WATCHED_LIST_KEY, JSON.stringify(watchedArray));
        
    };
    
    function onRemoveWathedClick(e) {

        btnAddWatched.classList.remove("is-hidden");
        btnRemoveWatched.classList.add("is-hidden");
        btnAddWatched.addEventListener("click", onAddWathedClick);
       
        const film = getObjectbyId(filmId);
        const watched_list = localStorage.getItem(WATCHED_LIST_KEY);
        const watched_list_array = JSON.parse(watched_list);
        const indexFilm = watched_list_array.findIndex(fil => fil.id === film.id);
        watchedArray.splice(indexFilm, 1);
        localStorage.setItem(WATCHED_LIST_KEY, JSON.stringify(watchedArray));
    }


}
// movietoWatchedList  --- movieObjectOfWatchedList
function movietoWatchedList (filmid) {
// проеверяю есть ли фильи в локал сторадже 
  const watched_list = localStorage.getItem(WATCHED_LIST_KEY);
  const watched_list_array = JSON.parse(watched_list);
  return watched_list_array.find(f => f.id === filmid);
  
}; 

// movietoWatchedList  --- movieObjectOfQueueList
  
function movietoQueueList(filmid) {
 const queue_list = localStorage.getItem(QUEUE_LIST_KEY);
  const queue_list_array = JSON.parse(queue_list);
  return queue_list_array.find(f => f.id === filmid);
 }


 function getObjectbyId(filmId) { 
     const movie_list = localStorage.getItem(MOVIE_LIST_KEY)
    const array = JSON.parse(movie_list)
    let objectMovie = array.find(films => films.id === filmId);
    return objectMovie;
 }



//  ==========================================21:34====================================
// import LocalStorage from './local-storage'

// const MOVIE_LIST_KEY = "MOVIE_LIST";
// const WATCHED_LIST_KEY = "WATCHED_LIST"; 
// const QUEUE_LIST_KEY = "QUEUE_LIST";

// const localStor = new LocalStorage;
// let watchedArray = localStor.watched;
// let queueArray = localStor.queue;


// export function addWathcedListener(filmId) {

//     const btnAddWatched = document.querySelector("[data-addwatched]");
//     const btnRemoveWatched = document.querySelector("[data-removewatched]");

//     const isList = localStorage.getItem(WATCHED_LIST_KEY);
//     const isMovieinWatchedList = movieOfWatchedList(filmId);


//     if (!isList) {
//         console.log("нету");
//         btnAddWatched.addEventListener("click", onAddWathedClick);
//     }
//     else if (isMovieinWatchedList) {
//         btnAddWatched.classList.add("is-hidden");
//         btnRemoveWatched.classList.remove("is-hidden");
//         btnRemoveWatched.addEventListener("click", onRemoveWathedClick);
//     }
//     else { btnAddWatched.addEventListener("click", onAddWathedClick); }


//     function onAddWathedClick(e) {
//         e.preventDefault();
//         const film = getObjectbyId(filmId);
//         if (!isMovieinWatchedList || !isList) {
//             localStor.addToLSwathced(WATCHED_LIST_KEY);
//             watchedArray.push(film);
//             btnAddWatched.classList.add("is-hidden");
//             btnRemoveWatched.classList.remove("is-hidden");
//             btnRemoveWatched.addEventListener("click", onRemoveWathedClick);

//         }
//         localStor.addToLSwathced(WATCHED_LIST_KEY);


//     };

//     function onRemoveWathedClick(e) {

//         btnAddWatched.classList.remove("is-hidden");
//         btnRemoveWatched.classList.add("is-hidden");
//         btnAddWatched.addEventListener("click", onAddWathedClick);

//         const film = getObjectbyId(filmId);
//         const watched_list = localStorage.getItem(WATCHED_LIST_KEY);
//         const watched_list_array = JSON.parse(watched_list);
//         const indexFilm = watched_list_array.findIndex(fil => fil.id === film.id);
//         watchedArray.splice(indexFilm, 1);
//         localStorage.setItem(WATCHED_LIST_KEY, JSON.stringify(watchedArray));
//     }

// }
//     export  function addQueueListener(filmId) {

//         const btnAddQueue = document.querySelector("[data-addqueue]");
//         const btnRemoveQueue = document.querySelector("[data-removequeue]");

//         const isMovieinQueueList = movieOfQueueList(filmId);
//         const isList = localStorage.getItem(QUEUE_LIST_KEY);


//         if (!isList) {
//             btnAddQueue.addEventListener("click", onAddQueueClick);
//         }
//         else if (isMovieinQueueList) {
//             btnAddQueue.classList.add("is-hidden");
//             btnRemoveQueue.classList.remove("is-hidden");
//             btnRemoveQueue.addEventListener("click", onRemoveQueueClick);
//         }
//         else {
//             btnAddQueue.addEventListener("click", onAddQueueClick);
//         }
        
//         function onAddQueueClick(e) {
//             e.preventDefault();
//             const film = getObjectbyId(filmId);

//             if (!isMovieinQueueList || isList) {
//                 localStor.addToLSqueue(QUEUE_LIST_KEY);
//                 queueArray.push(film);
//                 btnAddQueue.classList.add("is-hidden");
//                 btnRemoveQueue.classList.remove("is-hidden");
//                 btnRemoveQueue.addEventListener("click", onRemoveQueueClick);
//             }
//             localStor.addToLSqueue(QUEUE_LIST_KEY);
            
//         }
//     }

// function movieOfWatchedList(filmid) {
//     const watched_list = localStorage.getItem(WATCHED_LIST_KEY);
//     if (!watched_list) {
//         return null;
//     }
//       else {
//     const watched_list_array = JSON.parse(watched_list);
//    return watched_list_array.find(f => f.id === filmid);
//      }
// }; 

// function movieOfQueueList(filmid) {
//     const queue_list = localStorage.getItem(QUEUE_LIST_KEY);
//     if (!queue_list) {
//         return null;
//     } else { 
//          const queue_list_array = JSON.parse(queue_list);
//         return queue_list_array.find(f => f.id === filmid); 
//             }
// };

// function getObjectbyId(filmId) { 
//      const movie_list = localStorage.getItem(MOVIE_LIST_KEY)
//     const array = JSON.parse(movie_list)
//     let objectMovie = array.find(films => films.id === filmId);
//     return objectMovie;
//     };
