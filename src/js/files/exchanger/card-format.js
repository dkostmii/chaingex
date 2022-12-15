function formatCardCode() {
    let cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}

const cardFormatHandler = () => {
    const cardInput = document.querySelector('.field-wrapper.card .field-input');
    if(cardInput) {
        cardInput.addEventListener('input', formatCardCode);
    }
}

export default cardFormatHandler;