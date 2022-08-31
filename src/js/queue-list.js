import Pagination from './pagination.js';
import {renderMoviesCard} from "./create-markup.js"



const pagination = new Pagination;

const refs = {
    watched: document.querySelector('.header_btn-watched'),
    queue: document.querySelector('.header_btn-queue'),
    containerMovie: document.querySelector('.main-container--card__box'),
    emptyPage: document.querySelector('.empty_page'),
    paginationPage: document.querySelector('.section__pagination'),
};

const getMovieStorage = localStorage.getItem('QUEUE_LIST');
const totalMovieElements = JSON.parse(getMovieStorage);
const countElpage = 20;
let totalMoviePages = 0;

console.log(totalMovieElements)

refs.queue.addEventListener('click', onQueueClick);

if (totalMovieElements === null) { 
  refs.emptyPage.classList.add('visible');
    refs.paginationPage.classList.add('hidden');
  return;
}






function onQueueClick(e) {
    e.preventDefault();
    //  refs.containerMovie.innerHTML = '';
    

  refs.queue.classList.add('current-btn');
  refs.watched.classList.remove('current-btn');
    refs.queue.classList.remove('simple-btn');
    refs.watched.classList.add('simple-btn');
    
  if (totalMovieElements) {
    try {
        paginationLibrary()
       
        refs.emptyPage.classList.remove('visible');
        // refs.paginationPage.classList.remove('hidden');
    } catch (e) {
      console.log(e);
    }
  } else { 
    return refs.emptyPage.classList.add('visible');
  }
}


function paginationLibrary(page = false) { 
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
    console.log(partMovie[queryPage])
    renderMoviesCard(partMovie[queryPage]);
    
  if (totalMoviePages > 1) { 
    pagination.setCurrentPage = queryPage;
    pagination.setTotalPages = totalMoviePages; 
      pagination.setCallback = paginationLibrary; 
      
    pagination.renderPagination(); 
      
  }
  
}