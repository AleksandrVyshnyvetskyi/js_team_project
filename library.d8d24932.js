!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=a.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},a.parcelRequired7c6=o),o.register("4y7rq",(function(a,n){t(a.exports,"renderFilmList",(function(){return S})),t(a.exports,"renderMoviesCard",(function(){return L}));var r=o("bpxeT"),i=o("q7ZX2"),c=o("8nrFW"),l=o("2TvXO"),s=o("dIxxU"),d=o("jcFG7"),u=o("1h2Gi"),p=o("4LMMA"),g=o("kvC6y"),v=o("4Nugj"),f="2994e3a31c3cad99fd99bf3fe61d916f",m="https://image.tmdb.org/t/p/w500",h=(document.querySelector(".main-container--card__box"),document.querySelector(".header_input"),new(0,u.default)),_=new(0,d.default);!function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(0,g.preloaderShowLonger)();var a=t||1;h.setPageNumber=a,h.fetchPopularMovie().then((function(t){_.setCurrentPage=a,_.setTotalPages=t.total_pages,_.setCallback=e,_.renderPagination(),(0,p.addCurrrentMoviesToLocalStorage)(t.results),S(t.results)}))}();var y,b=(y=e(r)(e(l).mark((function t(){var a;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(s).get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(f,"&language=en-US"));case 2:return S((a=t.sent).data.results),(0,p.addCurrrentMoviesToLocalStorage)(a.data.results),t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)}))),function(){return y.apply(this,arguments)});b();var w=function(){var t=e(r)(e(l).mark((function t(){var a;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(s).get("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(f,"&language=en-US"));case 2:a=t.sent,localStorage.setItem("GENRES",JSON.stringify(a.data.genres));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function S(e){v.default.containerBox.innerHTML="";var t=e.map((function(e){var t,a,n=null!==(a=null!==(t=e.release_date)&&void 0!==t?t:e.first_air_date)&&void 0!==a?a:null;return n=null!==n?n.slice(0,4):"",'\n            <li class="main-container--card"\n        data-modal-open>\n        <img class="card-poster"\n        data-id="'.concat(e.id,'" \n        src="').concat(e.poster_path?"".concat(m).concat(e.poster_path):"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",'"\n        alt="').concat(e.original_name,'" loading="lazy">\n        <div class="card-wrap">\n        <h2 class="card-title" data-id="').concat(e.id,'">').concat(e.original_title.toUpperCase()||e.title.toUpperCase(),'</h2>\n        <p class="card-info"> ').concat(x(e.genre_ids)," | ").concat(n," </p>\n         </div>\n    </li>")})).join("");v.default.containerBox.innerHTML=t}function L(e){var t=e.map((function(e){var t,a,n=null!==(a=null!==(t=e.release_date)&&void 0!==t?t:e.first_air_date)&&void 0!==a?a:null;return n=null!==n?n.slice(0,4):"",'\n        <li class="main-container--card"\n    data-modal-open>\n    <img class="card-poster"\n    data-id="'.concat(e.id,'" \n    src="').concat(e.poster_path?"".concat(m).concat(e.poster_path):"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",'"\n    alt="').concat(e.original_name,'" loading="lazy">\n    <div class="card-wrap">\n    <h2 class="card-title" data-id="').concat(e.id,'">').concat(e.original_title.toUpperCase()||e.title.toUpperCase(),'</h2>\n    <p class="card-info"> ').concat(x(e.genre_ids)," | ").concat(n,'<span class="card-rating"> ').concat(e.vote_average.toFixed(1),"</span></p>\n     </div>\n</li>")})).join("");v.default.moviesContainer.insertAdjacentHTML("beforeend",t)}function x(t){for(var a,n=e(i)(t).slice(0),r=localStorage.getItem("GENRES"),o=JSON.parse(r),l=e(c)(n),s=0;s<o.length;s++)for(var d=0;d<l.length;d++)l[d]===o[s].id&&(a=o[s].name,l[d]=a);return l.length>2?"".concat(l[0],", ").concat(l[1],", Other"):1===l.length?"".concat(l[0]):0===l.length?"No genre":"".concat(l[0],", ").concat(l[1])}w()}));var i=o("jcFG7"),c=o("4y7rq"),l=o("kvC6y"),s=new(0,i.default),d={watched:document.querySelector(".header_btn-watched"),queue:document.querySelector(".header_btn-queue"),containerMovie:document.querySelector(".main-container--card__box"),emptyPage:document.querySelector(".empty_page"),paginationPage:document.querySelector("#section__pagination")},u=localStorage.getItem("QUEUE_LIST"),p=JSON.parse(u),g=10,v=0;function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(0,l.preloaderShowLonger)();for(var t=e||1,a=[],n=1;n<=Math.ceil(p.length/g);n+=1){var r=g*n,o=n>1?g*(n-1):0;g*n>p.length&&(r=p.length),a[n]=p.slice(o,r)}v=a.length-1,d.containerMovie.innerHTML="",(0,c.renderMoviesCard)(a[t]),v>1&&(s.setCurrentPage=t,s.setTotalPages=v,s.setCallback=f,s.renderPagination())}d.queue.addEventListener("click",(function(e){if(e.preventDefault(),d.containerMovie.innerHTML="",d.queue.classList.add("current-btn"),d.watched.classList.remove("current-btn"),d.queue.classList.remove("simple-btn"),d.watched.classList.add("simple-btn"),0===p.length)return d.emptyPage.classList.add("visible"),void(d.paginationPage.style.display="none");try{f(),d.emptyPage.classList.remove("visible")}catch(e){console.log(e)}})),0===p.length&&(d.emptyPage.classList.add("visible"),d.paginationPage.style.display="none")}();
//# sourceMappingURL=library.d8d24932.js.map
