function toggleExchangerBlockWrapper(isDesktop = false) {
  const exchangerBlock = document.querySelector('.exchanger__block');
  const exchanger = document.querySelector('.exchanger');
  const exchangerContainer = document.querySelector('.exchanger__container');
  
  if (isDesktop) {
    const elements = document.querySelectorAll('.exchanger-block__tab');

    [...elements].forEach(el => {
      const wrapper = el.parentElement;
      el.dataset.model = wrapper.dataset.model;
      el.dataset.modelvalue = wrapper.dataset.modelvalue;

      wrapper.removeChild(el);
      wrapper.parentElement.removeChild(wrapper);
      exchangerBlock.appendChild(el);
    });

    exchangerBlock.parentElement.removeChild(exchangerBlock);
    exchangerBlock.classList.add('desktop');
    exchangerContainer.appendChild(exchangerBlock);
  } else {
    const elements = document.querySelectorAll('.exchanger-block__tab');
    while (exchangerBlock.firstChild) {
      exchangerBlock.removeChild(exchangerBlock.firstChild);
    }

    [...elements].forEach(el => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('exchanger__block__wrapper');
      wrapper.appendChild(el);
      wrapper.dataset.model = el.dataset.model;
      wrapper.dataset.modelvalue = el.dataset.modelvalue;

      exchangerBlock.appendChild(wrapper);
    });

    exchangerBlock.parentElement.removeChild(exchangerBlock);
    exchangerBlock.classList.remove('desktop');
    exchanger.appendChild(exchangerBlock);
  }
}

export default toggleExchangerBlockWrapper;
