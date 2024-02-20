function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:

  let array = [];

  for (elemento of arrayOfStrings) {
    elemento = elemento.toLowerCase().split("");
    if (elemento[0] === "a") array.push(elemento.join(""));
  }
  return array;
}

module.exports = filter;
