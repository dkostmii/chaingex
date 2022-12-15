import scriptConfig from '../../../../config/exchanger.js';

const collectFields = () => {
    const tag = scriptConfig.fieldTag;

    const tagFields = document.querySelectorAll(`input[name^="${tag}"], select[name^="${tag}"], textarea[name^="${tag}"]`);
    const data = {};

    tagFields.forEach(field => {
        const name = field.getAttribute('name').split('-')[1];

        const text = field.dataset.text,
              smile = field.dataset.smile;

        const vLength = field.dataset.length,
              vEmpty = field.dataset.empty;

        const value = field.value;

        data[name] = {
            name,
            text,
            smile,
            value,
            vLength,
            vEmpty
        };
    });

    return data;
}

export default collectFields;