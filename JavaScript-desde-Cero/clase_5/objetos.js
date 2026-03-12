//Objetos 

//Sintaxis 
let obj = {
    llave: "valor",
    llave2: "valor2"
}

// Ejemplo 
let persona = {
    nombre: "Julio",
    edad: 30,
    ciudad: "Buenos Aires",
    profesion: "Desarrollador Web",
    telefono: "123-456-7890"

}

console.log(persona);
console.log("Nombre:", persona.nombre);

//Otra forma de acceder a las propiedades del objeto es usando corchetes
console.log("Edad:", persona["edad"]);

//Manipulando edad 
console.log("Cumpleaños:", 2026 - persona.edad);

//Modificando el telefono 
persona.telefono = "987-654-3210";
console.log("Teléfono actualizado:", persona.telefono);


//Agregando una nueva propiedad al objeto
persona.ciudad = "Córdoba";
console.log("Ciudad actualizada:", persona.ciudad);


//Metodos 
//Funciones especificas de los objetos 

let libro = {
    libro: "1984",
    autor: "George Orwell",
    info() {
        console.log(`${this.libro} fue escrito por ${this.autor}`);
    }
}
libro.info();

let libro2 = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    info() {
        console.log(`${this.titulo} fue escrito por ${this.autor}`);
    }
}
libro2.info();