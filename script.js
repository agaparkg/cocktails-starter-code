import { cocktails } from './data.js';

const main = document.querySelector('.main-content');
const search = document.querySelector('#search');
const searchBtn = document.querySelector('#search-btn');
const ulList = document.querySelector('.list');
const clearBtn = document.querySelector('.clear');
const radioYes = document.querySelector('#yes');
const radioNo = document.querySelector('#no');

radioYes.addEventListener('click', function (e) {
  radioNo.checked = false;
  searchBtn.style.display = 'inline-block';

  searchBtn.addEventListener('click', handleSearchBtnClick);
  search.removeEventListener('input', handleSearchInput);
});

radioNo.addEventListener('click', function (e) {
  radioYes.checked = false;
  searchBtn.style.display = 'none';

  search.addEventListener('input', handleSearchInput);
  searchBtn.removeEventListener('click', handleSearchBtnClick);
});

function handleSearchInput(event) {
  const name = event.target.value;
  const filteredData = cocktailsData.filter((item) => {
    return item.strDrink.toLowerCase().includes(name);
  });
  renderData(filteredData);
}

function handleSearchBtnClick() {
  const name = search.value;
  const filteredData = cocktailsData.filter((item) => {
    return item.strDrink.toLowerCase().includes(name);
  });
  renderData(filteredData);
}

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

clearBtn.addEventListener('click', function () {
  search.value = '';
  renderData(cocktailsData);
});

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
