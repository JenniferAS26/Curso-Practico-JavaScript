// Helpers
function esPar(numero) {
    return (numero % 2 === 0);
}
  
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}

// Calculadora de medianas
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad2 = lista[mitad];
        const personaMitad1 = lista[mitad - 1];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Mediana General
const salariosCol = colombia.map(
    function (persona) {
      return persona.salary;
    }
);
  
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
      return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana Top 10%
// splice(donde vamos a realizar el "corte", cuantas "tajadas" vamos a sacar)

const spliceStart = (salariosColSorted.length * (100 - 10) / 100); // empezamos en el 90%
const spliceCount = salariosColSorted.length - spliceStart; // 10%
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});

