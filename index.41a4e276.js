var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;function d(e){let t="No information";return e.overview&&(t=e.overview),`\n  <div class="modal-wrap">\n      \n      <div class="modal-container">\n        <div class="modal-left">\n      \n          <img src="${null===e.poster_path?"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg":`https://image.tmdb.org/t/p/w500${e.poster_path}`}"class="film-image" />\n      \n        </div>\n        <div class="modal-right">\n      \n          <h2 class="film-modal-title">${e.original_title}</h2>\n          <table class="film-info">\n            <tr>\n              <td class="table-name">Vote / Votes</td>\n             <td class="table-value"><span class="rating-value">${e.vote_average.toFixed(1)}</span>/ ${e.vote_count}</td>\n             </tr>\n            <tr>\n              <td class="table-name">Popularity</td>\n              <td class="table-value">${e.popularity.toFixed(1)}</td>\n            </tr>\n            <tr>\n              <td class="table-name">Original title</td>\n              <td class="table-value">${e.original_title}</td>\n            </tr>\n            <tr>\n              <td class="table-name">Genre</td>\n              <td class="table-value">${function([...e]){const t=localStorage.getItem("GENRES"),n=JSON.parse(t);let a;const d=[...e];for(let e=0;e<n.length;e++)for(let t=0;t<d.length;t++)d[t]===n[e].id&&(a=n[e].name,d[t]=a);return 0===d.length?"":1===d.length?`${d[0]}`:2===d.length?`${d[0]}, ${d[1]}`:3===d.length?`${d[0]}, ${d[1]}, ${d[2]}`:4===d.length?`${d[0]}, ${d[1]}, ${d[2]}, ${d[3]}`:5===d.length?`${d[0]}, ${d[1]}, ${d[2]}, ${d[3]}, ${d[4]}`:void 0}(e.genre_ids)}</td>\n            </tr>\n          </table>\n<div class="modal-about">\n          <h3 class="about-title">About</h3>\n          <p class="about-desc">${t}</p>\n      </div>\n      <div class="modal-button">\n        <button class="btn watched-btn" type="button" data-addwatched>ADD TO WATCHED</button>\n         <button class="btn watched-btn is-hidden" type="button" data-removewatched>REMOVE FROM WATCHED</button>\n        <button class="btn queue-btn" type="button" data-addqueue>ADD TO QUEUE</button>\n        <button class="btn queue-btn is-hidden" type="button" data-removequeue>REMOVE FROM QUEUE</button>\n      </div>\n          </div>\n        </div>\n      </div>  \n    </div>`}null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var d={id:e,exports:{}};return t[e]=d,a.call(d.exports,d,d.exports),d.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var i=a("krGWQ"),s=a("jAPMa");a("krGWQ");let l=[],o=[];function c(e){const t=document.querySelector("[data-addwatched]"),n=document.querySelector("[data-removewatched]"),a=document.querySelector("[data-addqueue]"),d=document.querySelector("[data-removequeue]"),i=function(e){const t=localStorage.getItem("WATCHED_LIST");return JSON.parse(t).find((t=>t.id===e))}(e),s=function(e){const t=localStorage.getItem("QUEUE_LIST");return JSON.parse(t).find((t=>t.id===e))}(e);function c(t){console.log("hi"),t.preventDefault();const n=r(e);s||(o.push(n),a.classList.add("is-hidden"),d.classList.remove("is-hidden"),d.addEventListener("click",u)),localStorage.setItem("QUEUE_LIST",JSON.stringify(o))}function u(t){a.classList.remove("is-hidden"),d.classList.add("is-hidden"),a.addEventListener("click",c);const n=r(e),i=localStorage.getItem("QUEUE_LIST"),s=JSON.parse(i).findIndex((e=>e.id===n.id));o.splice(s,1),localStorage.setItem("QUEUE_LIST",JSON.stringify(o))}function m(a){a.preventDefault();const d=r(e);i||(l.push(d),t.classList.add("is-hidden"),n.classList.remove("is-hidden"),n.addEventListener("click",v)),localStorage.setItem("WATCHED_LIST",JSON.stringify(l))}function v(a){t.classList.remove("is-hidden"),n.classList.add("is-hidden"),t.addEventListener("click",m);const d=r(e),i=localStorage.getItem("WATCHED_LIST"),s=JSON.parse(i).findIndex((e=>e.id===d.id));l.splice(s,1),localStorage.setItem("WATCHED_LIST",JSON.stringify(l))}i?(t.classList.add("is-hidden"),n.classList.remove("is-hidden"),n.addEventListener("click",v)):t.addEventListener("click",m),s?(a.classList.add("is-hidden"),d.classList.remove("is-hidden"),d.addEventListener("click",u)):a.addEventListener("click",c)}function r(e){const t=localStorage.getItem("MOVIE_LIST");return JSON.parse(t).find((t=>t.id===e))}localStorage.setItem("WATCHED_LIST",JSON.stringify(l)),localStorage.setItem("QUEUE_LIST",JSON.stringify(o));let u="";function m(){const e=localStorage.getItem("MOVIE_LIST");return JSON.parse(e)}u||document.removeEventListener("click",s.escExit),i.default.onBtnOpen.addEventListener("click",(function(e){if("IMG"===e.target.nodeName||"H2"===e.target.nodeName){i.default.modal.classList.remove("is-hidden");const n=Number(e.target.dataset.id);t=n,m().find((e=>{if(e.id===t){const t=d(e);i.default.modalContent.insertAdjacentHTML("beforeend",t)}})),c(n)}var t;u=!0,u&&document.addEventListener("keydown",s.escExit)})),i.default.onBtnClose.addEventListener("click",s.closeModal),i.default.modal.addEventListener("click",s.outOfModal),m();
//# sourceMappingURL=index.41a4e276.js.map
