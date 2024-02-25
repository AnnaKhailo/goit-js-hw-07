function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const inputNumber = document.querySelector("input");

btnCreate.addEventListener("click", handleClick);
btnDestroy.addEventListener("click", destroyBoxes);

function handleClick() {
  const amount = parseInt(inputNumber.value);
  if (amount >= 1 && amount <=100) {     
    createBoxes(amount);
    inputNumber.value = '';
  }
}

function createBoxes(amount){
  boxes.innerHTML = "";
  let size = 30;

  for (let i=1; i<=amount; i+=1){
    const newBox = `<div class="new-box" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`
    boxes.insertAdjacentHTML("beforeend", newBox);
    size += 10;
  }
}

function destroyBoxes(){
  boxes.innerHTML = "";
}