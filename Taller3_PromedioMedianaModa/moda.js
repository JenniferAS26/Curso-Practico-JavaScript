/*const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

// contar cuantas veces aparece cada numero
const lista1Count = {}; // tenemos una lista 1 y la estamos convirtiendo en un objeto

lista1.map(function(elemento){ // sumamos la cantidad que aparece un elemento en nuestro objeto
    if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
    } else {
        lista1Count[elemento] = 1;
    }
});

const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB) { 
        return elementoA[1] - elementoB[1]
    }
); // le enviamos como argumento el objeto que queremos convertir en array y ordenamos

const moda = lista1Array[lista1Array.length - 1];*/

/* ENCAPSULAMIENTO */

function calcularModa(lista) {
    // contar cuantas veces aparece cada numero
    const listaCount = {}; // tenemos una lista 1 y la estamos convirtiendo en un objeto

    lista.map(function(elemento){ // sumamos la cantidad que aparece un elemento en nuestro objeto
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    });

    const listaArray = Object.entries(listaCount).sort(
        function(elementoA, elementoB) { 
            return elementoA[1] - elementoB[1]
        }
    ); // le enviamos como argumento el objeto que queremos convertir en array y ordenamos

    const moda = listaArray[listaArray.length - 1];

    return moda;
}

