// Aca vamos a crear los productos que despues vamos a utilizar.

const listNombres = ['Pc Mac', 'Auriculares', 'Pc Mac Otro Modelo', 'Tablet', 'Auriculares Grises', 'Pc MSI color negro', 'Celular', 'Pc Asus', 'Camara de fotos'];
const precios = [45000, 2000, 37000, 1500, 4000, 16000, 8000, 22000, 999];
const listaStock = [1,42, 3, 200, 342, 10, 100, 6, 0]

productos = []

var Producto = function(id, nombre, stock, precio) {
  this.id = id;
  this.nombre = nombre;
  this.stock = stock;
  this.precio = precio;
  this.imagen = `img/product${this.id}.png`
  this.favorito = false
  }

var crearProducto = function (id, nombre, stock, precio) {
  var producto = new Producto(id, nombre, stock, precio)
  productos.push(producto)
}

var recorriendoArrays = listNombres.forEach((item, i) => {
  var id = i+1
  var nombre = listNombres[i];
  var stock = listaStock[i];
  var precio = precios[i];

 crearProducto(id, nombre, stock, precio)

})

var marcarFavorito = function () {
  productos[1].favorito = true
}

marcarFavorito();
