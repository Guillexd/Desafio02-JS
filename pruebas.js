const xd = [
    {
        nombre: "papas",
        precioUnitario: 1,
        precioPorCantidad: 1,
        cantidad: 0
    },
    {
        nombre: "cebolla",
        precioUnitario: 1.2,
        precioPorCantidad: 1.2,
        cantidad: 0
    },
    {
        nombre: "calabacin",
        precioUnitario: 2.1,
        precioPorCantidad: 2.1,
        cantidad: 0
    },
    {
        nombre: "fresas",
        precioUnitario: 0.6,
        precioPorCantidad: 0.6,
        cantidad: 0
    }
];

class InfoDeProductos{
    constructor(nombre, precioUnitario, precioPorCantidad, cantidad){
        this.nombre = nombre;
        this.precioUnitario = precioUnitario;
        this.precioPorCantidad = precioPorCantidad;
        this.cantidad = cantidad;
    };
};

const dias = []
const infoDeProductos = [];




infoDeProductos.push(new InfoDeProductos("papas", 1, 1, 0));
infoDeProductos.push(new InfoDeProductos("cebolla", 1.2, 1.2, 0));
infoDeProductos.push(new InfoDeProductos("calabacin", 2.1, 2.1, 0));
infoDeProductos.push(new InfoDeProductos("fresas", 0.6, 0.6, 0));


alert()


filtrarProductos(prompt("Ingrese caracter"))
// console.log(typeof(dias));