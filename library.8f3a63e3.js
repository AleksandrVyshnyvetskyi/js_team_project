!function(){function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},o=n.parcelRequired7c6;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in a){var n=a[t];delete a[t];var o={id:t,exports:{}};return e[t]=o,n.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,n){a[t]=n},n.parcelRequired7c6=o);var c=o("q7ZX2"),d=o("8nrFW");function l(n){var e="No information";return n.overview&&(e=n.overview),'\n  <div class="modal-wrap">\n      \n      <div class="modal-container">\n        <div class="modal-left">\n      \n          <img src="'.concat(null===n.poster_path?"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg":"".concat("https://image.tmdb.org/t/p/w500").concat(n.poster_path),'"class="film-image" />\n      \n        </div>\n        <div class="modal-right">\n      \n          <h2 class="film-modal-title">').concat(n.original_title,'</h2>\n          <table class="film-info">\n            <tr>\n              <td class="table-name">Vote / Votes</td>\n             <td class="table-value"><span class="rating-value">').concat(n.vote_average.toFixed(1),"</span>/ ").concat(n.vote_count,'</td>\n             </tr>\n            <tr>\n              <td class="table-name">Popularity</td>\n              <td class="table-value">').concat(n.popularity.toFixed(1),'</td>\n            </tr>\n            <tr>\n              <td class="table-name">Original title</td>\n              <td class="table-value">').concat(n.original_title,'</td>\n            </tr>\n            <tr>\n              <td class="table-name">Genre</td>\n              <td class="table-value">').concat(function(n){for(var e,a=t(c)(n).slice(0),o=localStorage.getItem("GENRES"),l=JSON.parse(o),i=t(d)(a),r=0;r<l.length;r++)for(var s=0;s<i.length;s++)i[s]===l[r].id&&(e=l[r].name,i[s]=e);return 0===i.length?"":1===i.length?"".concat(i[0]):2===i.length?"".concat(i[0],", ").concat(i[1]):3===i.length?"".concat(i[0],", ").concat(i[1],", ").concat(i[2]):4===i.length?"".concat(i[0],", ").concat(i[1],", ").concat(i[2],", ").concat(i[3]):5===i.length?"".concat(i[0],", ").concat(i[1],", ").concat(i[2],", ").concat(i[3],", ").concat(i[4]):void 0}(n.genre_ids),'</td>\n            </tr>\n          </table>\n<div class="modal-about">\n          <h3 class="about-title">About</h3>\n          <p class="about-desc">').concat(e,'</p>\n      </div>\n      <div class="modal-button">\n        <button class="btn watched-btn" type="button" data-addwatched>ADD TO WATCHED</button>\n         <button class="btn watched-btn is-hidden" type="button" data-removewatched>REMOVE FROM WATCHED</button>\n        <button class="btn queue-btn" type="button" data-addqueue>ADD TO QUEUE</button>\n        <button class="btn queue-btn is-hidden" type="button" data-removequeue>REMOVE FROM QUEUE</button>\n      </div>\n          </div>\n        </div>\n      </div>  \n    </div>')}var i=o("4Nugj"),r=o("FH8Gh"),s="";function u(t,n){var e=function(t){var n=localStorage.getItem(t);return JSON.parse(n)}(n);e.find((function(n){if(n.id===t){var e=l(n);i.default.modalContent.insertAdjacentHTML("beforeend",e)}}))}s||document.removeEventListener("click",r.escExit),i.default.containerBox.addEventListener("click",(function(t){if("IMG"===t.target.nodeName||"H2"===t.target.nodeName){i.default.modal.classList.remove("is-hidden");var n=Number(t.target.dataset.id);u(n,"WATCHED_LIST"),""===i.default.modalContent.textContent&&u(n,"QUEUE_LIST"),addListener(n),document.body.style.overflowY="hidden"}(s=!0)&&document.addEventListener("keydown",r.escExit)})),i.default.onBtnClose.addEventListener("click",r.closeModal),i.default.modal.addEventListener("click",r.outOfModal)}();
//# sourceMappingURL=library.8f3a63e3.js.map
