const inputEl = document.getElementById('validation-input');
const inputLengthEl = document.querySelector('input[data-length="6"]');

inputEl.addEventListener("blur", onInputValid);
const inputValidWordNumber = Number(inputLengthEl.dataset.length);

function onInputValid() {
    if (inputValidWordNumber !== inputEl.value.trim().length) {
        inputEl.classList.add("invalid"); 
        inputEl.classList.remove("valid");
        return;
    } 
      inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    
} 
