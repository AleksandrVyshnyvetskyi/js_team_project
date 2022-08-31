!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,a,n){Object.defineProperty(t,e,{get:a,set:n,enumerable:!0,configurable:!0})}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},s=a.parcelRequired7c6;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},a.parcelRequired7c6=s),s.register("jcFG7",(function(a,n){e(a.exports,"default",(function(){return f}));var r=s("8MBJY"),i=s("a2hTj"),o=(document.querySelector(".main-container--card__box"),document.querySelector(".pagination")),c=o.querySelector(".pagination__list"),l=o.querySelector('[name="prev"]'),d=o.querySelector('[name="next"]'),u=document.getElementById("section__pagination");u.style.display="none";var f=function(){"use strict";function e(){t(r)(this,e),this.currentPage=1,this.totalPages=0,this.callback=function(){},this.init()}return t(i)(e,[{key:"init",value:function(){var t=this;c.addEventListener("click",this.onClickPages.bind(this)),l.addEventListener("click",this.onClickBtnPrev.bind(this)),d.addEventListener("click",this.onClickBtnNext.bind(this)),window.addEventListener("resize",(function(){t.renderPagination()}))}},{key:"renderPagination",value:function(){if(u.style.display="block",d.classList.remove("disabled"),l.classList.remove("disabled"),window.innerWidth<768){if(this.currentPage===this.totalPages&&d.classList.add("disabled"),1===this.currentPage&&l.classList.add("disabled"),this.totalPages<=5)return void this.createPagination(!1,2,this.totalPages);if(this.totalPages>5){if(this.currentPage<=3&&this.createPagination(!1,2,5,!1,!1),this.currentPage>3&&this.currentPage<this.totalPages-1)return void this.createPagination(!1,this.currentPage-2,this.currentPage+2,!1,!1,!1);this.currentPage>this.totalPages-2&&this.createPagination(!1,this.totalPages-5,this.totalPages,!1,!1,!1)}}else if(1!==this.totalPages){if(this.totalPages<=9&&this.createPagination(this.totalPages,2,this.totalPages-1),this.totalPages>9){if(1===this.currentPage&&l.classList.add("disabled"),this.currentPage<5)return void this.createPagination(this.totalPages,2,7,!1,!0);if(this.currentPage>4&&this.currentPage<this.totalPages-5)return void this.createPagination(this.totalPages,this.currentPage-2,this.currentPage+2,!0,!0);if(this.currentPage!==this.totalPages&&this.currentPage>this.totalPages-6)return void this.createPagination(this.totalPages,this.totalPages-6,this.totalPages-1,!0,!1);if(this.currentPage===this.totalPages)return this.createPagination(this.totalPages,this.currentPage-6,this.currentPage-1,!0,!1),void d.classList.add("disabled")}}else o.classList.add("hidden")}},{key:"createPagination",value:function(t,e,a,n,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;if(c.innerHTML="",i){var s=1===this.currentPage?" active":"";c.insertAdjacentHTML("beforeend",'<button class="pagination__link'.concat(s,'" name="page">1</button>'))}n&&c.insertAdjacentHTML("beforeend",'<span class="pagination__link disabled">...</span>');for(var o=e;o<=a;o+=1){var l=o==this.currentPage?" active":"";c.insertAdjacentHTML("beforeend",'<button class="pagination__link'.concat(l,'" name="page">').concat(o,"</button>"))}if(r&&c.insertAdjacentHTML("beforeend",'<span class="pagination__link disabled">...</span>'),t){var d=this.currentPage===this.totalPages?" active":"";c.insertAdjacentHTML("beforeend",'<button class="pagination__link'.concat(d,'" name="page">').concat(t,"</button>"))}}},{key:"onClickPages",value:function(t){"BUTTON"===t.target.nodeName&&(o.classList.add("hidden"),this.currentPage=1*t.target.textContent,window.scrollTo({top:0,behavior:"smooth"}),this.callback(this.currentPage),o.classList.remove("hidden"))}},{key:"onClickBtnPrev",value:function(){this.currentPage>1&&(o.classList.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}),this.currentPage-=1,this.callback(this.currentPage),o.classList.remove("hidden"))}},{key:"onClickBtnNext",value:function(){this.currentPage!==this.totalPages&&(o.classList.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}),this.currentPage+=1,this.callback(this.currentPage),o.classList.remove("hidden"))}},{key:"setCurrentPage",set:function(t){this.currentPage=t}},{key:"setTotalPages",set:function(t){this.totalPages=t}},{key:"setCallback",set:function(t){this.callback=t}}]),e}()})),s.register("8MBJY",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}})),s.register("a2hTj",(function(t,e){"use strict";function a(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){e&&a(t.prototype,e);n&&a(t,n);return t}})),s.register("dI30Z",(function(a,n){e(a.exports,"renderFilmList",(function(){return l})),e(a.exports,"renderMoviesCard",(function(){return d}));var r=s("q7ZX2"),i=s("8nrFW"),o=s("4Nugj");s("4LMMA");var c="https://image.tmdb.org/t/p/w500";function l(t){var e=t.map((function(t){return'\n            <li class="main-container--card"\n        data-modal-open>\n        <img class="card-poster"\n        data-id="'.concat(t.id,'" \n        src="').concat(null===t.poster_path?"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg":"".concat(c).concat(t.poster_path),'"\n        alt="').concat(t.original_name,'" loading="lazy">\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="').concat(t.id,'">').concat(t.original_title.toUpperCase()||t.title.toUpperCase()||t.title.toUpperCase(),'</h2>\n        <p class="card-info"> ').concat(u(t.genre_ids)," | ").concat((t.release_date||t.first_air_date).slice(0,4)," </p>\n        </div>\n    </li>")})).join("");o.default.containerBox.innerHTML=e}function d(t){var e=t.map((function(t){return t.poster_path?'\n        <li class="main-container--card"\n        data-modal-open>\n          <img class="card-poster"\n        data-id="'.concat(t.id,'" \n        src="').concat(c).concat(t.poster_path,'" \n        alt="').concat(t.original_name,'" loading="lazy">\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="').concat(t.id,'">').concat(t.original_title.toUpperCase()||t.title.toUpperCase()||t.title.toUpperCase(),'</h2>\n        <p class="card-info"> ').concat(u(t.genre_ids)," | ").concat((t.release_date||t.first_air_date).slice(0,4),' <span class="card-rating"> ').concat(t.vote_average.toFixed(1),"</span></p>\n         </div>\n    </li>"):'\n        <li class="main-container--card"\n        data-modal-open>\n          <img class="card-poster"\n        data-id="'.concat(t.id,'" \n        src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" >\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="').concat(t.id,'">').concat(t.original_title.toUpperCase()||t.title.toUpperCase()||t.title.toUpperCase(),'</h2>\n        <p class="card-info"> ').concat(u(t.genre_ids)," | ").concat((t.release_date||t.first_air_date).slice(0,4),' <span class="card-rating"> ').concat(t.vote_average.toFixed(1),"</span></p>\n         </div>\n    </li>")})).join("");o.default.moviesContainer.insertAdjacentHTML("beforeend",e)}function u(e){for(var a,n=t(r)(e).slice(0),s=localStorage.getItem("GENRES"),o=JSON.parse(s),c=t(i)(n),l=0;l<o.length;l++)for(var d=0;d<c.length;d++)c[d]===o[l].id&&(a=o[l].name,c[d]=a);return c.length>2||3===c.length?"".concat(c[0],", ").concat(c[1],", Other"):1===c.length?"".concat(c[0]):0===c.length?"No genre":"".concat(c[0],", ").concat(c[1])}})),s.register("q7ZX2",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return a.default(t)||n.default(t)||o.default(t,i)||r.default()};var a=c(s("8slrw")),n=c(s("7AJDX")),r=c(s("ifqQW")),o=c(s("auk6i"));function c(t){return t&&t.__esModule?t:{default:t}}})),s.register("8slrw",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return t}})),s.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),s.register("ifqQW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),s.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return n.default(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n.default(t,e)};var a,n=(a=s("8NIkP"))&&a.__esModule?a:{default:a}})),s.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}})),s.register("8nrFW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return a.default(t)||n.default(t)||i.default(t)||r.default()};var a=o(s("kMC0W")),n=o(s("7AJDX")),r=o(s("8CtQK")),i=o(s("auk6i"));function o(t){return t&&t.__esModule?t:{default:t}}})),s.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return n.default(t)};var a,n=(a=s("8NIkP"))&&a.__esModule?a:{default:a}})),s.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),s.register("4LMMA",(function(t,a){function n(t){localStorage.setItem("MOVIE_LIST",JSON.stringify(t))}e(t.exports,"addCurrrentMoviesToLocalStorage",(function(){return n})),s("4Nugj")}))}();
//# sourceMappingURL=library.15a67300.js.map