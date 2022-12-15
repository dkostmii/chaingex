import scriptConfig from '../../../config/exchanger.js';
import collectFields from './functions/collectFields.js';
import validateFields from './functions/validateFields.js';
import createMessage from './functions/createMessage.js';
import sendMessage from './functions/sendMessage.js';

const submitHandler = () => {
    const form = document.getElementById(`${scriptConfig.fieldTag}-form`);
    if(form) {
        form.addEventListener('submit', e => {
            const fields = collectFields();
            const isValidate = validateFields(fields);

            if(isValidate) {
                const message = createMessage(fields);
                sendMessage(message);
            }

            e.preventDefault();
        });
    }
}

export default submitHandler;