function elPrecio(precio){
  const conIVA = precio*0.21;
  const precioTotal = conIVA + precio;
  const resultado = 'El precio sin iva es: ${precio}, el precio con IVA del 21% es: ${conIVA} y el precio total es: ${resultado}';

  return resultado;
}
console.log(elPrecio(10));