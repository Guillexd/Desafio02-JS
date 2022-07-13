//Si lleva más de 10 productos del mismo tipo se le da el decimo gratis todos los días, ESTO SERÁ IMPLÍCITO SIN AVISAR
//Si lleva cada uno de los tipos de productos se da un descuento del 10%, ESTO SERÁ IMPLÍCITO SIN AVISAR
//Los L, J y V tiene descuento del 20%.

//Base de datos

const dias = ["L", "J", "V"]; //días de descuento
class InfoDeProductos {
    constructor(nombre, precioUnitario, cantidad) {
        this.nombre = nombre;
        this.precioUnitario = precioUnitario;
        this.cantidad = cantidad;
        this.precioPorCantidad = 0; 
    };
};

const infoDeProductos = [];

infoDeProductos.push(new InfoDeProductos("papas", 1, 0));
infoDeProductos.push(new InfoDeProductos("cebolla", 1.2, 0));
infoDeProductos.push(new InfoDeProductos("calabacin", 2.1, 0));
infoDeProductos.push(new InfoDeProductos("fresas", 0.6, 0));

//variable
let precioFinal = 0;

//funcion para filtrar productos 
function filtrarProductos(filtro) {
    const filtracion = infoDeProductos.filter(objeto => objeto.nombre.indexOf(filtro) !== -1)

    if (filtracion.length === 0) {
        alert("Filtración fallida");
    } else {
        const filtraciones = filtracion.map(el => el.nombre + "\n");
        alert(`Estos son los productos filtrados \n${filtraciones.join("")}`);
    };
};

//funciones para el descuento de días
//verificar el día para realizar el descuento 
const verificarDia = (objeto, dia) => {
    if (dias.includes(dia)) {
        alert("Es día de descuentos :) \n20% menos en tu compra total");
        objeto.precioPorCantidad *= .8;
    } else {
        alert("No es día de descuentos :(");
    };
};

//funcion para determinar el precio con descuento "de cada 10 te llevas uno gratis"
const retornarOferta = (objeto) => {
    if (objeto.cantidad >= 10) {
        objeto.precioPorCantidad = objeto.precioUnitario * objeto.cantidad - ((objeto.cantidad - (objeto.cantidad % 10)) / 10) * objeto.precioUnitario;
    };
};  

alert(
    "Papas: $1 \nCebolla: $1.2 \nCalabacin: $2.1 \nFresas $0.6 \nSi llevas por lo menos 1u. de cada producto te damos un descuento del 10% \nPor cada 10 productos del mismo tipo se le da el décimo totalmente gratis \nLos Lunes, Jueves y Viernes tenemos descuento del 20% adicional"
);

//do ..while
do {
    let preguntaInicial = prompt("¿Qué tipo de producto desea llevar?\nEscriba el nombre o letra para filtrar").toLowerCase();
    filtrarProductos(preguntaInicial);

    let preguntaSecundaria = prompt("De acuerdo a su filtración, ¿qué producto desea llevar?").toLowerCase();

    //Ciclo for ..of para tener el elemento que en filtra
    for (const el of infoDeProductos) {
        //Verificamos que este el producto
        if (preguntaSecundaria === el.nombre) {
            const preguntaCantidad = prompt("¿Cuántos deseas llevar?");
            //Verificamos si es una cantidad válida
            if (preguntaCantidad >= 1){
                el.cantidad += preguntaCantidad*1;
                el.precioPorCantidad += (el.cantidad * el.precioUnitario);
                alert(el.nombre + "\nCantidad a llevar: " + el.cantidad + "\nPrecio Total de este producto: " + el.precioPorCantidad);
                retornarOferta(el);

                //Verificamos el días para dar descuento
                const preguntaDias = prompt("¿Qué día es hoy? \nLunes: 'L' \nJueves: 'J' \nViernes: 'V'").toUpperCase();
                verificarDia(el, preguntaDias);
                break;
            } else {
                alert("Ingrese un valor númerico")
                break;
            };
        };
    };

} while(confirm("¿Desea continuar agregando productos?"));

// Verificamos si compro por lo menos un producto de cada tipo para el descuento del 10%
const descuento = infoDeProductos.find(el => el.cantidad === 0);
if(descuento === undefined){
    for (obj of infoDeProductos){
        obj.precioPorCantidad *= .9;
    };
};

console.log(infoDeProductos);
for (const el of infoDeProductos){
    precioFinal += el.precioPorCantidad;
};
alert(`El precio total es:  ${precioFinal.toFixed(2)}`);