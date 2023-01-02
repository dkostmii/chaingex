/**
 * Sets the `@media` query for checking if screen is desktop-sized.
 * 
 * **INFO:** `min-width` is equal to *expanded value* of the `$pc` variable set in `src/scss/style.scss`.
 * 
 * To get an *expanded value*, use DevTools to find some element styled with `@media` query with `$pc` variable used.
 * 
 * @constant desktopMedia
 * @type {string}
 */
const desktopMedia = '(min-width: 78.75em)';

/**
 * Moves `.nav-plus-button` element from `.header` to `.header__container` element, if {@link desktopMedia} matches.
 * 
 * Otherwise, returns `.nav-plus-button` element back to `.header`.
 * 
 * This function also add .background to header. See `src/scss/background.scss`.
 */
export default function headerDesktop() {
  const header = document.querySelector('.wrapper > .header');
  const headerContainer = header.querySelector('.header__container');

  const mediaResult = window.matchMedia(desktopMedia);

  const moveToContainer = () => {
    const navPlusButton = header.querySelector('.nav-plus-button');
    header.removeChild(navPlusButton);
    headerContainer.appendChild(navPlusButton);
  }

  const moveToHeader = () => {
    const navPlusButton = headerContainer.querySelector('.nav-plus-button');
    headerContainer.removeChild(navPlusButton);
    header.appendChild(navPlusButton);
  }

  header.classList.add('background');

  if (mediaResult.matches) {
    header.classList.remove('background');
    moveToContainer();
  }

  mediaResult.addEventListener('change', e => {
    // Desktop
    if (e.matches) {
      header.classList.remove('background');
      moveToContainer();
    // Tablet / Mobile
    } else {
      header.classList.add('background');
      moveToHeader();
    }
  });
}
