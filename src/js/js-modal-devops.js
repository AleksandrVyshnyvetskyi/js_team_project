
// ==========================================================================
import { outOfModal, escExit, closeModal } from './closeModalFunction';
import confetti from 'canvas-confetti';

const modalOpen = document.querySelector('.modal-open');
const modalBox = document.querySelector('.modal-dev__box ');
const btnFooter = document.querySelectorAll('.footer__btn'); 
const closeBtn = document.querySelector('.modal-close');

btnFooter.forEach((button) => {
    button.addEventListener('click', (e) => {
        confetti(({ particleCount: 300, spread: 200, zIndex: 2021 }));
        e.preventDefault();
        modalOpen.classList.add('active');
        modalBox.classList.add('active');
    })
});

closeBtn.addEventListener('click',() => {

    modalOpen.classList.remove('active');
    modalBox.classList.remove('active');
    document.addEventListener('keydown', escExit);
});

document.addEventListener('click', (e) => {
    if(e.target === modalOpen) {
        modalOpen.classList.remove('active');
        modalBox.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        modalOpen.classList.remove('active');
        modalBox.classList.remove('active');
    }
});
// ==========================================================================