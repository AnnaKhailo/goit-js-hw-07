const userName = document.querySelector("#name-input");
const nameOutput = document.querySelector("span#name-output");

userName.addEventListener("input", handleInput);

function handleInput(event){ 
    if (event.currentTarget.value.trim() === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = event.currentTarget.value.trim();
    };
}