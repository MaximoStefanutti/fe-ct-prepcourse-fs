function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  var palíndromo = string.replace(/ /g, "").toLowerCase();

  var j = palíndromo.length - 1;

  for(var i = 0; i < palíndromo.length; i++) {
    if (palíndromo[i] !== palíndromo[j]) return false;
    j--;
  }
  return true;
}

module.exports = esPalindromo;
