import scriptConfig from "../../config/exchanger.js";

const tag = scriptConfig.fieldTag;

const concatValueHandler = () => {
    const sendNumberInput = document.querySelector('.field-wrapper.send input[name="number-input"]'),
          sendCurrencyInput = document.querySelector('.field-wrapper.send input[name="select-input"]'),
          receiveNumberInput = document.querySelector('.field-wrapper.receive input[name="number-input"]'),
          receiveCurrencyInput = document.querySelector('.field-wrapper.receive input[name="select-input"]');

    const exSendInput = document.querySelector(`.field-wrapper.send input[name="${tag}-send"]`),
          exReceiveInput = document.querySelector(`.field-wrapper.receive input[name="${tag}-receive"]`);

    const exSendHandler = e => {
        const minValue = sendNumberInput.getAttribute('min');
        if(minValue) {
            if(sendNumberInput.value < minValue) {
                sendNumberInput.value = sendNumberInput.getAttribute('min');
            }
        }

        exSendInput.value = `${e.target.value} | ${sendCurrencyInput.value}`;
    }

    const exReceiveHandler = e => {
        exReceiveInput.value = `${e.target.value} | ${receiveCurrencyInput.value}`;
    }

    sendNumberInput.addEventListener('input', exSendHandler);
    receiveNumberInput.addEventListener('input', exReceiveHandler);
}

export default concatValueHandler;