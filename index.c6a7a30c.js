var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequired7c6;function l(t){let e="No information";t.overview&&(e=t.overview);return`\n  <div class="container">\n      \n      <div class="modal-container">\n        <div class="modal-left">\n      \n          <img src="https://image.tmdb.org/t/p/w500${t.poster_path}" alt="${t.original_title}" class="film-image" />\n      \n        </div>\n        <div class="modal-right">\n      \n          <h2 class="film-modal-title">${t.original_title}</h2>\n          <table class="film-info">\n            <tr>\n              <td class="table-name">Vote / Votes</td>\n             <td class="table-value"><span class="rating-value">${t.vote_average.toFixed(1)}</span>/ ${t.vote_count}</td>\n             </tr>\n            <tr>\n              <td class="table-name">Popularity</td>\n              <td class="table-value">${t.popularity.toFixed(1)}</td>\n            </tr>\n            <tr>\n              <td class="table-name">Original title</td>\n              <td class="table-value">${t.original_title}</td>\n            </tr>\n            <tr>\n              <td class="table-name">Genre</td>\n              <td class="table-value">${function([...t]){const e=localStorage.getItem("GENRES"),n=JSON.parse(e);let a;const l=[...t];for(let t=0;t<n.length;t++)for(let e=0;e<l.length;e++)l[e]===n[t].id&&(a=n[t].name,l[e]=a);return 0===l.length?"":1===l.length?`${l[0]}`:2===l.length?`${l[0]}, ${l[1]}`:3===l.length?`${l[0]}, ${l[1]}, ${l[2]}`:4===l.length?`${l[0]}, ${l[1]}, ${l[2]}, ${l[3]}`:5===l.length?`${l[0]}, ${l[1]}, ${l[2]}, ${l[3]}, ${l[4]}`:void 0}(t.genre_ids)}</td>\n            </tr>\n          </table>\n<div class="modal-about">\n          <h3 class="about-title">About</h3>\n          <p class="about-desc">${e}</p>\n      </div>\n      <div class="modal-button">\n        <button class="btn watched-btn" type="button">ADD TO WATCHED</button>\n        <button class="btn queue-btn" type="button">ADD TO QUEUE</button>\n      </div>\n          </div>\n        </div>\n      </div>  \n    </div>`}null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var l={id:t,exports:{}};return e[t]=l,a.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequired7c6=a);var o=a("krGWQ");o=a("krGWQ");function d(){o.default.modal.classList.add("is-hidden"),o.default.modalContent.innerHTML="",document.removeEventListener("keydown",i)}function i({code:t}){"Escape"===t&&(d(),document.removeEventListener("keydown",i))}let s="";function r(){const t=localStorage.getItem("MOVIE_LIST");return JSON.parse(t)}s||document.removeEventListener("click",i),o.default.onBtnOpen.addEventListener("click",(function(t){if("IMG"===t.target.nodeName||"H2"===t.target.nodeName){o.default.modal.classList.remove("is-hidden");const n=Number(t.target.dataset.id);e=n,r().find((t=>{if(t.id===e){const e=l(t);o.default.modalContent.insertAdjacentHTML("beforeend",e)}}))}var e;s=!0,s&&document.addEventListener("keydown",i)})),o.default.onBtnClose.addEventListener("click",d),o.default.modal.addEventListener("click",(function(t){t.target===o.default.modal&&(d(),document.removeEventListener("keydown",i))})),r();
//# sourceMappingURL=index.c6a7a30c.js.map
