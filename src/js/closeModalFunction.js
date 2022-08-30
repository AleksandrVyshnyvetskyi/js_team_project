export { outOfModal, escExit, closeModal };
import refs from './refs';

function closeModal() {
  refs.modal.classList.add('is-hidden');
  refs.modalContent.innerHTML = '';
  document.removeEventListener('keydown', escExit);
}

function outOfModal(e) {
  if (e.target === refs.modal) {
    closeModal();
    document.removeEventListener('keydown', escExit);
  }
}

function escExit({ code }) {
  console.log(code);
  if (code === 'Escape') {
    closeModal();
    document.removeEventListener('keydown', escExit);
  }

  //   ifOpen = false;
}
