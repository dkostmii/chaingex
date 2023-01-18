import remCheck from "../fn/rem-check.js";

window.addEventListener('load', () => {
  remCheck();
});

window.addEventListener('resize', () => {
  remCheck();
});
