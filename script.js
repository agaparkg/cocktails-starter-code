import { cocktails } from './data.js';

const main = document.querySelector('.main-content');
const search = document.querySelector('#search');
const searchBtn = document.querySelector('#search-btn');
const ulList = document.querySelector('.list');
// ----------------#-------------------
// ['Cocktail', 'Shot', 'Ordinary Drink', 'Coffee / Tea', 'Other/Unknown'];

// Option 1
// console.log(ulList.children);
// const liChildren = ulList.children;

// for (let li of liChildren) {
//   li.addEventListener('click', function () {
//     // console.log(li.id);
//     if (li.id === 'All') {
//       renderData(cocktailsData);
//     } else {
//       const filteredCategoryData = cocktailsData.filter((item) => {
//         return item.strCategory === li.id;
//       });
//       renderData(filteredCategoryData);
//     }
//   });
// }

// ----------------#-------------------
// Option 2
const links = [
  'All',
  'Cocktail',
  'Shot',
  'Ordinary Drink',
  'Coffee / Tea',
  'Other/Unknown',
];

function createLinks(links) {
  for (let link of links) {
    const liEl = document.createElement('li');
    liEl.className = 'list-item';
    liEl.innerText = link;
    liEl.setAttribute('id', link);

    liEl.addEventListener('click', function (e) {
      const id = e.target.id;
      if (id === 'All') {
        renderData(cocktailsData);
      } else {
        const filteredCategoryData = cocktailsData.filter((item) => {
          return item.strCategory === id;
        });
        renderData(filteredCategoryData);
      }
    });

    ulList.appendChild(liEl);
  }
}

createLinks(links);
// ----------------#-------------------
let cocktailsData = cocktails;

function renderData(cocktails) {
  main.innerHTML = '';
  for (let item of cocktails) {
    createCocktails(item);
  }
}

renderData(cocktailsData);

function createCocktails(item) {
  const el = `
    <div id='${item.idDrink}' class="cocktail-item">
      <div class="img-wrapper">
        <img
          src="${item.strDrinkThumb}"
          alt=""
        />
        <p class="category-type">${item.strCategory}</p>
      </div>
      <p class="cocktail-name">
        ${item.strDrink}
        <span class="alcohol-type">${item.strAlcoholic}</span>
      </p>
    </div>
  `;

  main.innerHTML += el;
}

searchBtn.addEventListener('click', function () {
  const name = search.value;
  const filteredData = cocktailsData.filter((item) => {
    return item.strDrink.toLowerCase().includes(name);
  });
  renderData(filteredData);
});

// search.addEventListener('input', function (event) {
//   const name = event.target.value;
//   const filteredData = cocktailsData.filter((item) => {
//     return item.strDrink.toLowerCase().includes(name);
//   });
//   renderData(filteredData);
// });
