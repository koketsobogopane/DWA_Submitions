
const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const reset = document.querySelector('[data-reset]')
const resetMessage = document.querySelector('[data-reset-alert]')

const subtractHandler = () => {
        const newValue = parseInt(number.placeholder) - 1;
        number.placeholder = newValue;
        resetMessage.hide()
        // if (add.disabled ===true) {
        //         add.disabled = false
        // };

        // if  (newValue <= MIN_NUMBER) {
        //          subtract.disabled  = true
        // };

};

const addHandler = () => {
        const newValue = parseInt(number.placeholder) + 1;
        number.placeholder = newValue;
        resetMessage.hide()
        // if (subtract.disabled ===true) {
        //         subtract.disabled = false
        // };

        // if  (newValue >= MAX_NUMBER) {
        //         add.disabled = true
        // };

};

const displayResetMessage = () => {
        const newValue = 0
        number.placeholder = newValue
        resetMessage.show()
        setTimeout(() => {
                resetMessage.hide()      
        }, 3000);
        

}

add.addEventListener('click', addHandler)
subtract.addEventListener('click', subtractHandler)
reset.addEventListener('click', displayResetMessage)
