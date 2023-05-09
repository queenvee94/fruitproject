const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
  let results = [];
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i].toLowerCase().includes(str.toLowerCase())) {
      results.push(fruit[i]);
    }
  }
  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  let html = '';
  if (results.length > 0) {
    results.forEach((result) => {
      html += `<li>${result.replace(
        new RegExp(inputVal, 'gi'),
        `<strong>${inputVal}</strong>`
      )}</li>`;
    });
    suggestions.classList.add('has-suggestions');
  } else {
    suggestions.classList.remove('has-suggestions');
  }
  suggestions.innerHTML = html;
}

function useSuggestion(e) {
  if (e.target.tagName === 'LI') {
    input.value = e.target.textContent;
    suggestions.classList.remove('has-suggestions');
  }
}

input.addEventListener('input', searchHandler);
suggestions.addEventListener('click', useSuggestion);
