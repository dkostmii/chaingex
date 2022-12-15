import scriptConfig from '../../../../config/exchanger.js';

const sendMessage = message => {
    const query = `https://api.telegram.org/bot${scriptConfig.token}/sendMessage?`;
    const params = `chat_id=${scriptConfig.chatId}&text=${message}&parse_mode=html`;
    const url = query + params;

    fetch(url)
        .then(response => response.json())
        .then(data => scriptConfig.env == 'dev' ? console.log(data) : true);
}

export default sendMessage;