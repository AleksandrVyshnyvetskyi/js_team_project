// import Pagination from './pagination.js';
// import { renderMoviesCard } from "./create-markup"

// const pagination = new Pagination;

// const refs = {
//     watched: document.querySelector('.js-button-watched'),
//     queue: document.querySelector('.js-button-queue'),
//     containerMovie: document.querySelector('.main-container--card__box'),
//     emptyPage: document.querySelector('.empty_page'),
// };

// const getMovieStorage = localStorage.getItem('MOVIE_LIST');
// const totalMovieElements = JSON.parse(getMovieStorage);
// const countElpage = 10;
// let totalMoviePages = 0;

// refs.watched.addEventListener('click', onWatchedClick);
// // refs.queue.addEventListener('click', onQueueClick);


// if (totalMovieElements.length < 1) { 
//   return refs.emptyPage.classList.add('visible');
// }




// function onWatchedClick(e) {
//   e.preventDefault();
//   refs.watched.classList.add('current-btn');
//   refs.queue.classList.remove('current-btn');
    
//   if (totalMovieElements) {
//     try {
//       paginationLibrary()
//     } catch (e) {
//       console.log(e);
//     }
//   } else { 
//     return refs.emptyPage.classList.add('visible');
//   }

  
 
  
// }


// function paginationLibrary(page = false) { 
//   const queryPage = page ? page : 1; 
//   const partMovie = [];

//   if (totalMoviePages > 1) { 
//     for (let i = 1; i <= Math.ceil(totalMovieElements.length / countElpage); i += 1) { 
//         let end = (countElpage * i);
//         let start = i > 1 ? (countElpage * (i - 1)) : 0;
//         if ((countElpage * i) > totalMovieElements.length) { 
//           end = totalMovieElements.length;
//         }

//         partMovie[i] = (totalMovieElements.slice(start, end))
//     }
    
//     totalMoviePages = partMovie.length - 1;
  
  
//     renderMoviesCard(partMovie[queryPage])

//     pagination.setCurrentPage = queryPage;
//     pagination.setTotalPages = totalMoviePages; 
//     pagination.setCallback = pagLibrary; 
//     pagination.renderPagination(); 
      
//   }
  
// }






// // function getPopularMovie(page = false) { 
// //     const queryPage = page ? page : 1; // Проверка страниц, обязательно до fetch
// //     apiService.setPageNumber = queryPage; // Передает текущую страницу в класс api

// //     apiService.fetchPopularMovie().then(data => {

// //         pagination.setCurrentPage = queryPage; // Передает страницу в пагинатор
// //         pagination.setTotalPages = data.total_pages; // Передает общее кол-во страниц в пагинатор
// //         pagination.setCallback = getPopularMovie; // Передает ссылку на коллбэк функцию 
// //         pagination.renderPagination(); // Вызов пагинации

// //         renderFilmList(data.results); 
// //     }
        
// // );
// // }


// // const refs = {
// //     watched: document.querySelector('.js-button-watched'),
// //     queue: document.querySelector('.js-button-queue'),
// //     container: document.querySelector('.films__list'),
// // };
// // let data = {
// //   page: 1,
// //   results: [],
// // };

// // let queueKey;
// // let watchedKey;
// // let isActiveKey;

// // refs.watched.addEventListener('click', onWatchedClick);
// // refs.queue.addEventListener('click', onQueueClick);

// // function onWatchedClick(e) {
// //   e.preventDefault();
// //   refs.watched.classList.add('header__button--active');
// //   refs.queue.classList.remove('header__button--active');
// //   // localStorage.setItem('isActive', 'watched'); // Необходимо сверить название класса просмотренных фильмов
// //   watchedKey = localStorage.getItem('MOVIE_LIST'); // Необходимо сверить название класса просмотренных фильмов

  
// //   if (watchedKey) {
// //     try {
// //       data = JSON.parse(watchedKey);
// //       console.log(data)
// //     } catch (e) {
// //       console.log(e);
// //     }
// //   }
// //   markup(data);
// // }

