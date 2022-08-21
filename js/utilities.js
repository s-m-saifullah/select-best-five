function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.value;
  const elementValue = parseInt(elementString);

  return elementValue;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.innerText;
  const elementText = parseInt(elementString);

  return elementText;
}

function setValueById(elementId, newValue) {
  const element = document.getElementById(elementId);

  element.value = newValue;
}

function setTextById(elementId, newText) {
  const element = document.getElementById(elementId);

  element.innerText = newText;
}
