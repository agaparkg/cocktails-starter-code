import { cocktails } from './data.js';

// console.log(cocktails.map((i) => i.strCategory)); // ["", ""]

// ["Cocktail", "Shot", "Cocktail", "Ordinary Drink", "Other/Unknown", "Coffee / Tea"]

const main = document.querySelector('.main-content');
const search = document.querySelector('#search');

let cocktailsData = cocktails;

function renderData(cocktails) {
  console.log('a', cocktails);
}

renderData(cocktailsData);
