const refs = {
    input: document.querySelector('input'),
    styles: document.querySelector('style'),
    validInput: document.querySelector('#validation-input')
}

refs.input.addEventListener(blur, validCheck)

const validCheck(Event)
