function toggleButtons(isDesktop = false) {
  const buttonsArr = Array.from(
    document.querySelectorAll('.block-tab__credentials .block-tab__buttons'));
  
  buttonsArr.forEach(buttonsEl => {
    if (isDesktop) {
      buttonsEl.classList.add('hidden');
    } else {
      buttonsEl.classList.remove('hidden');
    }
  });
}

export default toggleButtons;
