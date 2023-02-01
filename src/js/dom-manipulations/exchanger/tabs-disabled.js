function toggleTabsDisabled() {
  const disabledTabs = document.querySelectorAll('.block-tab__navigation__credentials .block-tab__title');

  return (isDesktop = false) => {
    [...disabledTabs].forEach(el => {
      if (isDesktop) {
        el.removeAttribute("disabled");
      } else {
        el.setAttribute("disabled", "");
      }
    });
  };
}

export default toggleTabsDisabled;
