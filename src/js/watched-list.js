import Pagination from './pagination.js';
import {renderMoviesCard} from "./fetch-films-main.js"
import { preloaderShowLonger } from './loader';





const pagination = new Pagination;

const refs = {
    watched: document.querySelector('.header_btn-watched'),
    queue: document.querySelector('.header_btn-queue'),
    containerMovie: document.querySelector('.main-container--card__box'),
    emptyPage: document.querySelector('.empty_page'),
    paginationPage: document.querySelector('#section__pagination'),
};

const getMovieStorage = localStorage.getItem('WATCHED_LIST');
const totalMovieElements = JSON.parse(getMovieStorage);
const countElpage = 10;
let totalMoviePages = 0;


refs.watched.addEventListener('click', onWatchedClick);


if (totalMovieElements.length === 0) {
  refs.emptyPage.classList.add('visible');
  refs.paginationPage.style.display = "none";
  return;

}


refs.emptyPage.classList.remove('visible');
paginationLibrary();


function onWatchedClick(e) {
  e.preventDefault();
  refs.containerMovie.innerHTML = '';
  refs.watched.classList.add('current-btn');
  refs.queue.classList.remove('current-btn');
  refs.queue.classList.add('simple-btn');
  refs.watched.classList.remove('simple-btn');
  

  if (totalMovieElements.length !== 0) {
    try {
      paginationLibrary();
       
      refs.emptyPage.classList.remove('visible');
      
    } catch (e) {
      console.log(e);
    }
  } else { 
    refs.paginationPage.style.display = "none";
    return refs.emptyPage.classList.add('visible');
  }
}


function paginationLibrary(page = false) { 
  preloaderShowLonger();
  const queryPage = page ? page : 1; 
  const partMovie = [];

 
    for (let i = 1; i <= Math.ceil(totalMovieElements.length / countElpage); i += 1) { 
        let end = (countElpage * i);
        let start = i > 1 ? (countElpage * (i - 1)) : 0;
        if ((countElpage * i) > totalMovieElements.length) { 
          end = totalMovieElements.length;
        }

        partMovie[i] = (totalMovieElements.slice(start, end))
    }
    
  totalMoviePages = partMovie.length - 1;
  refs.containerMovie.innerHTML = "";
    renderMoviesCard(partMovie[queryPage]);
    
  if (totalMoviePages > 1) { 
    pagination.setCurrentPage = queryPage;
    pagination.setTotalPages = totalMoviePages; 
    pagination.setCallback = paginationLibrary; 
    pagination.renderPagination(); 
      
  }
  
}
