export default class API { 
    constructor() {
        this.BASE_URL = "https://api.themoviedb.org/3/";
        this.API_KEY = "api_key=2994e3a31c3cad99fd99bf3fe61d916f&";
        this.id = 500;
        this.pageNumber = 1;
        this.searchQuery = "";  

    }

    async fetchPopularMovie() { 

        const response = fetch(`${this.BASE_URL}trending/movie/day?${this.API_KEY}`)
        const data = response.then((r) => r.json());
        return data;
    }
    


     async fetchSearchMovie() { 
        const response = fetch(`https://api.themoviedb.org/3//movie/5?${this.API_KEY}`)
        const data = response.then((r) => r.json());
        return data;  
    }

    get inputQuery () {
        return this.query;
     }
    
    set inputQuery (newQuery) { 
        this.searchQuery = newQuery;
    }

    incrementpage() {
        this.pageNumber += 1;
    }

    resetPage() { 
        this.pageNumber = 1;
    }

}


