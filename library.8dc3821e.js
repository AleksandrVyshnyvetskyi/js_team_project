function e(e,t,a,i){Object.defineProperty(e,t,{get:a,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=n),n.register("b0H82",(function(e,t){var a=n("2nhTy"),i=n("k0Ust");const s=new(0,a.default),r={watched:document.querySelector(".header_btn-watched"),queue:document.querySelector(".header_btn-queue"),containerMovie:document.querySelector(".main-container--card__box"),emptyPage:document.querySelector(".empty_page"),paginationPage:document.querySelector("#section__pagination")},o=localStorage.getItem("QUEUE_LIST"),l=JSON.parse(o);let c=0;if(r.queue.addEventListener("click",(function(e){if(e.preventDefault(),r.containerMovie.innerHTML="",r.queue.classList.add("current-btn"),r.watched.classList.remove("current-btn"),r.queue.classList.remove("simple-btn"),r.watched.classList.add("simple-btn"),null===l)return r.emptyPage.classList.add("visible"),void(r.paginationPage.style.display="none");try{d(),r.emptyPage.classList.remove("visible")}catch(e){console.log(e)}})),null===l)return r.emptyPage.classList.add("visible"),void(r.paginationPage.style.display="none");function d(e=!1){const t=e||1,a=[];for(let e=1;e<=Math.ceil(l.length/5);e+=1){let t=5*e,i=e>1?5*(e-1):0;5*e>l.length&&(t=l.length),a[e]=l.slice(i,t)}c=a.length-1,r.containerMovie.innerHTML="",(0,i.renderMoviesCard)(a[t]),c>1&&(s.setCurrentPage=t,s.setTotalPages=c,s.setCallback=d,s.renderPagination())}})),n.register("2nhTy",(function(t,a){e(t.exports,"default",(function(){return l}));document.querySelector(".main-container--card__box");const i=document.querySelector(".pagination"),n=i.querySelector(".pagination__list"),s=i.querySelector('[name="prev"]'),r=i.querySelector('[name="next"]'),o=document.getElementById("section__pagination");o.style.display="none";class l{init(){n.addEventListener("click",this.onClickPages.bind(this)),s.addEventListener("click",this.onClickBtnPrev.bind(this)),r.addEventListener("click",this.onClickBtnNext.bind(this)),window.addEventListener("resize",(()=>{this.renderPagination()}))}renderPagination(){if(o.style.display="block",r.classList.remove("disabled"),s.classList.remove("disabled"),window.innerWidth<768){if(this.currentPage===this.totalPages&&r.classList.add("disabled"),1===this.currentPage&&s.classList.add("disabled"),this.totalPages<=5)return void this.createPagination(!1,2,this.totalPages);if(this.totalPages>5){if(this.currentPage<=3&&this.createPagination(!1,2,5,!1,!1),this.currentPage>3&&this.currentPage<this.totalPages-1)return void this.createPagination(!1,this.currentPage-2,this.currentPage+2,!1,!1,!1);this.currentPage>this.totalPages-2&&this.createPagination(!1,this.totalPages-5,this.totalPages,!1,!1,!1)}}else if(1!==this.totalPages){if(this.totalPages<=9&&this.createPagination(this.totalPages,2,this.totalPages-1),this.totalPages>9){if(1===this.currentPage&&s.classList.add("disabled"),this.currentPage<5)return void this.createPagination(this.totalPages,2,7,!1,!0);if(this.currentPage>4&&this.currentPage<this.totalPages-5)return void this.createPagination(this.totalPages,this.currentPage-2,this.currentPage+2,!0,!0);if(this.currentPage!==this.totalPages&&this.currentPage>this.totalPages-6)return void this.createPagination(this.totalPages,this.totalPages-6,this.totalPages-1,!0,!1);if(this.currentPage===this.totalPages)return this.createPagination(this.totalPages,this.currentPage-6,this.currentPage-1,!0,!1),void r.classList.add("disabled")}}else i.classList.add("hidden")}createPagination(e,t,a,i,s,r=1){if(n.innerHTML="",r){let e=1===this.currentPage?" active":"";n.insertAdjacentHTML("beforeend",`<button class="pagination__link${e}" name="page">1</button>`)}i&&n.insertAdjacentHTML("beforeend",'<span class="pagination__link disabled">...</span>');for(let e=t;e<=a;e+=1){let t=e==this.currentPage?" active":"";n.insertAdjacentHTML("beforeend",`<button class="pagination__link${t}" name="page">${e}</button>`)}if(s&&n.insertAdjacentHTML("beforeend",'<span class="pagination__link disabled">...</span>'),e){let t=this.currentPage===this.totalPages?" active":"";n.insertAdjacentHTML("beforeend",`<button class="pagination__link${t}" name="page">${e}</button>`)}}onClickPages(e){"BUTTON"===e.target.nodeName&&(i.classList.add("hidden"),this.currentPage=1*e.target.textContent,window.scrollTo({top:0,behavior:"smooth"}),this.callback(this.currentPage),i.classList.remove("hidden"))}onClickBtnPrev(){this.currentPage>1&&(i.classList.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}),this.currentPage-=1,this.callback(this.currentPage),i.classList.remove("hidden"))}onClickBtnNext(){this.currentPage!==this.totalPages&&(i.classList.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}),this.currentPage+=1,this.callback(this.currentPage),i.classList.remove("hidden"))}set setCurrentPage(e){this.currentPage=e}set setTotalPages(e){this.totalPages=e}set setCallback(e){this.callback=e}constructor(){this.currentPage=1,this.totalPages=0,this.callback=function(){},this.init()}}})),n.register("k0Ust",(function(t,a){e(t.exports,"renderFilmList",(function(){return s})),e(t.exports,"renderMoviesCard",(function(){return r}));var i=n("krGWQ");n("b5rV1");function s(e){const t=e.map((e=>`\n            <li class="main-container--card"\n        data-modal-open>\n        <img class="card-poster"\n        data-id="${e.id}" \n        src="${null===e.poster_path?"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg":`https://image.tmdb.org/t/p/w500${e.poster_path}`}"\n        alt="${e.original_name}" loading="lazy">\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="${e.id}">${e.original_title.toUpperCase()||e.title.toUpperCase()||e.title.toUpperCase()}</h2>\n        <p class="card-info"> ${o(e.genre_ids)} | ${(e.release_date||e.first_air_date).slice(0,4)} </p>\n        </div>\n    </li>`)).join("");i.default.containerBox.innerHTML=t}function r(e){const t=e.map((e=>e.poster_path?`\n        <li class="main-container--card"\n        data-modal-open>\n          <img class="card-poster"\n        data-id="${e.id}" \n        src="https://image.tmdb.org/t/p/w500${e.poster_path}" \n        alt="${e.original_name}" loading="lazy">\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="${e.id}">${e.original_title.toUpperCase()||e.title.toUpperCase()||e.title.toUpperCase()}</h2>\n        <p class="card-info"> ${o(e.genre_ids)} | ${(e.release_date||e.first_air_date).slice(0,4)} <span class="card-rating"> ${e.vote_average.toFixed(1)}</span></p>\n         </div>\n    </li>`:`\n        <li class="main-container--card"\n        data-modal-open>\n          <img class="card-poster"\n        data-id="${e.id}" \n        src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" >\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="${e.id}">${e.original_title.toUpperCase()||e.title.toUpperCase()||e.title.toUpperCase()}</h2>\n        <p class="card-info"> ${o(e.genre_ids)} | ${(e.release_date||e.first_air_date).slice(0,4)} <span class="card-rating"> ${e.vote_average.toFixed(1)}</span></p>\n         </div>\n    </li>`)).join("");i.default.moviesContainer.insertAdjacentHTML("beforeend",t)}function o([...e]){const t=localStorage.getItem("GENRES"),a=JSON.parse(t);let i;const n=[...e];for(let e=0;e<a.length;e++)for(let t=0;t<n.length;t++)n[t]===a[e].id&&(i=a[e].name,n[t]=i);return n.length>2||3===n.length?`${n[0]}, ${n[1]}, Other`:1===n.length?`${n[0]}`:0===n.length?"No genre":`${n[0]}, ${n[1]}`}})),n.register("b5rV1",(function(t,a){function i(e){localStorage.setItem("MOVIE_LIST",JSON.stringify(e))}e(t.exports,"addCurrrentMoviesToLocalStorage",(function(){return i})),n("krGWQ")})),n("b0H82");
//# sourceMappingURL=library.8dc3821e.js.map