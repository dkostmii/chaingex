const copyToClipboard = textToCopy => {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(textToCopy);
    } else {
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
        });
    }
}

const copyHandler = () => {
    const copyButtons = document.querySelectorAll('.field-copy-btn');
    if(copyButtons) {
        copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const row = button.previousElementSibling.parentElement;
                const input = button.previousElementSibling;
                const text = button.previousElementSibling.value;
    
                copyToClipboard(text);
                input.classList.add('theme-border');
    
                setTimeout(() => {
                    input.classList.remove('theme-border');
                }, 1000);
            });
        });
    }
}

export default copyHandler;