export { outOfModal, escExit, closeModal };
import refs from './refs';

function closeModal() {
  refs.modal.classList.add('is-hidden');
  refs.modalContent.innerHTML = '';
  document.body.style.overflowY = '';
  // document.removeEventListener('keydown', escExit);
}

function outOfModal(e) {
  if (e.target === refs.modal) {
    closeModal();
  }
}

function escExit({ code }) {
  if (code === 'Escape') {
    closeModal();
  }
}
