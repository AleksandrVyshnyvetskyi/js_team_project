const refs = {
    watched: document.querySelector('.js-button-watched'),
    queue: document.querySelector('.js-button-queue'),
};
let data = {
  page: 1,
  results: [],
};

let queueKey;
let watchedKey;
let isActiveKey;

refs.watched.addEventListener('click', onWatchedClick);
refs.queue.addEventListener('click', onQueueClick);

function onWatchedClick(e) {
  e.preventDefault();
  refs.watched.classList.add('header__button--active');
  refs.queue.classList.remove('header__button--active');
  localStorage.setItem('isActive', 'watched'); // Необходимо сверить название класса просмотренных фильмов
  watchedKey = localStorage.getItem('watched'); // Необходимо сверить название класса просмотренных фильмов
  if (watchedKey) {
    try {
      data = JSON.parse(watchedKey);
    } catch (e) {
      console.log(e);
    }
  }
  markup(data);
}

function onQueueClick(e) {
  e.preventDefault();
  refs.queue.classList.add('link-current');
  refs.watched.classList.remove('link-current');
  localStorage.setItem('isActive', 'queue'); // Необходимо проверить название класса фильмов из очереди
  queueKey = localStorage.getItem('queue'); // Необходимо проверить название класса фильмов из очереди
  if (queueKey) {
    try {
      data = JSON.parse(queueKey);
    } catch (e) {
      console.log(e);
    }
  }
  markup(data);
}

function libraryMarkup() {
//   refs.paginationList.style.display = 'none';
  localStorage.setItem('isActive', 'watched');
  isActiveKey = localStorage.getItem('isActive');

  if (isActiveKey) {
    if (isActiveKey === 'queue') {
      refs.queue.classList.add('header__button--active');
      refs.watched.classList.remove('header__button--active');
      queueKey = localStorage.getItem('queue');
      if (queueKey) {
        try {
          data = JSON.parse(queueKey);
        } catch (e) {
          console.log(e);
        }
      } else {
        localStorage.setItem('queue', JSON.stringify(data));
      }
    } else {
      refs.watched.classList.add('header__button--active');
      refs.queue.classList.remove('header__button--active');
      watchedKey = localStorage.getItem('watched');
      if (watchedKey) {
        try {
          data = JSON.parse(watchedKey);
        } catch (e) {
          console.log(e);
        }
      } else {
        localStorage.setItem('watched', JSON.stringify(data));
      }
    }
  } else {
    isActiveKey = 'watched';
    localStorage.setItem('isActive', isActiveKey);
    refs.watched.classList.add('header__button--active');
    refs.queue.classList.remove('header__button--active');
    localStorage.setItem('watched', JSON.stringify(data));
    localStorage.setItem('queue', JSON.stringify(data));
  }

  markup(data);
}

function markup(data) {
  refs.gallery.innerHTML = '';
  // if (data.results.length === 0) {
  //   return;
  // }
  if (data.results.length > 0) {
    galleryArrayMarkup(data);
    modalOpenOnClick();
  } else {
    refs.gallery.insertAdjacentHTML(
      'beforeend',
      ` <div class='gallery__text-wrapper'>
       <p class='error js-gallery__error-text' >
          Your Library is empty.
      </p>
      </div>`,
    );
  }
}

export { libraryMarkup, markup };