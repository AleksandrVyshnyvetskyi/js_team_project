import '../sass/_loader.scss';
import refs from "./refs";

// приховати loader
// export function hideLoader() {
//   refs.loaderRef.loader.classList.add('is-hidden');
// }
// // // показати loader
// export function showLoader() {
//   refs.loaderRef.loader.classList.remove('is-hidden');
// }


document.body.onload = function () {
    setTimeout(function () {
        const preloader = document.getElementById('preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 800);
}