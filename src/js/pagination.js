const containerBox = document.querySelector(`.main-container--card__box`);
const pagination = document.querySelector('.pagination');
const paginationList = pagination.querySelector('.pagination__list');
const paginationPrev = pagination.querySelector('[name="prev"]');
const paginationNext = pagination.querySelector('[name="next"]');
const sectionPagination = document.getElementById('section__pagination');


sectionPagination.style.display = 'none';


export default class Pagination {
    constructor() {
        this.currentPage = 1;
        this.totalPages = 0;
        this.callback = function () { };
        this.init();
    }
  
    
    init() { 
        paginationList.addEventListener('click', this.onClickPages.bind(this));
        paginationPrev.addEventListener('click', this.onClickBtnPrev.bind(this))
        paginationNext.addEventListener('click', this.onClickBtnNext.bind(this))
        window.addEventListener('resize', () => { 
            this.renderPagination();
        });
    }
    // Рендер пагинации
    renderPagination() { 
        sectionPagination.style.display = 'block';
        paginationNext.classList.remove('disabled');
        paginationPrev.classList.remove('disabled');

        
        // Мобилка
        if (window.innerWidth < 768) {
            if (this.currentPage === this.totalPages) {
                paginationNext.classList.add('disabled')
            }
            if (this.currentPage === 1) { 
                paginationPrev.classList.add('disabled')
            }
            if (this.totalPages <= 5) { 
                this.createPagination(false, 2, this.totalPages);
                return;
            }
            if (this.totalPages > 5) {
                if (this.currentPage <= 3) { 
                    this.createPagination(false, 2, 5, false, false);
                }
                if (this.currentPage > 3 && this.currentPage < this.totalPages - 1) { 
                    this.createPagination(false, this.currentPage - 2, this.currentPage + 2, false, false, false);
                    return;
                }
                if (this.currentPage > this.totalPages - 2) { 
                    this.createPagination(false, this.totalPages - 5, this.totalPages, false, false, false);
                } 
            }
           
            return;
        }

        // Десктоп
        if (this.totalPages === 1) { 
            pagination.classList.add('hidden');
            return;
        }

        if (this.totalPages <= 9) { 
            this.createPagination(this.totalPages, 2, this.totalPages - 1);
            
        }
        if (this.totalPages > 9) {
            if (this.currentPage === 1) {
                paginationPrev.classList.add('disabled')
            }
            if (this.currentPage < 5) {
                this.createPagination(this.totalPages, 2, 7, false, true);
                return;
            }
            if (this.currentPage > 4 && this.currentPage < this.totalPages - 5) {
                this.createPagination(this.totalPages, this.currentPage - 2, this.currentPage + 2, true, true);
                return;
            }
            if (this.currentPage !== this.totalPages && this.currentPage > this.totalPages - 6) {

                this.createPagination(this.totalPages, this.totalPages - 6, this.totalPages -1, true, false);
                return;
            }
            if (this.currentPage === this.totalPages) {
                this.createPagination(this.totalPages, this.currentPage - 6, this.currentPage - 1, true, false);
                paginationNext.classList.add('disabled')
                return;
            }

            
        }
     
    }
    // Создание пагинации
    createPagination(lastPage, start, end, leftDots, rightDots, firstPage = 1) { 
        paginationList.innerHTML = '';
      
        
        if (firstPage) { 
             let paginationStart = (this.currentPage === 1) ? ' active' : '';
             paginationList.insertAdjacentHTML("beforeend", `<button class="pagination__link${paginationStart}" name="page">1</button>`);
        }
        
        if (leftDots) { 
             paginationList.insertAdjacentHTML("beforeend", `<span class="pagination__link disabled">...</span>`); 
        }


        for (let i = start; i <= end; i += 1) {
            let paginationClass = (i == this.currentPage) ? ' active' : '';
            paginationList.insertAdjacentHTML("beforeend", `<button class="pagination__link${paginationClass}" name="page">${i}</button>`);
        }


        if (rightDots) { 
            
             paginationList.insertAdjacentHTML("beforeend", `<span class="pagination__link disabled">...</span>`); 
        }
        if (lastPage) { 
            let paginationEnd = (this.currentPage === this.totalPages) ? ' active' : '';
            paginationList.insertAdjacentHTML("beforeend", `<button class="pagination__link${paginationEnd}" name="page">${lastPage}</button>`);
        }
   
    }

    // Событие клика по страницам
    onClickPages(e) { 
       
        if (e.target.nodeName === 'BUTTON') {

            pagination.classList.add('hidden');
            // containerBox.innerHTML = '';
            this.currentPage = e.target.textContent * 1;
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        
            this.callbackRun();
            
            
            pagination.classList.remove('hidden');
        }
    };
    // Событие клика по левой кнопке
    onClickBtnPrev() { 
         
        if (this.currentPage > 1) { 
            pagination.classList.add('hidden');
            // containerBox.innerHTML = '';
            window.scrollTo({top: 0,behavior: "smooth"});
            this.currentPage -= 1;
            this.callbackRun();

            pagination.classList.remove('hidden');
        }
    }
    // Событие клика по правой кнопке
    onClickBtnNext() {     
        if (this.currentPage !== this.totalPages) { 
            pagination.classList.add('hidden');
            // containerBox.innerHTML = '';
            window.scrollTo({top: 0,behavior: "smooth"});
            this.currentPage += 1;
            this.callbackRun();
 
            pagination.classList.remove('hidden');
        }
    }

    callbackRun() { 
        const localCallback = localStorage.getItem('CALLBACK');

        if (localCallback === this.callback.name) { 
            this.callback(this.currentPage)
        }
    }

    set setCurrentPage(currentPage) {
        this.currentPage = currentPage;
    }
    set setTotalPages(totalPages) {
        this.totalPages = totalPages;
    }
    set setCallback(callback) {
        localStorage.setItem('CALLBACK', callback.name)
        this.callback = callback;
    }
}

