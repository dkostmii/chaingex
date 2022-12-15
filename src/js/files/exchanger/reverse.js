const reverseHandler = () => {
    const reverseButton = document.querySelector('.reverse-btn');

    const sendField = document.querySelector('.field-wrapper.send'),
          receiveField = document.querySelector('.field-wrapper.receive');

    if(reverseButton && sendField && receiveField) {
        reverseButton.addEventListener('click', () => {
            const sendNumber = sendField.querySelector('input[name="number-input"]'),
                  sendNumberValue = sendNumber.value,
                  receiveNumber = receiveField.querySelector('input[name="number-input"]'),
                  receiveNumberValue = receiveNumber.value;

            const sendCurrency = sendField.querySelector('input[name="select-input"]'),
                  sendCurrencyValue = sendCurrency.value,
                  sendCurrencyNode = sendField.querySelector('.field-select__value'),
                  receiveCurrency = receiveField.querySelector('input[name="select-input"]'),
                  receiveCurrencyValue = receiveCurrency.value,
                  receiveCurrencyNode = receiveField.querySelector('.field-select__value');

            const exSendInput = sendField.querySelector('input[name="ex-send"]'),
                  exReceiveInput = receiveField.querySelector('input[name="ex-receive"]');

            sendNumber.value = receiveNumberValue;
            receiveNumber.value = sendNumberValue;

            sendCurrency.value = receiveCurrencyValue;
            receiveCurrency.value = sendCurrencyValue;

            sendCurrencyNode.innerHTML = receiveCurrencyValue;
            receiveCurrencyNode.innerHTML = sendCurrencyValue;

            exSendInput.value = `${receiveNumberValue} | ${receiveCurrencyValue}`;
            exReceiveInput.value = `${sendNumberValue} | ${sendCurrencyValue}`;

            sendNumber.classList.add('theme-border');
            receiveNumber.classList.add('theme-border');

            setTimeout(() => {
                  sendNumber.classList.remove('theme-border');
                  receiveNumber.classList.remove('theme-border');
            }, 1000);
        });
    }
}

export default reverseHandler;