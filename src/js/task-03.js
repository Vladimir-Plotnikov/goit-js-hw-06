const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const refs = {
  imgItems: document.querySelector('.gallery')
}

const markUp = images.map(({url,alt})=>`<li><img src="${url}" alt="${alt}"style="width:250px"></li>`)

refs.imgItems.insertAdjacentHTML('beforeend', markUp.join(''))

// const arrayEl = []

// const imgItems = images.map(image => {
//   const imgEl = document.createElement('img')
//   imgEl.src = image.url
//   imgEl.alt = image.alt
//   imgEl.width = 250
//   const li = document.createElement('li')
//   li.append(imgEl)
//   arrayEl.push(li)
// })
// refs.imgItems.append(...arrayEl)

