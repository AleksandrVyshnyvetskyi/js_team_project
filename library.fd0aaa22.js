!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=a.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},a.parcelRequired7c6=o),o.register("jcFG7",(function(a,n){t(a.exports,"default",(function(){return f}));var r=o("8MBJY"),i=o("a2hTj"),s=(document.querySelector(".main-container--card__box"),document.querySelector(".pagination")),c=s.querySelector(".pagination__list"),l=s.querySelector('[name="prev"]'),d=s.querySelector('[name="next"]'),u=document.getElementById("section__pagination");u.style.display="none";var f=function(){"use strict";function t(){e(r)(this,t),this.currentPage=1,this.totalPages=0,this.callback=function(){},this.init()}return e(i)(t,[{key:"init",value:function(){var e=this;c.addEventListener("click",this.onClickPages.bind(this)),l.addEventListener("click",this.onClickBtnPrev.bind(this)),d.addEventListener("click",this.onClickBtnNext.bind(this)),window.addEventListener("resize",(function(){e.renderPagination()}))}},{key:"renderPagination",value:function(){if(u.style.display="block",d.classList.remove("disabled"),l.classList.remove("disabled"),window.innerWidth<768){if(this.currentPage===this.totalPages&&d.classList.add("disabled"),1===this.currentPage&&l.classList.add("disabled"),this.totalPages<=5)return void this.createPagination(!1,2,this.totalPages);if(this.totalPages>5){if(this.currentPage<=3&&this.createPagination(!1,2,5,!1,!1),this.currentPage>3&&this.currentPage<this.totalPages-1)return void this.createPagination(!1,this.currentPage-2,this.currentPage+2,!1,!1,!1);this.currentPage>this.totalPages-2&&this.createPagination(!1,this.totalPages-5,this.totalPages,!1,!1,!1)}}else if(1!==this.totalPages){if(this.totalPages<=9&&this.createPagination(this.totalPages,2,this.totalPages-1),this.totalPages>9){if(1===this.currentPage&&l.classList.add("disabled"),this.currentPage<5)return void this.createPagination(this.totalPages,2,7,!1,!0);if(this.currentPage>4&&this.currentPage<this.totalPages-5)return void this.createPagination(this.totalPages,this.currentPage-2,this.currentPage+2,!0,!0);if(this.currentPage!==this.totalPages&&this.currentPage>this.totalPages-6)return void this.createPagination(this.totalPages,this.totalPages-6,this.totalPages-1,!0,!1);if(this.currentPage===this.totalPages)return this.createPagination(this.totalPages,this.currentPage-6,this.currentPage-1,!0,!1),void d.classList.add("disabled")}}else s.classList.add("hidden")}},{key:"createPagination",value:function(e,t,a,n,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;if(c.innerHTML="",i){var o=1===this.currentPage?" active":"";c.insertAdjacentHTML("beforeend",'<button class="pagination__link'.concat(o,'" name="page">1</button>'))}n&&c.insertAdjacentHTML("beforeend",'<span class="pagination__link disabled">...</span>');for(var s=t;s<=a;s+=1){var l=s==this.currentPage?" active":"";c.insertAdjacentHTML("beforeend",'<button class="pagination__link'.concat(l,'" name="page">').concat(s,"</button>"))}if(r&&c.insertAdjacentHTML("beforeend",'<span class="pagination__link disabled">...</span>'),e){var d=this.currentPage===this.totalPages?" active":"";c.insertAdjacentHTML("beforeend",'<button class="pagination__link'.concat(d,'" name="page">').concat(e,"</button>"))}}},{key:"onClickPages",value:function(e){"BUTTON"===e.target.nodeName&&(s.classList.add("hidden"),this.currentPage=1*e.target.textContent,window.scrollTo({top:0,behavior:"smooth"}),this.callback(this.currentPage),s.classList.remove("hidden"))}},{key:"onClickBtnPrev",value:function(){this.currentPage>1&&(s.classList.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}),this.currentPage-=1,this.callback(this.currentPage),s.classList.remove("hidden"))}},{key:"onClickBtnNext",value:function(){this.currentPage!==this.totalPages&&(s.classList.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}),this.currentPage+=1,this.callback(this.currentPage),s.classList.remove("hidden"))}},{key:"setCurrentPage",set:function(e){this.currentPage=e}},{key:"setTotalPages",set:function(e){this.totalPages=e}},{key:"setCallback",set:function(e){this.callback=e}}]),t}()})),o.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(e,t){"use strict";function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&a(e.prototype,t);n&&a(e,n);return e}})),o.register("dI30Z",(function(a,n){t(a.exports,"renderFilmList",(function(){return l})),t(a.exports,"renderMoviesCard",(function(){return d}));var r=o("q7ZX2"),i=o("8nrFW"),s=o("4Nugj");o("4LMMA");var c="https://image.tmdb.org/t/p/w500";function l(e){var t=e.map((function(e){return'\n            <li class="main-container--card"\n        data-modal-open>\n        <img class="card-poster"\n        data-id="'.concat(e.id,'" \n        src="').concat(null===e.poster_path?"./no_image.jpg":"".concat(c).concat(e.poster_path),'"\n        alt="').concat(e.original_name,'" loading="lazy">\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="').concat(e.id,'">').concat(e.original_title.toUpperCase()||e.title.toUpperCase()||e.title.toUpperCase(),'</h2>\n        <p class="card-info"> ').concat(u(e.genre_ids)," | ").concat((e.release_date||e.first_air_date).slice(0,4)," </p>\n         </div>\n    </li>")})).join("");s.default.containerBox.innerHTML=t}function d(e){var t=e.map((function(e){return e.poster_path?'\n        <li class="main-container--card"\n        data-modal-open>\n          <img class="card-poster"\n        data-id="'.concat(e.id,'" \n        src="').concat(c).concat(e.poster_path,'" \n        alt="').concat(e.original_name,'" loading="lazy">\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="').concat(e.id,'">').concat(e.original_title.toUpperCase()||e.title.toUpperCase()||e.title.toUpperCase(),'</h2>\n        <p class="card-info"> ').concat(u(e.genre_ids)," | ").concat((e.release_date||e.first_air_date).slice(0,4),' <span class="card-rating"> ').concat(e.vote_average.toFixed(1),"</span></p>\n         </div>\n    </li>"):'\n        <li class="main-container--card"\n        data-modal-open>\n          <img class="card-poster"\n        data-id="'.concat(e.id,'" \n        src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" >\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="').concat(e.id,'">').concat(e.original_title.toUpperCase()||e.title.toUpperCase()||e.title.toUpperCase(),'</h2>\n        <p class="card-info"> ').concat(u(e.genre_ids)," | ").concat((e.release_date||e.first_air_date).slice(0,4),' <span class="card-rating"> ').concat(e.vote_average.toFixed(1),"</span></p>\n         </div>\n    </li>")})).join("");s.default.moviesContainer.insertAdjacentHTML("beforeend",t)}function u(t){for(var a,n=e(r)(t).slice(0),o=localStorage.getItem("GENRES"),s=JSON.parse(o),c=e(i)(n),l=0;l<s.length;l++)for(var d=0;d<c.length;d++)c[d]===s[l].id&&(a=s[l].name,c[d]=a);return c.length>2||3===c.length?"".concat(c[0],", ").concat(c[1],", Other"):1===c.length?"".concat(c[0]):0===c.length?"No genre":"".concat(c[0],", ").concat(c[1])}})),o.register("q7ZX2",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return a.default(e)||n.default(e)||s.default(e,i)||r.default()};var a=c(o("8slrw")),n=c(o("7AJDX")),r=c(o("ifqQW")),s=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n.default(e,t)};var a,n=(a=o("8NIkP"))&&a.__esModule?a:{default:a}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}})),o.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return a.default(e)||n.default(e)||i.default(e)||r.default()};var a=s(o("kMC0W")),n=s(o("7AJDX")),r=s(o("8CtQK")),i=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var a,n=(a=o("8NIkP"))&&a.__esModule?a:{default:a}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("4Nugj",(function(e,a){t(e.exports,"default",(function(){return n}));var n={containerBox:document.querySelector(".main-container--card__box"),containerCard:document.querySelector(".main-container--card"),watchedList:document.querySelector(".header_btn-watched"),moviesContainer:document.querySelector(".main-container--card__box"),queueList:document.querySelector(".header_btn-queue"),loader:document.querySelector(".js-loader"),onBtnClose:document.querySelector("button[data-modal-close]"),onBtnOpen:document.querySelector(".main-container--card__box"),modal:document.querySelector("[data-modal]"),modalContainer:document.querySelector(".modal"),modalContent:document.querySelector(".modal-content")}})),o.register("4LMMA",(function(e,a){function n(e){localStorage.setItem("MOVIE_LIST",JSON.stringify(e))}t(e.exports,"addCurrrentMoviesToLocalStorage",(function(){return n})),o("4Nugj")}))}();
//# sourceMappingURL=library.fd0aaa22.js.map
