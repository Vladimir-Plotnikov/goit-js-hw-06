const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  staticItems: document.querySelector('#ingredients')
}

refs.staticItems.classList.add('item')
const liArray = []

for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement('li')
  const ingredient = ingredients[i];
  li.textContent = ingredient
  liArray.push(li)
}

refs.staticItems.append(...liArray)