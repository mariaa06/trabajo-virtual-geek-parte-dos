const input = document.querySelector ('input');
const button = document.querySelector ('button');

const showMessage=()=> {p.innerHTML = input.value;
}
button.addEventListener('click', () => document.querySelector ('p').innerHTML = 'Hola ' + input.value);