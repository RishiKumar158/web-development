const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;
    
    // const remainingCharacters = 60 - enteredTextLength; // direct

    // we can make it dynamic using maxAllowedChars
    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
    if(remainingCharacters <= 10) {
        productNameInputElement.classList.add('warning');
    } else {
        productNameInputElement.classList.remove('warning');
    }

}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
