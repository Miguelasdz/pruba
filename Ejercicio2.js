function factorePrimo(numero) {
    const factoresPrimos = [];
    let divisor = 2;
    while (divisor <= numero) {
      if (numero % divisor === 0) {
        factoresPrimos.push(divisor);
        numero /= divisor;
      } else {
        divisor++;
      }
    }
    return factoresPrimos;
  }

console.log(factorePrimo(20))
