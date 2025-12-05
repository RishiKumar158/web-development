let h1Element = document.body.firstElementChild;
h1Element = document.body.children[0];
h1Element = document.getElementById("first-title");

console.dir(h1Element)

let parentElement = h1Element.parentElement;

let highlightedParagrapgh = document.querySelector('.highlighted-paragraph');

console.dir(highlightedParagrapgh);

let anchorElement = document.querySelector("p a");
console.log(anchorElement);

highlightedParagrapgh.textContent = "This is changed by Rishi!";

let newAnchorElement = document.createElement('a');
newAnchorElement.href = "https:www.google.com";
newAnchorElement.textContent = " leads to google"

let firstParagraph = document.querySelector('p');

firstParagraph.append(newAnchorElement);

h1Element.remove();

firstParagraph.parentElement.append(firstParagraph);

firstParagraph.innerHTML = "Hi This is <strong>important</strong>";

 