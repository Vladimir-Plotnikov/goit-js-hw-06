//получилось
const categoriesEl = document.querySelector('ul')
const dNodesElements = categoriesEl.children
const arrayElements = [...dNodesElements]


arrayElements.forEach(element => {
const numberOf = element.querySelectorAll('li');
    console.log( `Category: ${element.firstElementChild.textContent}
Elements: ${numberOf.length} `);
});



// console.log(`Number of categories: ${dNodesEl.length}`);

// Получилось ЧЕРТИ ПО КАКОМУ,
// НО я ОЧЕНЬ собой горжусь!!! можнож прощще ?

// const animalsCategory = categoriesEl.firstElementChild.childNodes[1].innerText
// const firstElQuantity = categoriesEl.firstElementChild.childNodes[3].children.length

// console.log(
//     `Category: ${animalsCategory}
// Elements: ${firstElQuantity}`
// );

// const productCategory = categoriesEl.firstElementChild.nextElementSibling.childNodes[1].innerText
// const secondElQuantity = categoriesEl.firstElementChild.nextElementSibling.childNodes[3].children.length

// console.log(
//     `Category: ${productCategory}
// Elements: ${secondElQuantity}`
// );

// const techCategory = categoriesEl.lastElementChild.childNodes[1].innerText
// const lastElQuantity = categoriesEl.lastElementChild.childNodes[3].children.length

// console.log(
//     `Category: ${techCategory}
// Elements: ${lastElQuantity}`
// );


