// Для встановлення Loader потрібно:
// 1. Експортуємо функції у свій файл.

//  import { preloaderShow, preloaderShowLonger, hidePreloader } from './loader';

// 2. Ставимо функцію запуску лоадеру на початок події (завантаження файлів, рендер бібліотеки, пошук фільмів).

// preloaderShowLonger();   - виключається сама  після 700мс після запуску,

// preloaderShow();  виключається тільки після запуску  функції hidePreloader();

// 3. Ставимо функцію зняття лоадеру на закінчення події (завантаження файлів, рендер бібліотеки, пошук фільмів)

// hidePreloader();


const preloader = document.getElementById('preloader');

function preloaderShow() {
    preloader.classList.remove('done');
    };
    
    
  
  function hidePreloader() {
    preloader.classList.add('done');
  };


  function preloaderShowLonger() {
    preloader.classList.remove('done');
    setTimeout(function () {
        preloader.classList.add('done');
    }, 700);
};
  
  export { preloaderShow, preloaderShowLonger, hidePreloader };
