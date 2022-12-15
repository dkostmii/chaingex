const createMessage = fields => {
    let message = '';

    const keys = Object.keys(fields);
    keys.forEach(key => {
        const field = fields[key];
        message += `${field.smile} <b>${field.text}:</b> ${field.value}\n`;
    });
    
    return encodeURIComponent(message);
}

export default createMessage;