var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){t[e]=r},e.parcelRequired7c6=n);var o=n("k0Ust");n("krGWQ"),document.body.onload=function(){setTimeout((function(){const e=document.getElementById("preloader");e.classList.contains("done")||e.classList.add("done")}),800)};var a=n("b5rV1"),i=n("2nhTy"),s=n("7me8F");const d={searchForm:document.querySelector(".header_input-wrap"),inputEl:document.querySelector(".header_input"),moviesContainer:document.querySelector(".main-container--card__box"),errorText:document.querySelector(".header_error-msg")},l=new(0,s.default),u=new(0,i.default);async function c(e=!1){const r=e||1;l.setPageNumber=r;try{await l.fetchSearchMovie().then((e=>{if(0===e.total_pages)return d.errorText.classList.remove("is-hidden");u.setCurrentPage=r,u.setTotalPages=e.total_pages,u.setCallback=c,u.renderPagination(),d.moviesContainer.innerHTML="",d.errorText.classList.add("is-hidden"),(0,o.renderMoviesCard)(e.results),(0,a.addCurrrentMoviesToLocalStorage)(e.results),console.log(e.total_pages)}))}catch(e){console.log(e)}}d.searchForm.addEventListener("submit",(function(e){if(e.preventDefault(),l.inputQuery=e.currentTarget.elements.query.value.trim(),""===d.inputEl.value)return d.errorText.classList.remove("is-hidden");d.errorText.classList.add("is-hidden"),c(),d.inputEl.value=""}));
//# sourceMappingURL=index.8e8f22f7.js.map
