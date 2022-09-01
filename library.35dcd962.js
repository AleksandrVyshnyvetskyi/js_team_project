!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,a,n){Object.defineProperty(t,e,{get:a,set:n,enumerable:!0,configurable:!0})}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=a.parcelRequired7c6;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},a.parcelRequired7c6=s),s.register("jcFG7",(function(a,n){e(a.exports,"default",(function(){return g}));var i=s("8MBJY"),o=s("a2hTj"),r=(document.querySelector(".main-container--card__box"),document.querySelector(".pagination")),c=r.querySelector(".pagination__list"),l=r.querySelector('[name="prev"]'),d=r.querySelector('[name="next"]'),u=document.getElementById("section__pagination");u.style.display="none";var g=function(){"use strict";function e(){t(i)(this,e),this.currentPage=1,this.totalPages=0,this.callback=function(){},this.init()}return t(o)(e,[{key:"init",value:function(){var t=this;c.addEventListener("click",this.onClickPages.bind(this)),l.addEventListener("click",this.onClickBtnPrev.bind(this)),d.addEventListener("click",this.onClickBtnNext.bind(this)),window.addEventListener("resize",(function(){t.renderPagination()}))}},{key:"renderPagination",value:function(){if(u.style.display="block",d.classList.remove("disabled"),l.classList.remove("disabled"),window.innerWidth<768){if(this.currentPage===this.totalPages&&d.classList.add("disabled"),1===this.currentPage&&l.classList.add("disabled"),this.totalPages<=5)return void this.createPagination(!1,2,this.totalPages);if(this.totalPages>5){if(this.currentPage<=3&&this.createPagination(!1,2,5,!1,!1),this.currentPage>3&&this.currentPage<this.totalPages-1)return void this.createPagination(!1,this.currentPage-2,this.currentPage+2,!1,!1,!1);this.currentPage>this.totalPages-2&&this.createPagination(!1,this.totalPages-5,this.totalPages,!1,!1,!1)}}else if(1!==this.totalPages){if(this.totalPages<=9&&this.createPagination(this.totalPages,2,this.totalPages-1),this.totalPages>9){if(1===this.currentPage&&l.classList.add("disabled"),this.currentPage<5)return void this.createPagination(this.totalPages,2,7,!1,!0);if(this.currentPage>4&&this.currentPage<this.totalPages-5)return void this.createPagination(this.totalPages,this.currentPage-2,this.currentPage+2,!0,!0);if(this.currentPage!==this.totalPages&&this.currentPage>this.totalPages-6)return void this.createPagination(this.totalPages,this.totalPages-6,this.totalPages-1,!0,!1);if(this.currentPage===this.totalPages)return this.createPagination(this.totalPages,this.currentPage-6,this.currentPage-1,!0,!1),void d.classList.add("disabled")}}else r.classList.add("hidden")}},{key:"createPagination",value:function(t,e,a,n,i){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;if(c.innerHTML="",s){var o=1===this.currentPage?" active":"";c.insertAdjacentHTML("beforeend",'<button class="pagination__link'.concat(o,'" name="page">1</button>'))}n&&c.insertAdjacentHTML("beforeend",'<span class="pagination__link disabled">...</span>');for(var r=e;r<=a;r+=1){var l=r==this.currentPage?" active":"";c.insertAdjacentHTML("beforeend",'<button class="pagination__link'.concat(l,'" name="page">').concat(r,"</button>"))}if(i&&c.insertAdjacentHTML("beforeend",'<span class="pagination__link disabled">...</span>'),t){var d=this.currentPage===this.totalPages?" active":"";c.insertAdjacentHTML("beforeend",'<button class="pagination__link'.concat(d,'" name="page">').concat(t,"</button>"))}}},{key:"onClickPages",value:function(t){"BUTTON"===t.target.nodeName&&(r.classList.add("hidden"),this.currentPage=1*t.target.textContent,window.scrollTo({top:0,behavior:"smooth"}),this.callbackRun(),r.classList.remove("hidden"))}},{key:"onClickBtnPrev",value:function(){this.currentPage>1&&(r.classList.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}),this.currentPage-=1,this.callbackRun(),r.classList.remove("hidden"))}},{key:"onClickBtnNext",value:function(){this.currentPage!==this.totalPages&&(r.classList.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}),this.currentPage+=1,this.callbackRun(),r.classList.remove("hidden"))}},{key:"callbackRun",value:function(){localStorage.getItem("CALLBACK")===this.callback.name&&this.callback(this.currentPage)}},{key:"setCurrentPage",set:function(t){this.currentPage=t}},{key:"setTotalPages",set:function(t){this.totalPages=t}},{key:"setCallback",set:function(t){localStorage.setItem("CALLBACK",t.name),this.callback=t}}]),e}()})),s.register("dI30Z",(function(a,n){e(a.exports,"renderFilmList",(function(){return l})),e(a.exports,"renderMoviesCard",(function(){return d}));var i=s("q7ZX2"),o=s("8nrFW"),r=s("4Nugj");s("4LMMA");var c="https://image.tmdb.org/t/p/w500";function l(t){r.default.containerBox.innerHTML="";var e=t.map((function(t){var e,a,n=null!==(a=null!==(e=t.release_date)&&void 0!==e?e:t.first_air_date)&&void 0!==a?a:null;return n=null!==n?n.slice(0,4):"",'\n            <li class="main-container--card"\n        data-modal-open>\n        <img class="card-poster"\n        data-id="'.concat(t.id,'" \n        src="').concat(null===t.poster_path?"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg":"".concat(c).concat(t.poster_path),'"\n        alt="').concat(t.original_name,'" loading="lazy">\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="').concat(t.id,'">').concat(t.original_title.toUpperCase()||t.title.toUpperCase()||t.title.toUpperCase(),'</h2>\n        <p class="card-info"> ').concat(u(t.genre_ids)," | ").concat(n," </p>\n         </div>\n    </li>")})).join("");r.default.containerBox.innerHTML=e}function d(t){var e=t.map((function(t){var e,a,n=null!==(a=null!==(e=t.release_date)&&void 0!==e?e:t.first_air_date)&&void 0!==a?a:null;return n=null!==n?n.slice(0,4):"",t.poster_path?'\n        <li class="main-container--card"\n        data-modal-open>\n          <img class="card-poster"\n        data-id="'.concat(t.id,'" \n        src="').concat(c).concat(t.poster_path,'" \n        alt="').concat(t.original_name,'" loading="lazy">\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="').concat(t.id,'">').concat(t.original_title.toUpperCase()||t.title.toUpperCase()||t.title.toUpperCase(),'</h2>\n        <p class="card-info"> ').concat(u(t.genre_ids)," | ").concat(n,' <span class="card-rating"> ').concat(t.vote_average.toFixed(1),"</span></p>\n         </div>\n    </li>"):'\n        <li class="main-container--card"\n        data-modal-open>\n          <img class="card-poster"\n        data-id="'.concat(t.id,'" \n        src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" >\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="').concat(t.id,'">').concat(t.original_title.toUpperCase()||t.title.toUpperCase()||t.title.toUpperCase(),'</h2>\n        <p class="card-info"> ').concat(u(t.genre_ids)," | ").concat(n,' <span class="card-rating"> ').concat(t.vote_average.toFixed(1),"</span></p>\n         </div>\n    </li>")})).join("");r.default.moviesContainer.insertAdjacentHTML("beforeend",e)}function u(e){for(var a,n=t(i)(e).slice(0),s=localStorage.getItem("GENRES"),r=JSON.parse(s),c=t(o)(n),l=0;l<r.length;l++)for(var d=0;d<c.length;d++)c[d]===r[l].id&&(a=r[l].name,c[d]=a);return c.length>2||3===c.length?"".concat(c[0],", ").concat(c[1],", Other"):1===c.length?"".concat(c[0]):0===c.length?"No genre":"".concat(c[0],", ").concat(c[1])}})),s.register("kvC6y",(function(t,a){e(t.exports,"preloaderShow",(function(){return s})),e(t.exports,"hidePreloader",(function(){return o})),e(t.exports,"preloaderShowLonger",(function(){return r}));var n=document.getElementById("preloader"),i=document.querySelector(".loader");function s(){n.classList.add("is-open"),i.classList.add("is-open")}function o(){n.classList.remove("is-open"),i.classList.remove("is-open")}function r(){n.classList.add("is-open"),i.classList.add("is-open"),setTimeout((function(){n.classList.remove("is-open"),i.classList.remove("is-open")}),700)}}))}();
//# sourceMappingURL=library.35dcd962.js.map
