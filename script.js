// script.js

let display = document.getElementById('display');

function append(character) {
  if (display.innerText === '0') {
    display.innerText = character;
  } else {
    display.innerText += character;
  }
}

function delChar() {
  let text = display.innerText;
  if (text.length > 1) {
    display.innerText = text.slice(0, -1);
  } else {
    display.innerText = '0';
  }
}

function reset() {
  display.innerText = '0';
}

function calculate() {
  try {
    let expression = display.innerText.replace(/x/g, '*');
    let result = eval(expression);
    display.innerText = Number(result).toLocaleString();
  } catch {
    display.innerText = 'Error';
  }
}
