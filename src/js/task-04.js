const refs = {
    mainDiv: document.querySelector('#counter'),
    value: document.querySelector('#value')
}
const decrementButton = refs.mainDiv.firstElementChild
const incrementButton = refs.mainDiv.lastElementChild

let counterValue = 0;

incrementButton.addEventListener('click', () => {
    refs.value.textContent = counterValue += 1;
}) 
decrementButton.addEventListener('click', () => {;
    refs.value.textContent = counterValue -= 1;
}) 
