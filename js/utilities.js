// Function for getting values from inputs as number
function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.value;
  const elementValue = parseInt(elementString);

  return elementValue;
}

// Function for getting inner text from elements as number
function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.innerText;
  const elementText = parseInt(elementString);

  return elementText;
}

// Setting new text in elements
function setTextById(elementId, newText) {
  const element = document.getElementById(elementId);

  element.innerText = newText;
}
