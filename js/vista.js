
const contenedor = document.querySelector('section');
const precioProducto = document.querySelector('p');
const imagenProducto = document.querySelector('.imagenProducto');
const favProducto = document.querySelector('button');

function renderProductos(){
  productos.forEach(function(elemento, indice){
    console.log(imagenProducto)
    contenedor.innerHTML +=`<article>
                                  <h1>${elemento.nombre}</h1>
                                  <h2>${elemento.precio}</h2>
                                  <img src=${elemento.imagen} alt="">
                                  <h3>${elemento.stock}</h3>
                                  <button></button>
                                  </article>`;
  //  imagenProducto.setAttribute('src', elemento.imagen);
  })

}

renderProductos()
