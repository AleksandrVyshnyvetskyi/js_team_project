!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o);var a=o("bpxeT"),i=o("2TvXO"),s=o("dI30Z");o("4Nugj"),document.body.onload=function(){setTimeout((function(){var e=document.getElementById("preloader");e.classList.contains("done")||e.classList.add("done")}),800)};var u=o("4LMMA"),d=o("jcFG7"),l=o("1h2Gi"),c={searchForm:document.querySelector(".header_input-wrap"),inputEl:document.querySelector(".header_input"),moviesContainer:document.querySelector(".main-container--card__box"),errorText:document.querySelector(".header_error-msg")},f=new(0,l.default),p=new(0,d.default);function v(){return h.apply(this,arguments)}function h(){return h=e(a)(e(i).mark((function r(){var t,n,o=arguments;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]&&o[0],n=t||1,f.setPageNumber=n,e.prev=3,e.next=6,f.fetchSearchMovie().then((function(e){if(0===e.total_pages)return c.errorText.classList.remove("is-hidden");p.setCurrentPage=n,p.setTotalPages=e.total_pages,p.setCallback=v,p.renderPagination(),m(),c.errorText.classList.add("is-hidden"),(0,s.renderMoviesCard)(e.results),(0,u.addCurrrentMoviesToLocalStorage)(e.results),console.log(e.total_pages)}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.log(e.t0);case 11:return e.prev=11,e.finish(11);case 13:case"end":return e.stop()}}),r,null,[[3,8,11,13]])}))),h.apply(this,arguments)}function m(){c.moviesContainer.innerHTML=""}c.searchForm.addEventListener("submit",(function(e){if(e.preventDefault(),f.inputQuery=e.currentTarget.elements.query.value.trim(),""===c.inputEl.value)return c.errorText.classList.remove("is-hidden");c.errorText.classList.add("is-hidden"),v(),c.inputEl.value=""}))}();
//# sourceMappingURL=index.12c40ea1.js.map
