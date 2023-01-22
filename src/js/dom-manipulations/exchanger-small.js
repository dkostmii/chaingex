const smallMedia = '(max-width: 78.75em)';

function swapExchangeBlockTabs() {
  const blockTabs = document.querySelectorAll('.exchanger-block__tab');

  const exchangerBlock = blockTabs[0].parentElement;  

  exchangerBlock.removeChild(blockTabs[0]);
  exchangerBlock.appendChild(blockTabs[0]);
}

function swapCopyInputFields() {
  const bodyElements = document.querySelectorAll('.block-tab__credentials > .block-tab__body');

  [...bodyElements].forEach(bodyEl => {
    const fieldEl = bodyEl.querySelector('.block-tab__form');
    const fieldMsgEl = fieldEl.nextElementSibling;

    if (!fieldMsgEl.classList.contains('message')) {
      throw new Error('Expected .message element.');
    }

    bodyEl.removeChild(fieldEl);
    bodyEl.appendChild(fieldEl);
    bodyEl.removeChild(fieldMsgEl);
    bodyEl.appendChild(fieldMsgEl);

    const labelsEl = bodyEl.querySelector('.block-tab__labels');
    bodyEl.removeChild(labelsEl);

    bodyEl.insertBefore(labelsEl, fieldEl);
  });
}

/**
 * Swaps Exchanger tabs with addresses and amounts, when media for tablets fires.
 */
function exchangerSmall() {
  const mediaResult = window.matchMedia(smallMedia);

  const mediaChangedListener = () => {
    swapExchangeBlockTabs();
    swapCopyInputFields();
  }

  if (mediaResult.matches) {
    mediaChangedListener();
  }

  mediaResult.addEventListener('change', mediaChangedListener);
}

export default exchangerSmall;