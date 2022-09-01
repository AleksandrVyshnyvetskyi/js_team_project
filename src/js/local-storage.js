import refs from "./refs";

export default class LocalStorage { 
    constructor(){ 
        this.watched = [];
        this.queue = [];
    }

    addToLSwathced(key) { 
      localStorage.setItem(key, JSON.stringify(this.watched));
    }


   addToLSqueue (key) { 
      localStorage.setItem(key, JSON.stringify(this.queue));
    }
    
};

export function addCurrrentMoviesToLocalStorage(array) { 
localStorage.setItem("MOVIE_LIST", JSON.stringify(array))
};


