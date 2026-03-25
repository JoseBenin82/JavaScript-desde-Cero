//1. inicializar los dos punteros 

let arr=[1,5,7,33,2,86,10,9,14]
let obj=35


let izquierda=0
let derecha=arr.length-1
let suma=0
//2. mientras izquierda sea menor que derecha:

while(izquierda<derecha){
     //2.1 Calcula la suma de los elementos en las posiciones izquiersa y derecha
    suma= arr[izquierda]+arr[derecha]

    //2.2 su la suma es igual al valor objetivo , Encontramos el par y nos detenemos 
    if(suma===objetivo){
        console.log('par encontrado! ${arr[izquierda]} y ${arr[derecha]}')
    }

}