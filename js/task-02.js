const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients");

const createIngredients = (ingredient) => {
  return ingredient.map(el => {
    const itemEl = document.createElement('li');
    itemEl.classList.add("item");
    itemEl.textContent = el;
    
    return itemEl;
  })
};
const elements = createIngredients(ingredients);
ingredientsListEl.append(...elements);
