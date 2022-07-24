(() => {
  const refs = {
    openNavBtn: document.querySelector('[nav-btn]'),
    dropdown: document.querySelector('[dropdown]'),
    mobileNavWrap: document.querySelector('[mobile-nav-wrap]'),
    body: document.querySelector('[body]'),
  };

  refs.openNavBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.dropdown.classList.toggle('hidden-dropdown');
    refs.openNavBtn.classList.toggle('opened');
    refs.mobileNavWrap.classList.toggle('active');
    refs.body.classList.toggle('noscroll');
  }
})();
