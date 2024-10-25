let display = document.getElementById('display');

function calcAppend(input){
  if(display.value.length > 6) {
    display.style.fontSize = '2rem';
  } else if(display.value.length > 10) {
    display.style.fontSize = '1.5rem';
  } else {
    display.style.fontSize = '3rem';
  }

  display.value += input;
}

function calculate(){
  if(display.value.length > 6) {
    display.style.fontSize = '2rem';
  } else if(display.value.length > 10) {
    display.style.fontSize = '1.5rem';
  } else {
    display.style.fontSize = '3rem';
  }

  try {
    display.value = eval(display.value);
  } catch(error){
    display.value = 'ERR';
  }
}

function clearDisplay(){
  display.value = '';
}

function deleteLast(){
  display.value = display.value.slice(0, -1);
}
