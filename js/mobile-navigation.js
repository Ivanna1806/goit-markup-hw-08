(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
(() => {
  const refs = {
    openNavBtn: document.querySelector('[nav-btn]'),
    dropdown: document.querySelector('[dropdown]'),
    mobileNavWrap: document.querySelector('[mobile-nav-wrap]'),
  };

  refs.openNavBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.dropdown.classList.toggle('hidden-dropdown');
    refs.openNavBtn.classList.toggle('opened');
    refs.mobileNavWrap.classList.toggle('active');
  }
})();
