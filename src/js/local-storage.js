import refs from "./refs";

function addCurrrentMoviesToLocalStorage(array) { 
localStorage.setItem("MOVIE_LIST", JSON.stringify(array))
};


export { addCurrrentMoviesToLocalStorage };


// export function addCurrrentMoviesToLocalStorage(array) { 
// localStorage.setItem("MOVIE_LIST", JSON.stringify(array))
// }

// export default class LocalStorage { 
//     constructor(){ 
//         this.watched = [];
//         this.queue = [];
//     }

//     addToLSwathced(key) { 
//       localStorage.setItem(key, JSON.stringify(this.watched));
//     }
//    addToLSqueue (key) { 
//       localStorage.setItem(key, JSON.stringify(this.queue));
//     }

// };



