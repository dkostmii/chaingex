import scriptConfig from "../../config/exchanger.js";

const selectHandler = (() => {
    const selects = document.querySelectorAll('.field-select');
    if(selects) {
        selects.forEach(select => {
            const selectItems = select.querySelectorAll('.field-select__item'),
                  selectValue = select.querySelector('.field-select__value'),
                  selectInput = select.querySelector('.field-select__input');
    
            select.addEventListener('click', () => {
                selects.forEach(item => {
                    if(item.className != select.className) {
                        item.classList.remove('open')
                    }
                });
                
                select.classList.toggle('open');
            });
    

    
            window.addEventListener('click', e => {
                if(!e.target.className.includes('field-select')) {
                    select.classList.remove('open');
                }
            });
        });
    }
});

export default selectHandler;