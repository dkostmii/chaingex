/**
 * @typedef {import('../files/scroll/gotoblock').gotoBlock} gotoBlock
 */

/**
 * Configuration for smooth scrolling, when clicking on links.
 * 
 * Those are actually parameters for {@link gotoBlock} function.
 */
const scrollDispatcherConfig = {
  /**
   * Controls the speed of scrolling.
   * 
   * `speed: 1` - scrolls instantly
   * 
   * `speed: 2000` - very smooth
   */
  speed: 700,
  noHeader: false,
  offsetTop: 0,
};

export default scrollDispatcherConfig;