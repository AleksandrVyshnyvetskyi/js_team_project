!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a.register("1fiGW",(function(e,t){var n=a("jcFG7"),r=a("dI30Z"),i=new(0,n.default),o={watched:document.querySelector(".header_btn-watched"),queue:document.querySelector(".header_btn-queue"),containerMovie:document.querySelector(".main-container--card__box"),emptyPage:document.querySelector(".empty_page"),paginationPage:document.querySelector(".section__pagination")},l=localStorage.getItem("WATCHED_LIST"),c=JSON.parse(l),d=20,s=0;if(console.log(c),o.watched.addEventListener("click",(function(e){if(e.preventDefault(),o.watched.classList.add("current-btn"),o.queue.classList.remove("current-btn"),o.queue.classList.add("simple-btn"),o.watched.classList.remove("simple-btn"),!(c>1))return o.emptyPage.classList.add("visible");try{u(),o.emptyPage.classList.remove("visible")}catch(e){console.log(e)}})),null===c)return o.emptyPage.classList.add("visible"),void o.paginationPage.classList.add("hidden");function u(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=e||1,n=[],a=1;a<=Math.ceil(c.length/d);a+=1){var o=d*a,l=a>1?d*(a-1):0;d*a>c.length&&(o=c.length),n[a]=c.slice(l,o)}s=n.length-1,(0,r.renderMoviesCard)(n[t]),s>1&&(i.setCurrentPage=t,i.setTotalPages=s,i.setCallback=u,i.renderPagination())}u()})),a("1fiGW")}();
//# sourceMappingURL=library.5a2d6e09.js.map
