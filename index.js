// let array = [
//     { id: 1, cantidad: 1 },
//     { id: 2, cantidad: 2 },
// ];

// const objeto = {
//     id: 1, cantidad: 3
// }
// const carrito = [];
// const existe = array.some((curso) => curso.id === objeto.id);
// console.log(existe)
// if (existe) {
//     //Actualizamos la cantidad
//     const cursos = array.map((curso) => {
//         if (curso.id === objeto.id) {
//             return {
//                 ...curso,
//                 cantidad: curso.cantidad+1
//             }; // retorna objeto actualizado
//         } else {
//             return curso; // retorna los objetos que no son duplicados
//         }
//     });

//     array = [...cursos];
//     console.log(array);

// } else {
//     //Agregar elementos al arreglo del carrito
//     array.push(objeto);
//     console.log(array);
// }



//productos
class InfoDeProductos {
    constructor(nombre, descripcion, precio, cantidad, id, precioUnitario) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.id = id;
        this.precioUnitario = precioUnitario;
    };
};
//array donde se guardan los productos
const infoDeProductos = [];

infoDeProductos.push(new InfoDeProductos("Papa", "Papas calidad-precio", 1, 1, 1, 1));
infoDeProductos.push(new InfoDeProductos("Cebolla", "Cebollas calidad-precio", 1.2, 1, 2, 1.2));
infoDeProductos.push(new InfoDeProductos("Calabacin", "Calabacines calidad-precio", 2.1, 1, 3, 2.1));
infoDeProductos.push(new InfoDeProductos("Fresas", "Fresas calidad-precio", 0.6, 1, 4, 0.6));
 
//documento
const d = document;
//variables
const $main = d.querySelector("main"),
$aside = d.querySelector("aside"); 
//array nuevo para los productos
let carritoDeCompras = []; 

//forEach para agregar productos del array
infoDeProductos.forEach((obj) => {
    const $div = d.createElement("div");
    $div.classList.add("productos")
    $div.innerHTML = `
    <h4>Nombre: ${obj.nombre}</h4>
    <p>${obj.descripcion}</p>
    <span>Precio: $${obj.precio}</span>
    <h5>Id: ${obj.id}</h5>
    <button id="agregar${obj.id}">Comprar</button>
    `;

    //agregamos al html
    $main.appendChild($div);

    //
    const boton = d.getElementById(`agregar${obj.id}`);

    boton.addEventListener("click", ()=>{
        agregarProducto(obj.id);
    });

});


//Funciones de Eventos DOMContentLoaded
// d.addEventListener("DOMContentLoaded", (e)=>{
//     // hamburguesa(".claseBoton", ".panel", ".menu a");
// });

//Funcion de eventos
const agregarProducto = (id) => {
    const existe = carritoDeCompras.some(obj => obj.id === id)

    if(existe){
        carritoDeCompras.map(obj=>{
            if(obj.id === id){
                obj.cantidad++;
                obj.precio = (obj.cantidad*obj.precioUnitario) 
            };
        });
    } else {
        const item = infoDeProductos.find(obj => obj.id === id);
        carritoDeCompras.push(item);
        
    };

   
    actualizarCarrito();
    console.log(carritoDeCompras);
};

const actualizarCarrito = () => {
    $aside.innerHTML = "";
    carritoDeCompras.forEach(obj => {
        const $div = d.createElement("div");
        $div.innerHTML = `
        <h4>Nombre: ${obj.nombre}</h4>
        <span>Precio: $${obj.precio}</span>
        <h5>Id: ${obj.id}</h5>
        <h6>Cantidad: ${obj.cantidad}</h6>
        `;
        $aside.appendChild($div)
    });
}

//funciones
// function leerProducto(producto){
//     const infoProducto = {
//         nombre: producto.querySelector("h4").innerText,
//         precio: producto.querySelector("span").innerText,
//         id: producto.querySelector("h5").innerText,
//         cantidad: 1
//     };
//     console.log(infoProducto);
// };
