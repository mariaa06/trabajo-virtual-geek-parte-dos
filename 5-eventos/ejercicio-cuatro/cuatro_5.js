const button = document.querySelector('button');
const f = 'First man';
const o = 'Origins';
const e = 'Eclipse';
const t = 'The nutcracker';
const s = 'Split';

button.addEventListener('click', () => document.querySelector ('.f1').innerHTML = f);
button.addEventListener('click', () => document.querySelector ('.f2').innerHTML = o);
button.addEventListener('click', () => document.querySelector ('.f3').innerHTML = e);
button.addEventListener('click', () => document.querySelector ('.f4').innerHTML = t);
button.addEventListener('click', () => document.querySelector ('.f5').innerHTML = s);

