function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  container:document.querySelector(".widget"),
  btn: document.querySelector(".change-color"),
  colorName: document.querySelector(".color")
}

refs.btn.addEventListener("click", onBtnClick)

function onBtnClick() {
  let changeColor = getRandomHexColor();
  document.body.style.backgroundColor = changeColor;
  refs.colorName.textContent = changeColor;
console.log(`Current color: ${changeColor}`)
}