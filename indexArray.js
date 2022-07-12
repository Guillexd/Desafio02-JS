
//Base de datos

// const infoDeProductos = [
//     {
//         nombre: "Papas",
//         precioUnitario: 1,
//         precioPorCantidad: 1,
//         cantidad: 0
//     },
//     {
//         nombre: "Cebolla",
//         precioUnitario: 1.2,
//         precioPorCantidad: 1.2,
//         cantidad: 0
//     },
//     {
//         nombre: "Calabacin",
//         precioUnitario: 2.1,
//         precioPorCantidad: 2.1,
//         cantidad: 0
//     },
//     {
//         nombre: "Fresas",
//         precioUnitario: 0.6,
//         precioPorCantidad: 0.6,
//         cantidad: 0
//     }
// ];

const dias = ["L", "J", "V"]; //días de descuento
class InfoDeProductos {
    constructor(nombre, precioUnitario, precioPorCantidad, cantidad) {
        this.nombre = nombre;
        this.precioUnitario = precioUnitario;
        this.precioPorCantidad = precioPorCantidad;
        this.cantidad = cantidad;
    };
};

const infoDeProductos = [];

infoDeProductos.push(new InfoDeProductos("papas", 1, 1, 0));
infoDeProductos.push(new InfoDeProductos("cebolla", 1.2, 1.2, 0));
infoDeProductos.push(new InfoDeProductos("calabacin", 2.1, 2.1, 0));
infoDeProductos.push(new InfoDeProductos("fresas", 0.6, 0.6, 0));