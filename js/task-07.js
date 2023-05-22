const refs = {
    input: document.getElementById("font-size-control"),
    text: document.getElementById("text")
}
refs.input.addEventListener("input", onRangeChange);

function onRangeChange() {
    const value = Number(refs.input.value);
    refs.text.style.fontSize = value + 'px';
console.log(value)
}