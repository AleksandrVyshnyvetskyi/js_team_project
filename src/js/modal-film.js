import { filmMarkup } from './render-modal';

const refs = {
  onBtnClose: document.querySelector('button[data-modal-close]'),
  //   onBtnOpen: document.querySelector('button[data-modal-open]'),
  onBtnOpen: document.querySelector('.main-container--card__box'),
  modal: document.querySelector('[data-modal]'),
  modalContainer: document.querySelector('.modal'),
  modalContent: document.querySelector('.modal-content'),
};

refs.onBtnOpen.addEventListener('click', onModalOpen);
refs.onBtnClose.addEventListener('click', onModalClose);

function onModalOpen(e) {
  if (e.target.nodeName === 'IMG' || e.target.nodeName === 'H2') {
    refs.modal.classList.remove('is-hidden');
    const filmId = Number(e.target.dataset.id);

    getFilmById(filmId);
  }
}

function onModalClose() {
  refs.modal.classList.add('is-hidden');
  refs.modalContent.innerHTML = '';
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

function transformId([...arr]) {
  const g = localStorage.getItem('GENRES');
  const genres = JSON.parse(g);
  let genreName;
  const array = [...arr];
  //   console.log(genres);
  for (let i = 0; i < genres.length; i++) {
    // console.log(genres[i]);
    for (let x = 0; x < array.length; x++) {
      if (array[x] === genres[i].id) {
        genreName = genres[i].name;
        array[x] = genreName;
      }
    }
  }
  console.log(`${array[0]}, ${array[1]}, ${array[2]}`);

  return `${array[0]}, ${array[1]}`;
}
// transformId([18, 90, 28]);
