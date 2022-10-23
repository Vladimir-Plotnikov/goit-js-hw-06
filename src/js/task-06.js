const refs = {
    validInput: document.querySelector('#validation-input'),
    styles: document.querySelector('style'),
}
const validNumber = refs.validInput.attributes[2].nodeValue
console.log(validNumber);

refs.validInput.addEventListener('blur', validCheck)

function validCheck(event) {
    if (event.currentTarget.value.length==validNumber) {
    return refs.validInput.classList.add('valid')
    }
    refs.validInput.classList.remove('valid')
    refs.validInput.classList.add('invalid')
} 