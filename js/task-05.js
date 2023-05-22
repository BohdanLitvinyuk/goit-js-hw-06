
const refs = {
    input: document.querySelector("#name-input"),
    output:  document.querySelector("#name-output")
}

refs.input.addEventListener("input", onInputEnter);
function onInputEnter(event) {
    if (!event.currentTarget.value == "") {
       return  refs.output.textContent = event.currentTarget.value; 
    } refs.output.textContent = "Anonymous";
}