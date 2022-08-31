!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,a,n){Object.defineProperty(t,e,{get:a,set:n,enumerable:!0,configurable:!0})}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=a.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},a.parcelRequired7c6=o),o.register("jcFG7",(function(a,n){e(a.exports,"default",(function(){return f}));var i=o("8MBJY"),r=o("a2hTj"),s=(document.querySelector(".main-container--card__box"),document.querySelector(".pagination")),c=s.querySelector(".pagination__list"),l=s.querySelector('[name="prev"]'),d=s.querySelector('[name="next"]'),u=document.getElementById("section__pagination");u.style.display="none";var f=function(){"use strict";function e(){t(i)(this,e),this.currentPage=1,this.totalPages=0,this.callback=function(){},this.init()}return t(r)(e,[{key:"init",value:function(){var t=this;c.addEventListener("click",this.onClickPages.bind(this)),l.addEventListener("click",this.onClickBtnPrev.bind(this)),d.addEventListener("click",this.onClickBtnNext.bind(this)),window.addEventListener("resize",(function(){t.renderPagination()}))}},{key:"renderPagination",value:function(){if(u.style.display="block",d.classList.remove("disabled"),l.classList.remove("disabled"),window.innerWidth<768){if(this.currentPage===this.totalPages&&d.classList.add("disabled"),1===this.currentPage&&l.classList.add("disabled"),this.totalPages<=5)return void this.createPagination(!1,2,this.totalPages);if(this.totalPages>5){if(this.currentPage<=3&&this.createPagination(!1,2,5,!1,!1),this.currentPage>3&&this.currentPage<this.totalPages-1)return void this.createPagination(!1,this.currentPage-2,this.currentPage+2,!1,!1,!1);this.currentPage>this.totalPages-2&&this.createPagination(!1,this.totalPages-5,this.totalPages,!1,!1,!1)}}else if(1!==this.totalPages){if(this.totalPages<=9&&this.createPagination(this.totalPages,2,this.totalPages-1),this.totalPages>9){if(1===this.currentPage&&l.classList.add("disabled"),this.currentPage<5)return void this.createPagination(this.totalPages,2,7,!1,!0);if(this.currentPage>4&&this.currentPage<this.totalPages-5)return void this.createPagination(this.totalPages,this.currentPage-2,this.currentPage+2,!0,!0);if(this.currentPage!==this.totalPages&&this.currentPage>this.totalPages-6)return void this.createPagination(this.totalPages,this.totalPages-6,this.totalPages-1,!0,!1);if(this.currentPage===this.totalPages)return this.createPagination(this.totalPages,this.currentPage-6,this.currentPage-1,!0,!1),void d.classList.add("disabled")}}else s.classList.add("hidden")}},{key:"createPagination",value:function(t,e,a,n,i){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;if(c.innerHTML="",r){var o=1===this.currentPage?" active":"";c.insertAdjacentHTML("beforeend",'<button class="pagination__link'.concat(o,'" name="page">1</button>'))}n&&c.insertAdjacentHTML("beforeend",'<span class="pagination__link disabled">...</span>');for(var s=e;s<=a;s+=1){var l=s==this.currentPage?" active":"";c.insertAdjacentHTML("beforeend",'<button class="pagination__link'.concat(l,'" name="page">').concat(s,"</button>"))}if(i&&c.insertAdjacentHTML("beforeend",'<span class="pagination__link disabled">...</span>'),t){var d=this.currentPage===this.totalPages?" active":"";c.insertAdjacentHTML("beforeend",'<button class="pagination__link'.concat(d,'" name="page">').concat(t,"</button>"))}}},{key:"onClickPages",value:function(t){"BUTTON"===t.target.nodeName&&(s.classList.add("hidden"),this.currentPage=1*t.target.textContent,window.scrollTo({top:0,behavior:"smooth"}),this.callbackRun(),s.classList.remove("hidden"))}},{key:"onClickBtnPrev",value:function(){this.currentPage>1&&(s.classList.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}),this.currentPage-=1,this.callbackRun(),s.classList.remove("hidden"))}},{key:"onClickBtnNext",value:function(){this.currentPage!==this.totalPages&&(s.classList.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}),this.currentPage+=1,this.callbackRun(),s.classList.remove("hidden"))}},{key:"callbackRun",value:function(){localStorage.getItem("CALLBACK")===this.callback.name&&this.callback(this.currentPage)}},{key:"setCurrentPage",set:function(t){this.currentPage=t}},{key:"setTotalPages",set:function(t){this.totalPages=t}},{key:"setCallback",set:function(t){localStorage.setItem("CALLBACK",t.name),this.callback=t}}]),e}()})),o.register("8MBJY",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(t,e){"use strict";function a(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){e&&a(t.prototype,e);n&&a(t,n);return t}})),o.register("dI30Z",(function(a,n){e(a.exports,"renderFilmList",(function(){return l})),e(a.exports,"renderMoviesCard",(function(){return d}));var i=o("q7ZX2"),r=o("8nrFW"),s=o("4Nugj");o("4LMMA");var c="https://image.tmdb.org/t/p/w500";function l(t){s.default.containerBox.innerHTML="";var e=t.map((function(t){var e,a,n=null!==(a=null!==(e=t.release_date)&&void 0!==e?e:t.first_air_date)&&void 0!==a?a:null;return n=null!==n?n.slice(0,4):"",'\n            <li class="main-container--card"\n        data-modal-open>\n        <img class="card-poster"\n        data-id="'.concat(t.id,'" \n        src="').concat(null===t.poster_path?"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg":"".concat(c).concat(t.poster_path),'"\n        alt="').concat(t.original_name,'" loading="lazy">\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="').concat(t.id,'">').concat(t.original_title.toUpperCase()||t.title.toUpperCase()||t.title.toUpperCase(),'</h2>\n        <p class="card-info"> ').concat(u(t.genre_ids)," | ").concat(n," </p>\n         </div>\n    </li>")})).join("");s.default.containerBox.innerHTML=e}function d(t){var e=t.map((function(t){var e,a,n=null!==(a=null!==(e=t.release_date)&&void 0!==e?e:t.first_air_date)&&void 0!==a?a:null;return n=null!==n?n.slice(0,4):"",t.poster_path?'\n        <li class="main-container--card"\n        data-modal-open>\n          <img class="card-poster"\n        data-id="'.concat(t.id,'" \n        src="').concat(c).concat(t.poster_path,'" \n        alt="').concat(t.original_name,'" loading="lazy">\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="').concat(t.id,'">').concat(t.original_title.toUpperCase()||t.title.toUpperCase()||t.title.toUpperCase(),'</h2>\n        <p class="card-info"> ').concat(u(t.genre_ids)," | ").concat(n,' <span class="card-rating"> ').concat(t.vote_average.toFixed(1),"</span></p>\n         </div>\n    </li>"):'\n        <li class="main-container--card"\n        data-modal-open>\n          <img class="card-poster"\n        data-id="'.concat(t.id,'" \n        src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" >\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="').concat(t.id,'">').concat(t.original_title.toUpperCase()||t.title.toUpperCase()||t.title.toUpperCase(),'</h2>\n        <p class="card-info"> ').concat(u(t.genre_ids)," | ").concat(n,' <span class="card-rating"> ').concat(t.vote_average.toFixed(1),"</span></p>\n         </div>\n    </li>")})).join("");s.default.moviesContainer.insertAdjacentHTML("beforeend",e)}function u(e){for(var a,n=t(i)(e).slice(0),o=localStorage.getItem("GENRES"),s=JSON.parse(o),c=t(r)(n),l=0;l<s.length;l++)for(var d=0;d<c.length;d++)c[d]===s[l].id&&(a=s[l].name,c[d]=a);return c.length>2||3===c.length?"".concat(c[0],", ").concat(c[1],", Other"):1===c.length?"".concat(c[0]):0===c.length?"No genre":"".concat(c[0],", ").concat(c[1])}})),o.register("q7ZX2",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return a.default(t)||n.default(t)||s.default(t,i)||r.default()};var a=c(o("8slrw")),n=c(o("7AJDX")),r=c(o("ifqQW")),s=c(o("auk6i"));function c(t){return t&&t.__esModule?t:{default:t}}})),o.register("8slrw",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return t}})),o.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),o.register("ifqQW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return n.default(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n.default(t,e)};var a,n=(a=o("8NIkP"))&&a.__esModule?a:{default:a}})),o.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}})),o.register("8nrFW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return a.default(t)||n.default(t)||r.default(t)||i.default()};var a=s(o("kMC0W")),n=s(o("7AJDX")),i=s(o("8CtQK")),r=s(o("auk6i"));function s(t){return t&&t.__esModule?t:{default:t}}})),o.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return n.default(t)};var a,n=(a=o("8NIkP"))&&a.__esModule?a:{default:a}})),o.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("4LMMA",(function(t,a){function n(t){localStorage.setItem("MOVIE_LIST",JSON.stringify(t))}e(t.exports,"addCurrrentMoviesToLocalStorage",(function(){return n})),o("4Nugj")}))}();
//# sourceMappingURL=library.95f59e87.js.map