// // function onQueueClick(e) {
// //   e.preventDefault();
// //   refs.queue.classList.add('link-current');
// //   refs.watched.classList.remove('link-current');
// //   localStorage.setItem('isActive', 'queue'); // Необходимо проверить название класса фильмов из очереди
// //   queueKey = localStorage.getItem('queue'); // Необходимо проверить название класса фильмов из очереди
// //   if (queueKey) {
// //     try {
// //       data = JSON.parse(queueKey);
// //     } catch (e) {
// //       console.log(e);
// //     }
// //   }
// //   markup(data);
// // }

// // function libraryMarkup() {
// // //   refs.paginationList.style.display = 'none';
// //   localStorage.setItem('isActive', 'watched');
// //   isActiveKey = localStorage.getItem('isActive');

// //   if (isActiveKey) {
// //     if (isActiveKey === 'queue') {
// //       refs.queue.classList.add('header__button--active');
// //       refs.watched.classList.remove('header__button--active');
// //       queueKey = localStorage.getItem('queue');
// //       if (queueKey) {
// //         try {
// //           data = JSON.parse(queueKey);
// //         } catch (e) {
// //           console.log(e);
// //         }
// //       } else {
// //         localStorage.setItem('queue', JSON.stringify(data));
// //       }
// //     } else {
// //       refs.watched.classList.add('header__button--active');
// //       refs.queue.classList.remove('header__button--active');
// //       watchedKey = localStorage.getItem('watched');
// //       if (watchedKey) {
// //         try {
// //           data = JSON.parse(watchedKey);
// //         } catch (e) {
// //           console.log(e);
// //         }
// //       } else {
// //         localStorage.setItem('watched', JSON.stringify(data));
// //       }
// //     }
// //   } else {
// //     isActiveKey = 'watched';
// //     localStorage.setItem('isActive', isActiveKey);
// //     refs.watched.classList.add('header__button--active');
// //     refs.queue.classList.remove('header__button--active');
// //     localStorage.setItem('watched', JSON.stringify(data));
// //     localStorage.setItem('queue', JSON.stringify(data));
// //   }

// //   markup(data);
// // }

// // function markup(data) {
// //   refs.container.innerHTML = '';

// //   const markup = data
// //     .map((d) => {
// //       return `
// //         <li class="films__item">
// //             <img class="films__poster" src="https://image.tmdb.org/t/p/w500${d.poster_path}" alt="${d.original_title}" loading="lazy">
// //             <div class="films__info">
// //               <h2 class="films__title">${d.original_title.toUpperCase()}</h2>
// //               <p class="films__more-info"> ${transformId(d.genre_ids)} | ${d.release_date.slice(0, 4)}</p>
// //             </div>
// //         </li>`});
  


// //   refs.container.insertAdjacentHTML(
// //     'beforeend', markup);
 

// //   if (data.length > 0) {
// //     // galleryArrayMarkup(data);
// //     // modalOpenOnClick();
// //   } else {
    
// //   }
// // }

// // function transformId ([...arr]) {
// //     const g = localStorage.getItem("GENRES");
// //     const genres = JSON.parse(g);
// //     let genreName;
// //     const array = [...arr]
// //     // console.log(genres)
// //     for (let i = 0; i < genres.length; i++) {
// //         // console.log(genres[i]);
// //         for (let x = 0; x < array.length; x++) {
// //             if (array[x] === genres[i].id) {
// //                 genreName = genres[i].name;
// //                 array[x] = genreName
// //             };
// //         };
// //     };
// //     console.log(array)
// //     if (array.length > 2) {
// //         return `${array[0]}, ${array[1]}, Other`
// //     }
// //     return `${array[0]}, ${array[1]}`
// // };
// // // export { libraryMarkup, markup };