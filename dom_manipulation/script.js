// script.js

// Selecting elements
const element = document.querySelector(".element-class");
console.log(element);
console.log(element.textContent);

// Modifying element properties (both attributes and values)
element.textContent = "Hussam is learning DOM manipulation in .js";
element.style.color = "red";
element.setAttribute("new-attribute", "hussam.js"); // this adds a new attribute to the element called new-attribute

// Creating and appending new elements
const newElement = document.createElement("div");
newElement.textContent = "This is the child div";
const elementTwo = document.querySelector(".parent-element");
elementTwo.appendChild(newElement);

const anotherElement = document.createElement("h1");
anotherElement.textContent = "Childern are nice!";
newElement.appendChild(anotherElement);

// Handling events
const button = document.querySelector(".button-class");
function handleClick() {
  console.log("Button clicked");
}
button.addEventListener("click", handleClick);

// Traversing DOM

const childElement = document.querySelector("h1");
const parentElement = document.querySelector(".parent-element");

parentElementExtracted = childElement.parentNode;
console.log(parentElementExtracted);

const nextSibling = childElement.nextSibling;
console.log(nextSibling);

const previousSibling = childElement.previousSibling;
console.log(previousSibling);

const childElements = parentElement.children;
for (let i = 0; i < childElements.length; i++) {
  let childElement = childElements[i];
  console.log(childElement.textContent);
  
}

// Removing an element
const elementToRemove = document.querySelector('.element-to-remove')
elementToRemove.remove()