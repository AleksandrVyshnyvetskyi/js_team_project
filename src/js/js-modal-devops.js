
// ==========================================================================
const modalOpen = document.querySelector('.modal-open');
const modalBox = document.querySelector('.modal-dev__box ');
const btnFooter = document.querySelectorAll('.footer__btn'); 
const closeBtn = document.querySelector('.modal-close');

btnFooter.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modalOpen.classList.add('active');
        modalBox.classList.add('active');
    })
});

closeBtn.addEventListener('click',() => {
    modalOpen.classList.remove('active');
    modalBox.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === modalOpen) {
        modalOpen.classList.remove('active');
        modalBox.classList.remove('active');
    }
});
// ==========================================================================