//un callback es una funcion que es llamda como parametro de otra 

const myfunc = (param, callback) => {
    console.log('el texto ${param} y su transformacion es ${callback(param)} ')
}

const todoAMayuculas = (texto) => {
    return texto.toUpperCase()
}

myfunc("Hola mundo",todoAMayuculas)