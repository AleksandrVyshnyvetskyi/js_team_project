import refs from "./refs";

function addCurrrentMoviesToLocalStorage(array) { 
localStorage.setItem("MOVIE_LIST", JSON.stringify(array))
};


export { addCurrrentMoviesToLocalStorage };