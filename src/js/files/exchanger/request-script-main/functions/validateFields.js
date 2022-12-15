import scriptConfig from '../../../../config/exchanger.js';

const validateFields = fields => {
    const fieldWrappers = document.querySelectorAll('.field-wrapper');
    fieldWrappers.forEach(item => item.classList.remove('error'));

    let result = true;

    const keys = Object.keys(fields);
    for(let i = 0; i < keys.length; i++) {
        const field = fields[keys[i]];

        const fieldInput = document.querySelector(`input[name="${scriptConfig.fieldTag}-${field.name}"]`);
        const fieldWrapper = fieldInput.parentElement;
        const fieldMsg = fieldInput.nextElementSibling;

        const validateOnEmptyFields = field.vEmpty;
        const validateLength = field.vLength;

        if(validateOnEmptyFields) {
            if(field.value == '') {
                fieldWrapper.classList.add('error');
                fieldMsg.innerHTML = `The field is not filled`;
                result = false;
                continue;
            }
        }

        if(validateLength) {
            if(field.value.length != validateLength) {
                fieldWrapper.classList.add('error');
                fieldMsg.innerHTML = `Incorrect length`;
                result = false;
                continue;
            }
        }
    }

    return result;
}

export default validateFields;