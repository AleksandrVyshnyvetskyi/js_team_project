export default {
  //form
  searchForm: document.querySelector('.header_input-wrap'),
  inputEl: document.querySelector('.header_input'),
  errorText: document.querySelector('.header_error-msg'),
  // galleryHome: document.querySelector(".main-container--card__box"),
  containerBox: document.querySelector(`.main-container--card__box`),
  containerCard: document.querySelector(`.main-container--card`),
  watchedList: document.querySelector('.header_btn-watched'),
  moviesContainer: document.querySelector('.main-container--card__box'),
  queueList: document.querySelector('.header_btn-queue'),
  loader: document.querySelector('.js-loader'),

  // MODAL REFS
  onBtnClose: document.querySelector('button[data-modal-close]'),
  onBtnOpen: document.querySelector('.main-container--card__box'),
  modal: document.querySelector('[data-modal]'),
  modalContainer: document.querySelector('.modal'),
  modalContent: document.querySelector('.modal-content'),
  //
};
