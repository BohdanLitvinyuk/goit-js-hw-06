const refs = {
    counterContainerEl: document.getElementById('counter'),
    valueEl: document.getElementById('value'),
    btnDecrementEl: document.querySelector('button[data-action="decrement"]'),
    btnIncrementEl: document.querySelector('button[data-action="increment"]'),
    buttonEl: document.querySelectorAll("#counter button")
}

refs.btnDecrementEl.addEventListener("click", onButtonClick);
refs.btnIncrementEl.addEventListener("click", onButtonClick);
let counter = 0;

function onButtonClick(e) {
    const id = e.target.dataset.action;
    console.log(id)
    if (id === "increment") {
        counter += 1;
        console.log(refs.valueEl.textContent = counter);
        return;
    } counter -= 1;
     console.log(refs.valueEl.textContent = counter);
}