
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
// class InfoDeProductos {
//     constructor(nombre, descripcion, precio, id, precioUnitario) {
//         this.nombre = nombre;
//         this.descripcion = descripcion;
//         this.precio = precio;
//         this.id = id;
//         this.precioUnitario = precioUnitario;
//         this.cantidad = 0;
//     };
// };
// //array donde se guardan los productos
// const infoDeProductos = [];

// infoDeProductos.push(new InfoDeProductos("Papa", "Papas calidad-precio", 1, 1, 1));
// infoDeProductos.push(new InfoDeProductos("Cebolla", "Cebollas calidad-precio", 1.2, 2, 1.2));
// infoDeProductos.push(new InfoDeProductos("Calabacin", "Calabacines calidad-precio", 2.1, 3, 2.1));
// infoDeProductos.push(new InfoDeProductos("Fresas", "Fresas calidad-precio", 0.6, 4, 0.6));

 
// //documento
// const d = document;
// //variables
// const $main = d.querySelector("main"),
// $aside = d.querySelector("aside"),
// $fragment = d.createDocumentFragment();
// //array nuevo para los productos
// let carritoDeCompras = []; 

// //forEach para agregar productos del array
// infoDeProductos.forEach((obj) => {
//     const $div = d.createElement("div");
//     $div.classList.add("productos")
//     $div.innerHTML = `
//     <h4>Nombre: ${obj.nombre}</h4>
//     <p>${obj.descripcion}</p>
//     <span>Precio: $${obj.precio}</span>
//     <h5>Id: ${obj.id}</h5>
//     <button id="agregar${obj.id}">Comprar</button>
//     `;

//     //agregamos al html
//     $fragment.appendChild($div);

//     //
//     let  boton = d.getElementById(`agregar${obj.id}`);

//     // boton.addEventListener("click", ()=>{
//     //     agregarProducto(obj.id);
//     // });

// });

// $main.appendChild($fragment);
// //Funciones de Eventos DOMContentLoaded
// // d.addEventListener("DOMContentLoaded", (e)=>{
// //     // hamburguesa(".claseBoton", ".panel", ".menu a");
// // });
// console.log(boton);

// //Funcion de eventos
// const agregarProducto = (id) => {
//     const existe = carritoDeCompras.some(obj => obj.id === id)

//     if(existe){
//         carritoDeCompras.map(obj=>{
//             if(obj.id === id){
//                 obj.cantidad++;
//                 obj.precio = (obj.cantidad*obj.precioUnitario) 
//             };
//         });
//     } else {
//         const item = infoDeProductos.find(obj => obj.id === id);
//         carritoDeCompras.push(item);
        
//     };

   
//     actualizarCarrito();
//     console.log(carritoDeCompras);
// };

// const actualizarCarrito = () => {
//     $aside.innerHTML = "";
//     carritoDeCompras.forEach(obj => {
//         const $div = d.createElement("div");
//         $div.innerHTML = `
//         <h4>Nombre: ${obj.nombre}</h4>
//         <span>Precio: $${obj.precio}</span>
//         <h5>Id: ${obj.id}</h5>
//         <h6>Cantidad: ${obj.cantidad}</h6>
//         `;
//         $aside.appendChild($div)
//     });
// }

// //funciones
// function leerProducto(producto){
//     const infoProducto = {
//         nombre: producto.querySelector("h4").innerText,
//         precio: producto.querySelector("span").innerText,
//         id: producto.querySelector("h5").innerText,
//         cantidad: 1
//     };
//     console.log(infoProducto);
// };



//USAS EL CLOSEST Y CONECTAR FUNCIONES PARA QUE LOS VALORES NO TE SALGAN UNDEFINED 
class InfoDeProductos {
    constructor(nombre, descripcion, precio, id) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.id = id;
        this.cantidad = 0;
    };
};
//array donde se guardan los productos
const infoDeProductos = [];

infoDeProductos.push(new InfoDeProductos("Papa", "Papas calidad-precio", 1, 1));
infoDeProductos.push(new InfoDeProductos("Cebolla", "Cebollas calidad-precio", 1.2, 2));
infoDeProductos.push(new InfoDeProductos("Calabacin", "Calabacines calidad-precio", 2.1, 3));
infoDeProductos.push(new InfoDeProductos("Fresas", "Fresas calidad-precio", 0.6, 4));

 
//documento
const d = document;
//variables
const $main = d.querySelector("main"),
$aside = d.querySelector("aside"),
$fragment = d.createDocumentFragment();
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
    $fragment.appendChild($div);
});
$main.appendChild($fragment);

cargandoEvents();

function cargandoEvents(){
    $main.addEventListener("click", agregarProducto);
}

//Funciones de Eventos DOMContentLoaded
// d.addEventListener("DOMContentLoaded", (e)=>{
//     // hamburguesa(".claseBoton", ".panel", ".menu a");
// });

function agregarProducto(e){
    // e.preventDefault();
    const domsito = e.target.closest("div");
    const prodTitulo = domsito.querySelector("h4").textContent;
    const prodPrecio = domsito.querySelector("span").textContent;
    productoAgregado(prodTitulo, prodPrecio);
}


function productoAgregado (prodTitulo, prodPrecio) {
    const $section = d.createElement("section");
    const contenidoSection = `
    <div>
        
            
        <p>${prodTitulo}<br>Precio: $${prodPrecio}</p>
        <input type="number" value="1">
        <button> X </button>
    </div>
    `;
    $section.innerHTML = contenidoSection;
    $aside.insertAdjacentElement("afterbegin", $section)
    // $aside.prepend($section) lo mismo que arriba 

};