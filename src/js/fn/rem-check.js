/**
 * Prints console.warn() message if `1 rem` (a computed `font-size` CSS property of `<html>` element) is not precisely `16px`.
 */
function remCheck() {
  const html = document.documentElement;

  const { fontSize } = window.getComputedStyle(html);

  if (fontSize !== '16px') {
    console.warn(`Warning! 1 rem !== 16px. Got: ${fontSize}`);
  }
}

export default remCheck;