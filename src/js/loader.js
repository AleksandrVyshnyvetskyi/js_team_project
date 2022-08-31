//  Для встановлення Loader потрібно:
// 1. Експортуємо функції у свій файл.

//  import { preloaderShow, preloaderShowLonger, hidePreloader } from './loader';

// 2. Ставимо функцію запуску лоадеру на початок події (завантаження файлів, рендер бібліотеки, пошук фільмів).

// preloaderShowLonger();   - виключається сама  після 700мс після запуску,

// preloaderShow();  виключається тільки після запуску  функції hidePreloader();

// 3. Ставимо функцію зняття лоадеру на закінчення події (завантаження файлів, рендер бібліотеки, пошук фільмів)

// hidePreloader();


const preloader = document.getElementById('preloader');
const loadder = document.querySelector('.loader')

function preloaderShow() {
    preloader.classList.add('is-open');
    loadder.classList.add('is-open');
    };



  function hidePreloader() {
    preloader.classList.remove('is-open');
    loadder.classList.remove('is-open');
  };


  function preloaderShowLonger() {
    preloader.classList.add('is-open');
    loadder.classList.add('is-open');
    setTimeout(function () {
      preloader.classList.remove('is-open');
      loadder.classList.remove('is-open');
    }, 700);
};

  export { preloaderShow, preloaderShowLonger, hidePreloader };
