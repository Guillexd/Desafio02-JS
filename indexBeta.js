
//Vamos a tener 3 productos: Hamburguesa clásica, Hamburguesa de pollo y Hamburguesa especial
//Los L y V tiene descuento del 20%.
//Si lleva más de 10 productos del mismo tipo se le da el decimo gratis todos los días
//Si lleva cada uno de los 3 tipos de hamburguesa se da un descuento del 10%
alert(
    "Hamburguesa clásica: $1 \nHamburguesa de pollo: $2 \nHamburguesa especial: $3 \nSi llevas por lo menos 1 de cada tipo te damos un descuento del 10% \nPor cada 10 productos del mismo tipo se le da el décimo totalmente gratis \nLos Lunes, Jueves y Viernes tenemos descuento del 20%"
);

//arrays
const nombreProductos = ["clasica", "pollo", "especial"];
const cantidadProductos = [0, 0, 0]; //cantidad de cada hamburguesa respectivamente
const precioProductos = [0, 0, 0]; //precio de cada una por cantidad en dólares
const precioUnitario = [1, 2, 3];
const dias = ["L", "J", "V"]; //días de descuento

//variables
const c = 0; //cantidad de H. clásicas
const p = 1; //cantidad de H. de pollo
const e = 2; //cantidad de H. especiales

//funcion para imprimir los resultados
const imprimir = (nombre) => {
    if (nombreProductos.includes(nombre)){
        return `El producto Hamburguesa ${nombre}, tiene como precio final $${precioProductos[nombreProductos.indexOf(nombre)]}`
    };
};

//funciones para el descuento de días
const verficarTipo = (dia, i) => {
    if (dias.includes(dia)){
        precioProductos[i] -= precioProductos[i]*.2;
    }
};

//funcion para contar los productos
const contadorProductos = (i) => {
    let contador = cantidadProductos[i];
    contador += 1;
    cantidadProductos[i] = contador;
};

//funcion para determinar el precio con descuento "de cada 10 te llevas uno gratis"
const retornarOferta = (i) => {
    if (cantidadProductos[i] >= 10) {
        return precioUnitario[i] * cantidadProductos[i] - ((cantidadProductos[i] - (cantidadProductos[i]%10))/10)*precioUnitario[i];
    } else {
        return precioUnitario[i] * cantidadProductos[i];
    }
}


//ciclo while
let condicionalUno = prompt("¿Quiere agregar un producto? \nSÍ (y) NO (cualquier tecla)");
condicionalUno = condicionalUno.toLowerCase();

while(condicionalUno == "y") {

    let condicionalDos = prompt("¿Qué tipo de hamburguesa? \nEscriba el nombre de la hamburguesa o 'salir' para terminar la compra");
    condicionalDos = condicionalDos.toLowerCase();

    if ((condicionalDos == "clasica") || (condicionalDos == "clásica")){
        let contadorFor = parseInt(prompt("¿Cuántas quieres llevar?"));
        for (let i = 0; i<contadorFor; i++) {
            contadorProductos(c);
        }
        precioProductos[c] = retornarOferta(c);

        let verificadorDias = prompt("¿Qué día es? \nLunes (L) \nJueves (J) \nViernes (V) \nOtro (cualquier tecla)");
        verificadorDias = verificadorDias.toUpperCase();
        verficarTipo(verificadorDias, c);

    } else if (condicionalDos == "pollo") {
        let contadorFor = parseInt(prompt("¿Cuántas quieres llevar?"));
        for (let i = 0; i < contadorFor; i++) {
            contadorProductos(p);
        }
        precioProductos[p] = retornarOferta(p);

        let verificadorDias = prompt("¿Qué día es? \nLunes (L) \nJueves (J) \nViernes (V) \nOtro (cualquier tecla)");
        verificadorDias = verificadorDias.toUpperCase();
        verficarTipo(verificadorDias, p);

    } else if (condicionalDos == "especial") {
        let contadorFor = parseInt(prompt("¿Cuántas quieres llevar?"));
        for (let i = 0; i < contadorFor; i++) {
            contadorProductos(e);
        }
        precioProductos[e] = retornarOferta(e);

        let verificadorDias = prompt("¿Qué día es? \nLunes (L) \nJueves (J) \nViernes (V) \nOtro (cualquier tecla)");
        verificadorDias = verificadorDias.toUpperCase();
        verficarTipo(verificadorDias, e);

    } else if (condicionalDos == "salir") {
        break;
    }
    condicionalUno = prompt("¿Quiere agregar un producto? \nSÍ (y) NO (cualquier tecla)");
}
//descuento por comprar los 3 tipos
if ((cantidadProductos[0] == 1) || (cantidadProductos[1] == 1) || (cantidadProductos[2] == 1)) {
    precioProductos[i] -= precioProductos[i] * .1;
};


//variables
const precioClasica = precioProductos[c];
const precioPollo = precioProductos[p];
const precioEspecial = precioProductos[e];
const precioTotal = precioClasica + precioEspecial + precioPollo;

//resultados
for (let i = 0; i < 3; i++) {
    if (cantidadProductos[i] != 0) {
        alert(imprimir(nombreProductos[i]));
    };
};

alert(`Precio total: $${precioTotal}`);