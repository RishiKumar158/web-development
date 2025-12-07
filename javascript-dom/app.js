let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = "Clicked!!";
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    let enteredText = event.target.value;
    console.log(enteredText);
}

inputElement.addEventListener('input', retrieveUserInput);