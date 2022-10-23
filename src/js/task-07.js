const refs = {
    sizeControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
}
console.log(refs.text);

refs.sizeControl.addEventListener('input', transSize)

function transSize(event) { 
refs.text.style.fontSize = event.currentTarget.value+'px';
}
