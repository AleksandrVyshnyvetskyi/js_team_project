import Pagination from './pagination.js'
import API from './api-service.js'
import { addCurrrentMoviesToLocalStorage } from "./local-storage"
import { renderFilmList } from "./fetch-films-main.js"


const containerBox = document.querySelector(`.main-container--card__box`);

const apiService = new API;
const pagination = new Pagination;


getPopularMovie();

// Фун-ия, которая берет и передает данные по апи, имеет первый! параметр page = false. После параметра page можете передавать свои.
function getPopularMovie(page = false) { 
    const queryPage = page ? page : 1; // Проверка страниц, обязательно до fetch
    apiService.setPageNumber = queryPage; // Передает текущую страницу в класс api

    apiService.fetchPopularMovie().then(data => {

        pagination.setCurrentPage = queryPage; // Передает страницу в пагинатор
        pagination.setTotalPages = data.total_pages; // Передает общее кол-во страниц в пагинатор
        pagination.setCallback = getPopularMovie; // Передает ссылку на коллбэк функцию 
        pagination.renderPagination(); // Вызов пагинации
        addCurrrentMoviesToLocalStorage(data.results);
        renderFilmList(data.results); 
        
        
    }
        
);
}
