import { renderFilmList } from "./fetch-films-main.js"
import { preloaderShow, preloaderShowLonger, hidePreloader } from './loader';
import { addCurrrentMoviesToLocalStorage } from "./local-storage";
import Pagination from './pagination.js';
import API from './api-service.js';
import refs from './refs';

const apiService = new API;
const pagination = new Pagination;

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
    
    event.preventDefault();
    apiService.inputQuery = event.currentTarget.elements.query.value.trim();

    if (refs.inputEl.value === "") {
         return refs.errorText.classList.remove('is-hidden');
    }
    
    refs.errorText.classList.add('is-hidden');
   
    getSearchMovie();
    preloaderShow();
    refs.inputEl.value = "";
}

async function getSearchMovie(page = false) {
    
    const queryPage = page ? page : 1; // Проверка страниц, обязательно до fetch
    apiService.setPageNumber = queryPage; // Передает текущую страницу в класс api

    try {
        await apiService.fetchSearchMovie().then(data => {
          if (data.total_pages === 0) {
             return refs.errorText.classList.remove('is-hidden');
           };
            pagination.setCurrentPage = queryPage; // Передает страницу в пагинатор
            pagination.setTotalPages = data.total_pages; // Передает общее кол-во страниц в пагинатор
            pagination.setCallback = getSearchMovie; // Передает ссылку на коллбэк функцию 
            pagination.renderPagination(); // Вызов пагинации
            
            refs.errorText.classList.add('is-hidden');
            
            renderFilmList(data.results);
            addCurrrentMoviesToLocalStorage(data.results);
        });      
    } catch (error) {
        console.log(error)
    } finally {
       hidePreloader();
    }
    
}
