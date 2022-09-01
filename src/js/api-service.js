export default class API { 
    constructor() {
        this.BASE_URL = "https://api.themoviedb.org/3/";
        this.API_KEY = "api_key=2994e3a31c3cad99fd99bf3fe61d916f";
        this.id = 500;
        this.pageNumber = 1;
        this.searchQuery = "";  

    }
// ====================================================================================================================
   async fetchPopularMovie() {
    try {
        const response = await fetch(`${this.BASE_URL}trending/movie/day?${this.API_KEY}&page=${this.pageNumber}`);
            if (response.status !== 404) {
            const data = await response.json();
            return data;
        }
        } catch (error) {
            console.log(error);
        }
    }
//             if(response.ok) {
//                    const data = response.then((r) => r.json());
//                    return data;
//             } if else (!response.ok){
//                console.log(response.status);
//                 }
//             return response.json();
//          }
//          catch(error => {
//            console.log(error)
//            }
  
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });
    


//     async fetchSearchMovie() { 
//          const response = fetch(`${this.BASE_URL}search/movie?${this.API_KEY}&query=${this.searchQuery}&page=${this.pageNumber}`)
         
//          const data = response.then((r) => r.json());
        
//         return data;  
//     }

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

    set setPageNumber(pageNumber) { 
        this.pageNumber = pageNumber;
    }

}


