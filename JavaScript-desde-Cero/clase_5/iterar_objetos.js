let estudiante = {
    nombre: "Ana",
    edad: 22,
    cursos: ["Matemáticas", "Física", "Programación"],

}

for (prop in estudiante) {
    console.log(`La llave es:${prop} y el valor es: ${estudiante[prop]}`);
}

//Es equivalente a ... 
console.log(`La llave es:${"nombre"} y el valor es: ${estudiante["nombre"]}`);

