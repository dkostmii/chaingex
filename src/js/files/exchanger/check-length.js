import scriptConfig from "../../config/exchanger.js";

const tag = scriptConfig.fieldTag;

const checkLengthHandler = () => {
    const addressInput = document.querySelector(`.field-wrapper.address input[name="${tag}-address"]`);
    const cardInput = document.querySelector(`.field-wrapper.card input[name="${tag}-card"]`);

    const inputHandler = e => {
        const fieldWrapper = e.target.parentElement;

        const fieldCheckEmpty = e.target.dataset.empty;
        const fieldLength = e.target.dataset.length;

        if(fieldCheckEmpty) {
            if(e.target.value != '') {
                fieldWrapper.classList.remove('error');
            }
        }

        if(fieldLength) {
            if(e.target.value.length == fieldLength) {
                fieldWrapper.classList.remove('error');
            }
        }
    }

    addressInput.addEventListener('input', inputHandler);
    cardInput.addEventListener('input', inputHandler);
}

export default checkLengthHandler;