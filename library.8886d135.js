!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(t,e){a[t]=e},e.parcelRequired7c6=o);var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(t){return l.default(t)||c.default(t)||s.default(t,i)||r.default()};var l=u(o("8slrw")),c=u(o("7AJDX")),r=u(o("ifqQW")),s=u(o("auk6i"));function u(t){return t&&t.__esModule?t:{default:t}}var f=o("8nrFW");function v(e){var n="No information";return e.overview&&(n=e.overview),'\n  <div class="modal-wrap">\n      \n      <div class="modal-container">\n        <div class="modal-left">\n      \n          <img src="'.concat(null===e.poster_path?"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg":"".concat("https://image.tmdb.org/t/p/w500").concat(e.poster_path),'"class="film-image" />\n      \n        </div>\n        <div class="modal-right">\n      \n          <h2 class="film-modal-title">').concat(e.original_title,'</h2>\n          <table class="film-info">\n            <tr>\n              <td class="table-name">Vote / Votes</td>\n             <td class="table-value"><span class="rating-value">').concat(e.vote_average.toFixed(1),"</span>/ ").concat(e.vote_count,'</td>\n             </tr>\n            <tr>\n              <td class="table-name">Popularity</td>\n              <td class="table-value">').concat(e.popularity.toFixed(1),'</td>\n            </tr>\n            <tr>\n              <td class="table-name">Original title</td>\n              <td class="table-value">').concat(e.original_title,'</td>\n            </tr>\n            <tr>\n              <td class="table-name">Genre</td>\n              <td class="table-value">').concat(function(e){for(var n,a=t(d)(e).slice(0),o=localStorage.getItem("GENRES"),l=JSON.parse(o),c=t(f)(a),i=0;i<l.length;i++)for(var r=0;r<c.length;r++)c[r]===l[i].id&&(n=l[i].name,c[r]=n);return 0===c.length?"":1===c.length?"".concat(c[0]):2===c.length?"".concat(c[0],", ").concat(c[1]):3===c.length?"".concat(c[0],", ").concat(c[1],", ").concat(c[2]):4===c.length?"".concat(c[0],", ").concat(c[1],", ").concat(c[2],", ").concat(c[3]):5===c.length?"".concat(c[0],", ").concat(c[1],", ").concat(c[2],", ").concat(c[3],", ").concat(c[4]):void 0}(e.genre_ids),'</td>\n            </tr>\n          </table>\n<div class="modal-about">\n          <h3 class="about-title">About</h3>\n          <p class="about-desc">').concat(n,'</p>\n      </div>\n      <div class="modal-button">\n        <button class="btn watched-btn" type="button" data-addwatched>ADD TO WATCHED</button>\n         <button class="btn watched-btn is-hidden" type="button" data-removewatched>REMOVE FROM WATCHED</button>\n        <button class="btn queue-btn" type="button" data-addqueue>ADD TO QUEUE</button>\n        <button class="btn queue-btn is-hidden" type="button" data-removequeue>REMOVE FROM QUEUE</button>\n      </div>\n          </div>\n        </div>\n      </div>  \n    </div>')}var b=o("4Nugj"),m=o("FH8Gh"),g="";function p(t,e){var n=function(t){var e=localStorage.getItem(t);return JSON.parse(e)}(e);n.find((function(e){if(e.id===t){var n=v(e);b.default.modalContent.insertAdjacentHTML("beforeend",n)}}))}g||document.removeEventListener("click",m.escExit),b.default.containerBox.addEventListener("click",(function(t){if("IMG"===t.target.nodeName||"H2"===t.target.nodeName){b.default.modal.classList.remove("is-hidden");var e=Number(t.target.dataset.id);p(e,"WATCHED_LIST"),""===b.default.modalContent.textContent&&p(e,"QUEUE_LIST"),addListener(e),document.body.style.overflowY="hidden"}(g=!0)&&document.addEventListener("keydown",m.escExit)})),b.default.onBtnClose.addEventListener("click",m.closeModal),b.default.modal.addEventListener("click",m.outOfModal)}();
//# sourceMappingURL=library.8886d135.js.map
