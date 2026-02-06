let nombres=["Ana","Luis","Carlos","Marta","Sofia"];

console.log(nombres[0]);
console.log(nombres[2]);

//Arrego completo
console.log(nombres);


//Metodos de un arreglo 

//push 
nombres.push("Diego");
console.log(nombres);

//pop() busca el ultimo elemento y lo elimina
nombres.pop();
console.log(nombres);

//unshift() agrega un elemento al inicio del arreglo
nombres.unshift("Elena");
console.log(nombres);

//shift() elimina el primer elemento del arreglo
nombres.shift();
console.log(nombres);


//sort ordena de manera alfabetica los elementos del arreglo
let numeros=[5,3,8,1,4];
numeros.sort();
console.log(numeros);

//Ordenar de forma numerica
numeros.sort((a,b)=>a-b);
console.log(numeros);


//Map No modifica el arreglo original
let numeros_por_2=numeros.map(a=>a*2);
console.log(numeros_por_2);