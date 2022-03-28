/*const lista1 = [
    100,
    200,
    300,
    500
];

let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length;*/



/** ENCAPSULANDO EL CODIGO */
function calcularMediaAritmetica() {
    const data = document.getElementById('inputAverage');
    const numbers = data.value.split(',');
    let lista = [];

    for (let i = 0; i < numbers.length; i++){
        lista.push(parseInt(numbers[i]))
    }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    const resultAverage = document.getElementById('resultAv');
    resultAverage.innerHTML = `El promedio es: ${promedioLista}`;
    // return promedioLista;
}