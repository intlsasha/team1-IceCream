import './sass/main.scss';
(() => {
  const refs = {
    openMenuBtn: document.querySelector("[menu-open]"),
    closeMenuBtn: document.querySelector("[menu-close]"),
    menu: document.querySelector("[menu]"),
  };

  refs.openMenulBtn.addEventListener("click", toggleMenu);
  refs.closeMenulBtn.addEventListener("click", toggleMenu);

  function toggleModal() {
    refs.menu.classList.toggle("is-hidden");
  }
})();