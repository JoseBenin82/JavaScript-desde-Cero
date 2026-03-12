let persona = "Juan"; //Variable global

function escuela() {
    let estudiante = "Carlos";

    console.log(persona); //Accedo a la variable global  
    console.log(estudiante); //Accedo a la variable local

}

escuela();
console.log(estudiante); //Error, no puedo acceder a la variable local

let x =1; 
function  myFunc(){
    let x=2; 
    console.log(x);
}
myFunc();
console.log(x); 

let myvar=myFunc()+ myFunc();
console.log(myvar);