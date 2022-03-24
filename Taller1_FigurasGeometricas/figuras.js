/*// Codigo del cuadrado
console.group("Cuadrados"); // para agrupar mensajitos en la consola
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd(); // para cerrar el grupo

// Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4
const alturaTriangulo = 5.5
console.log(`Los lados del triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, la base ${baseTriangulo}cm y la altura es ${alturaTriangulo}cm.`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Codigo del circulo
console.group("Circulos");
// Radio
const radioCirculo = 4;
// Diametro
const diametroCirculo = radioCirculo * 2;
// PI
// const PI = 3.1415
const PI = Math.PI;

// Circunferencia o perimetro
const perimetroCirculo = diametroCirculo * PI
console.log(`El perimetro del circulo es de ${perimetroCirculo} cm`);

const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log(`El area del circulo es ${areaCirculo} cm^2`);


console.groupEnd();*/
/** Convirtiendo todo el codigo en funciones ENCAPSULAMIENTO */
// Codigo del cuadrado

function perimetroCuadrado(lado) { // cuando le pasamos valores a una funcion se llaman parametros
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
// cuando llamamos a una funcion los numeros que le pasamos se llaman argumentos

// Codigo del triangulo

function perimetroTriangulo(lado1, lado2, base) {
    const ans = Number(lado1) + Number(lado2) + Number(base);
    // console.log(ans);
    return ans;
}

function areaTriangulo(base, altura) {
    const ans = (base * altura) / 2;
    // console.log(ans);
    return ans;
}

// Codigo del circulo
// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// PI
// const PI = 3.1415
const PI = Math.PI;

// Circunferencia o perimetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

/** Aqui interactuamos con el HTML */

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const valor = input.value; // tenemos el valor que escribieron los usuarios
    const resultPer = document.getElementById('resultPer');

    const perimetro = perimetroCuadrado(valor);
    resultPer.innerHTML = `El perimetro es: ${perimetro}`;
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value; // tenemos el valor que escribieron los usuarios
    const resultArea = document.getElementById('resultAr');

    const area = areaCuadrado(value);
    resultArea.innerHTML = `El area es: ${area}`;
}

function calcularPerimetroTriangulo(){
    // TODO: HACER EL RETO DE LA CLASE 9 DEL CURSO
    const lado1 = document.getElementById("inputLado1");
    const valueLado1 = lado1.value;
    const lado2 = document.getElementById("inputLado2");
    const valueLado2 = lado2.value;
    const base = document.getElementById("inputBase");
    const valueBase = base.value;
    const resultPer = document.getElementById('resultPerTr');

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    resultPer.innerHTML = `El perimetro es: ${perimetro}`;

}
function calcularAreaTriangulo(){
    const base = document.getElementById("inputBase");
    const valueBase = base.value;
    const altura = document.getElementById("inputAltura");
    const valueAltura = altura.value;
    const resultArea = document.getElementById('resultArTr');

    const area = areaTriangulo(valueBase, valueAltura);
    resultArea.innerHTML = `El area es: ${area}`;
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputRadio");
    const valueRadio = radio.value;
    const resultPer = document.getElementById('resultPerCir')

    const perimetro = perimetroCirculo(valueRadio);
    resultPer.innerHTML = `El perimetro es: ${perimetro}`;
}
function calcularAreaCirculo(){
    const radio = document.getElementById("inputRadio");
    const valueRadio = radio.value;
    const resultArea = document.getElementById('resultArCir')

    const area = areaCirculo(valueRadio);
    resultArea.innerHTML = `El area es: ${area}`;
}