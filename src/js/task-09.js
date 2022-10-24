const changeColoBtnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleChangeColor() {
  const color = getRandomHexColor();
  document.body.setAttribute('style', `background-color: ${color};`);
  spanRef.textContent = color;
}

changeColoBtnRef.addEventListener('click', handleChangeColor);



// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const refs = {
//   body: document.querySelector('body'),
//   buttonChange: document.querySelector('button'),
// }
// let spanColor = document.querySelector('.color')


// refs.buttonChange.addEventListener('click', changeColor)
// refs.buttonChange.addEventListener('click',changeName)

// function changeColor (event) {
//   const color = getRandomHexColor()
// spanColor.textContent = color;
//   refs.body.style.backgroundCOlor = color;
//   event.currentTarget = color;

// }

