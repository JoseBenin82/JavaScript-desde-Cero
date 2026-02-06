//Funcion normal 
function funcion_normal(a, b) {
    return a + b;
}

let funcion_como_variable = function (a, b) {
    return a + b;
}

//Funcion flecha
let funcion_flecha = (a, b) => {
    return a + b;
}

//Funcion flecha simplificada (cuando solo hay una linea de codigo)
let funcion_flecha_simplificada = (a, b) => a + b;

//Funciones con un solo parametro no necesita parentesis 

let funcion_con_un_parametro = a => a * 2;

console.log(funcion_normal(2, 3));
console.log(funcion_como_variable(3, 7));
console.log(funcion_flecha(4, 6));
console.log(funcion_flecha_simplificada(5, 8));
console.log(funcion_con_un_parametro(10));