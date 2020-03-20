const contentBody= document.querySelector('body');

function changeColor(event) {
  if (event.keyCode === 82) {
    contentBody.classList.add('red');
    contentBody.classList.remove('purple');
  }

  if (event.keyCode === 77 ) {
    contentBody.classList.add('purple');
    contentBody.classList.remove('red');
  }
}

document.addEventListener('keydown', changeColor);