const libro = {
    // Propiedades requeridas
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    anio: 1605,
    estado: "disponible",

    info (){
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Año de publicación: ${this.anio}`);
        console.log(`Estado: ${this.estado}`);
    }

}

libro.info();

