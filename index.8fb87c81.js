!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a);var o=a("bpxeT"),c=a("q7ZX2"),i=a("8nrFW"),s=a("2TvXO"),u=a("dIxxU"),l=a("4LMMA"),d={searchForm:document.querySelector(".header_input-wrap"),inputEl:document.querySelector(".header_input"),moviesContainer:document.querySelector(".main-container--card__box"),errorText:document.querySelector(".header_error-msg")},p="",f="https://api.themoviedb.org/3/search/movie",h="2994e3a31c3cad99fd99bf3fe61d916f";function m(e){return g.apply(this,arguments)}function g(){return(g=e(o)(e(s).mark((function t(r){return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(u).get("".concat(f,"?api_key=").concat(h,"&language=en-US&query=").concat(r)).then((function(e){return e.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(){return(v=e(o)(e(s).mark((function t(r){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),p=r.currentTarget.elements.query.value.trim(),d.errorText.classList.add("is-hidden"),""!==p){e.next=5;break}return e.abrupt("return",d.errorText.classList.remove("is-hidden"));case 5:return e.prev=5,e.next=8,m(p);case 8:if(0!==(n=e.sent).total_pages){e.next=11;break}return e.abrupt("return",d.errorText.classList.remove("is-hidden"));case 11:b(),d.errorText.classList.add("is-hidden"),x(n.results),(0,l.addCurrrentMoviesToLocalStorage)(n.results),console.log(n.results),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(5),console.log(e.t0);case 21:d.inputEl.value="";case 22:case"end":return e.stop()}}),t,null,[[5,18]])})))).apply(this,arguments)}function x(t){var r=t.map((function(t){return'\n            <li class="main-container--card">\n            <img src = "https://image.tmdb.org/t/p/w500'.concat(t.poster_path,'"\n            class = "film-poster"\n            alt="').concat(t.original_title,'" loading="lazy"\n             />\n            <div class="film-info">\n            <h3 class="film-title">').concat(t.original_title.toUpperCase(),'</h3>\n            <p class="more-info">').concat(function(t){for(var r,n=e(c)(t).slice(0),a=localStorage.getItem("GENRES"),o=JSON.parse(a),s=e(i)(n),u=0;u<o.length;u++)for(var l=0;l<s.length;l++)s[l]===o[u].id&&(r=o[u].name,s[l]=r);if(s.length>3)return"".concat(s[0],", ").concat(s[1],", Other");if(s.length>2)return"".concat(s[0],", ").concat(s[1],", ").concat(s[2]);if(s.length>1)return"".concat(s[0],", ").concat(s[1]);return"".concat(s[0])}(t.genre_ids)," | ").concat(t.release_date.slice(0,4),"</p>\n            </div>\n            </li> ")})).join("");d.moviesContainer.insertAdjacentHTML("beforeend",r)}function b(){d.moviesContainer.innerHTML=""}d.searchForm.addEventListener("submit",(function(e){return v.apply(this,arguments)}))}();
//# sourceMappingURL=index.8fb87c81.js.map
