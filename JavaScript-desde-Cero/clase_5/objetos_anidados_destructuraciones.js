const empresa = {
    nombre: "Google",
    ubicacion: "California",
    empleados: {
        jefe: "Sundar Pichai"
    }
}

//Desctructuración de objetos anidados
const persona={
    nombre: "Julio",
    edad: 21
}

const {nombre} = persona;
console.log(nombre);

//Es equivalente a ...
const nombre = persona.nombre;
console.log(nombre);
