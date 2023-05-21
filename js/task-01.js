const itemEl = document.querySelectorAll(".item");
const itemElQuantity =`Number of categories: ${itemEl.length}`;
console.log(itemElQuantity);


const nameOfCategory = itemEl.forEach(el => {
    console.log(` Category: ${el.firstElementChild.textContent}
    Elements: ${el.lastElementChild.children.length}`)
   
})