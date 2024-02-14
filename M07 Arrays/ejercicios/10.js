function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  if(array.length === 0) {
      return 0;
    }
    const numeroMayor = Math.max(...array);
  
    const indiceMayor = array.indexOf(numeroMayor);

    return indiceMayor;
  
  }
  


module.exports = encontrarIndiceMayor;
