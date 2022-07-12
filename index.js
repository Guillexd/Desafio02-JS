//Si lleva más de 10 productos del mismo tipo se le da el decimo gratis todos los días
//Si lleva cada uno de los tipos de productos se da un descuento del 10%
//Los L, J y V tiene descuento del 20%.


//funcion para imprimir los resultados
// const imprimir = (nombre) => {
//     if (nombreProductos.includes(nombre)) {
//         return `El producto Hamburguesa ${nombre}, tiene como precio final $${precioProductos[nombreProductos.indexOf(nombre)]}`
//     };
// };

//funcion para filtrar productos 
function filtrarProductos(filtro) {
    const filtracion = infoDeProductos.filter(objeto => objeto.nombre.indexOf(filtro) !== -1)

    if (filtracion.length === 0) {
        alert("Filtración fallida");
    } else {
        const filtraciones = filtracion.map(el => el.nombre + "\n")
        alert(`Estos son los productos filtrados \n${filtraciones.join("")}`);
    };
};

//funciones para el descuento de días
//verificar el día para realizar el descuento 
const verificarTipo = (nombre, array, dia) => {
    if (dias.includes(dia)) {
        const elementoModificado = array.find(element => element.nombre === nombre);
        elementoModificado.precioPorCantidad *= 1000;
    };
};

//funcion para contar los productos
// const contadorProductos = (i) => {
//     let contador = cantidadProductos[i];
//     contador += 1;
//     cantidadProductos[i] = contador;
// };

//funcion para determinar el precio con descuento "de cada 10 te llevas uno gratis"
// const retornarOferta = (i) => {
//     if (cantidadProductos[i] >= 10) {
//         return precioUnitario[i] * cantidadProductos[i] - ((cantidadProductos[i] - (cantidadProductos[i] % 10)) / 10) * precioUnitario[i];
//     } else {
//         return precioUnitario[i] * cantidadProductos[i];
//     }
// }

//variables
let valorWhile;//valor para el ciclo do ..while

alert(
    "Papas: $1 \nCebolla: $1.2 \nCalabacin: $2.1 \nFresas $0.6 \nSi llevas por lo menos 1u. de cada producto te damos un descuento del 10% \nPor cada 10 productos del mismo tipo se le da el décimo totalmente gratis \nLos Lunes, Jueves y Viernes tenemos descuento del 20% adicional"
);

//do ..while
do {
    let preguntaInicial = prompt("¿Qué tipo de producto desea llevar?\nEscriba el nombre o letra para filtrar").toLowerCase();
    filtrarProductos(preguntaInicial)

    let preguntaSecundaria = prompt("De acuerdo a su filtración, ¿qué producto desea llevar?").toLowerCase();
    for (const el of infoDeProductos) {
        if (preguntaSecundaria === el.nombre) {
            let preguntaTerciaria = parseInt(prompt("¿Cuántos deseas llevar?"));
            el.cantidad += preguntaTerciaria;
            el.precioPorCantidad = el.cantidad * el.precioUnitario
            alert(el.nombre + el.cantidad + el.precioPorCantidad);
            break;
        }
    }

    console.log("xd");
    valorWhile = prompt("¿Desea continuar agregando productos?\n'y' para continuar \n'cualquier tecla' para salir").toLowerCase();
} while(valorWhile !== "y");
