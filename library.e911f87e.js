!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var r=a("jcFG7"),i=a("4y7rq"),o=a("kvC6y"),l=new(0,r.default),s={watched:document.querySelector(".header_btn-watched"),queue:document.querySelector(".header_btn-queue"),containerMovie:document.querySelector(".main-container--card__box"),emptyPage:document.querySelector(".empty_page"),paginationPage:document.querySelector("#section__pagination")},c=localStorage.getItem("WATCHED_LIST"),d=JSON.parse(c),u=10,g=0;function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(0,o.preloaderShowLonger)();for(var t=e||1,n=[],a=1;a<=Math.ceil(d.length/u);a+=1){var r=u*a,c=a>1?u*(a-1):0;u*a>d.length&&(r=d.length),n[a]=d.slice(c,r)}g=n.length-1,s.containerMovie.innerHTML="",(0,i.renderMoviesCard)(n[t]),g>1&&(l.setCurrentPage=t,l.setTotalPages=g,l.setCallback=p,l.renderPagination())}s.watched.addEventListener("click",(function(e){if(e.preventDefault(),s.containerMovie.innerHTML="",s.watched.classList.add("current-btn"),s.queue.classList.remove("current-btn"),s.queue.classList.add("simple-btn"),s.watched.classList.remove("simple-btn"),0===d.length)return s.paginationPage.style.display="none",s.emptyPage.classList.add("visible");try{p(),s.emptyPage.classList.remove("visible")}catch(e){console.log(e)}})),0===d.length&&(s.emptyPage.classList.add("visible"),s.paginationPage.style.display="none"),s.emptyPage.classList.remove("visible"),p()}();
//# sourceMappingURL=library.e911f87e.js.map