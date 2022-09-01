import { filmMarkup } from './render-modal';
import refs from './refs';
import { outOfModal, escExit, closeModal } from './closeModalFunction';
import { addListener } from './modal-buttons';

let ifOpen = '';

if (!ifOpen) {
  document.removeEventListener('click', escExit);
}

refs.containerBox.addEventListener('click', onModalOpen);
refs.onBtnClose.addEventListener('click', closeModal);
refs.modal.addEventListener('click', outOfModal);

function onModalOpen(e) {
  if (e.target.nodeName === 'IMG' || e.target.nodeName === 'H2') {
    refs.modal.classList.remove('is-hidden');
    const filmId = Number(e.target.dataset.id);

    getFilmById(filmId, 'MOVIE_LIST');
    // getFilmById(filmId, 'WATCHED_LIST');
    // getFilmById(filmId, 'QUEUE_LIST');
    // check(filmId);

    addListener(filmId);
    document.body.style.overflowY = 'hidden';
  }
  ifOpen = true;
  if (ifOpen) {
    document.addEventListener('keydown', escExit);
  }
}

// function check(id) {
//   const filmsMain = getFilmFromLocal('MOVIE_LIST');
//   const filmsWatched = getFilmFromLocal('WATCHED_LIST');
//   const filmsQueue = getFilmFromLocal('QUEUE_LIST');
//   filmsWatched.find(film => {
//     if (film.id === id) {
//       console.log('film', film);
//     }
//   });
//   filmsMain.find(film => {
//     if (film.id === id) {
//       console.log('film', film);
//     }
//   });

//   filmsQueue.find(film => {
//     if (film.id === id) {
//       console.log('film', film);
//     }
//   });
// }

function getFilmFromLocal(localKey) {
  const f = localStorage.getItem(localKey);
  const films = JSON.parse(f);
  return films;
}

function getFilmById(id, localKey) {
  const films = getFilmFromLocal(localKey);
  films.find(film => {
    if (film.id === id) {
      const markup = filmMarkup(film);
      refs.modalContent.insertAdjacentHTML('beforeend', markup);
    }
  });
}
