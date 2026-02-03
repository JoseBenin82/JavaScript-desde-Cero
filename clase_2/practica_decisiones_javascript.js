
let nota = 75; 

console.log(" Sistema de Evaluación de Estudiantes");
console.log(`La nota del estudiante es: ${nota}`);


// Verificamos primero que la nota sea válida (mayor o igual a 0)
if (nota >= 0 && nota <= 100) {

    if (nota >= 90) {
        // Si es 90 o más
        console.log("Resultado: Excelente");
    } else if (nota >= 75) {
        
        console.log("Resultado: Bien");
    } else if (nota >= 60) {
        
        console.log("Resultado: Suficiente");
    } else {
        //  menor de 60
        console.log("Resultado: El estudiante no aprueba");
    }

} else {  
    console.log("Error: Por favor ingresa una nota válida entre 0 y 100.");
}