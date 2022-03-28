/*const lista1 = [
    500,
    200, 
    100,
    400000000
]

lista1.sort(function(a, b){
    return a - b
});

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1]; // devolvernos una posicion
    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);
    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1]
}*/

/* ENCAPSULAMIENTO */

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function calcularMediana() {
    const data = document.getElementById('inputMediana');
    const numbers = data.value.split(',');
    let lista = [];

    for (let i = 0; i < numbers.length; i++){
        lista.push(parseInt(numbers[i]))
    }

    lista.sort(function(a, b){ // ordena la lista
        return a - b
    });

    const mitadLista = parseInt(lista.length / 2);

    function esPar(numero) {
        if (numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1]; // devolvernos una posicion
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
        mediana = promedioElemento1y2;
    } else {
        mediana = lista[mitadLista];
    }

    const resulMediana = document.getElementById('resultMed');
    resulMediana.innerHTML = `La mediana es: ${mediana}`;

    // return mediana;
}



