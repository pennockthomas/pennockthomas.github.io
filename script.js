// The only script on the page: the full-screen menu.
(() => {
  const button = document.querySelector('.bar__menu');
  const menu = document.getElementById('menu');

  function setOpen(open) {
    button.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  }

  button.addEventListener('click', () => setOpen(menu.hidden));
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menu.hidden) {
      setOpen(false);
      button.focus();
    }
  });
})();
