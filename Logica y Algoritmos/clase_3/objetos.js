let carritoComptras={

    productos:[],

    agregarProducto:function(producto){
        this.productos.push(producto)
    },

    eliminarProducto:function(indice){
        this.productos.splice(indice,1)
    }

}

carritoComptras.agregarProducto("manzanas")
carritoComptras.agregarProducto("Platanos")
console.log(carritoComptras.productos)

carritoComptras.eliminarProducto(1)
console.log(carritoComptras.productos)