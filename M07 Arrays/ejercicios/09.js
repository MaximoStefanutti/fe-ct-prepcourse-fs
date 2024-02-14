function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

 var nuevoarray= array.filter(function(numero) {
  return numero > 10; 
});
return nuevoarray.length
}

module.exports = contarElementosMayoresA10;
