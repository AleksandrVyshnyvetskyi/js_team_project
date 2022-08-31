import { filmMarkup } from './render-modal';
import refs from './refs';
import { outOfModal, escExit, closeModal } from './closeModalFunction';

let ifOpen = '';

if (!ifOpen) {
  document.removeEventListener('click', escExit);
}

refs.onBtnOpen.addEventListener('click', onModalOpen);
refs.onBtnClose.addEventListener('click', closeModal);
refs.modal.addEventListener('click', outOfModal);

function onModalOpen(e) {
  if (e.target.nodeName === 'IMG' || e.target.nodeName === 'H2') {
    refs.modal.classList.remove('is-hidden');
    const filmId = Number(e.target.dataset.id);

    getFilmById(filmId);
  }
  ifOpen = true;
  if (ifOpen) {
    document.addEventListener('keydown', escExit);
  }
}

getFilmFromLocal();

function getFilmFromLocal() {
  const f = localStorage.getItem('MOVIE_LIST');
  const films = JSON.parse(f);
  return films;
}

function getFilmById(id) {
  const films = getFilmFromLocal();
  films.find(film => {
    if (film.id === id) {
      const markup = filmMarkup(film);
      refs.modalContent.insertAdjacentHTML('beforeend', markup);
    }
  });
}
