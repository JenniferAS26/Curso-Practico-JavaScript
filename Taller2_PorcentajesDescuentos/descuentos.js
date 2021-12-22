/*const precioOriginal = 120;
const descuento = 18;

const porcentajeDelPrecioConDescuento = 100 - descuento; //85%
const precioConDescuento = (precioOriginal * porcentajeDelPrecioConDescuento) / 100;

console.log({
    precioOriginal, 
    descuento,
    porcentajeDelPrecioConDescuento,
    precioConDescuento
});*/

// CONVERTIR LAS VARIABLES A UNA FUNCION

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeDelPrecioConDescuento = 100 - descuento; //85%
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;

    return precioConDescuento;
}

/** Aqui interactuamos con el HTML */

function onClickButtonPriceDiscount() {
    const price = document.getElementById("inputPrice");
    const priceValue = price.value;
    const discount = document.getElementById("inputDiscount");
    const discountValue = discount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento es $" + precioConDescuento; // para escribir en el HTML desde JS
}