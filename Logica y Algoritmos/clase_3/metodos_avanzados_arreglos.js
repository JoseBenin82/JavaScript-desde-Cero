//Every 

let numeros = [2, 4, 6, 8]
const todosPares = numeros.every(elemento => elemento % 2 === 0)
console.log(todosPares)

let arr = ["A", "B", "C", "D"]
const todoString = arr.every(elemento => typeof elemento === "string")
console.log(todoString)


//Some 

numeros = [1, 2, 3, 4, 5]
const hayPares = numeros.some(elemento => elemento % 2 === 0)
console.log(hayPares)

arr = ["A", "B", "C", "D"]
const hayNumeros = arr.some(elemento => typeof elemento === "number")
console.log(hayNumeros)

//Includes

let nombres = ["Ana", "Juan", "Pedro"]
const incluyeJuan = nombres.includes("Juan")
console.log(incluyeJuan)

//reduce 

numeros = [1, 2, 3, 4]
const suma = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)
console.log(suma)

numeros.reduce(function (acumulador, elemento) {
    return acumulador + elemento
}, 0)


//equivalente a....

let acumulador = 0;
for (let i = 0; i < numeros.length; i++) {
    acumulador = acumulador + numeros[1]
}
console.log(acumulador)



//Ejemplo de reduce , imitando a "join" 

arr = ["A", "B", "C", "D"]

let result = arr.reduce((acumulador, elemento) => acumulador += elemento, "")
console.log(result)

//Valor maximo 

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let max = arr.reduce((antes, elemento) =>{
    if(antes > elemento){
        return antes
    }else{
        return elemento
    }

} , 0)
console.log(max)
//version compacta
max=arr.reduce((antes,elemento)=>antes>elemento? antes:elemento,0)
