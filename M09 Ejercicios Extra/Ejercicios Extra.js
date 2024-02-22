/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  var arrayPadre = [];

  for (var propiedad in objeto) {
    var array = [propiedad, objeto[propiedad]];
    arrayPadre.push(array);
  }
  return arrayPadre;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var orden = string.split("").sort();
  var contador = 1;
  var terminado = {};

  for (let i = 0; i < orden.length; i++) {
    if (orden[i] === orden[i + 1]) {
      contador++;
    } else {
      terminado[orden[i]] = contador;
      contador = 1;
    }
  }
  return terminado;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let uppercaseLetters = "";
  let lowercaseLetters = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      uppercaseLetters += string[i];
    } else {
      lowercaseLetters += string[i];
    }
  }

  return uppercaseLetters + lowercaseLetters;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let palabra = frase.split(" ");
  let palabraInvertida = palabra.map(function (palabra) {
    return palabra.split("").reverse().join("");
  });
  let resultado = palabraInvertida.join(" ");

  return resultado;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  numero = numero.toString();

  return numero === numero.split("").reverse().join("")
    ? "Es capicua"
    : "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

  return string.replace(/[abc]/g, "");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort(function (a, b) {
    return a.length - b.length;
  });
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  arrayUnido = [];

  for (let i of array1) {
    let iguales = array2.includes(i);
    if (iguales) arrayUnido.push(i);
  }
  return arrayUnido;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
