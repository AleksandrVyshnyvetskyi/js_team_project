function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o);var a=o("2shzp"),i=o("k0Ust");document.body.onload=function(){setTimeout((function(){const e=document.getElementById("preloader");e.classList.contains("done")||e.classList.add("done")}),800)};const s={searchForm:document.querySelector(".header_input-wrap"),inputEl:document.querySelector(".header_input"),moviesContainer:document.querySelector(".main-container--card__box"),errorText:document.querySelector(".header_error-msg")};let d="";s.searchForm.addEventListener("submit",(async function(r){if(r.preventDefault(),d=r.currentTarget.elements.query.value.trim(),s.errorText.classList.add("is-hidden"),""===d)return s.errorText.classList.remove("is-hidden");try{const r=await async function(r){return await e(a).get(`https://api.themoviedb.org/3/search/movie?api_key=2994e3a31c3cad99fd99bf3fe61d916f&language=en-US&query=${r}`).then((e=>e.data))}(d);if(0===r.total_pages)return s.errorText.classList.remove("is-hidden");s.moviesContainer.innerHTML="",s.errorText.classList.add("is-hidden"),(0,i.renderMoviesCard)(r.results),addCurrrentMoviesToLocalStorage(r.results),console.log(r.results)}catch(e){console.log(e)}s.inputEl.value=""}));
//# sourceMappingURL=index.697f1ce7.js.map