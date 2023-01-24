function hideSpinner() {
  const preloader = document.querySelector('.preloader');

  document.body.classList.remove('lock-scroll');
  preloader.classList.remove('show');

  preloader.remove();
}

export default hideSpinner;
