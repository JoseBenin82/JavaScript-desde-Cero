const libro = {
    // Propiedades requeridas
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    anio: 1605,
    estado: "disponible",
    capitulos: [],

    info() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Año de publicación: ${this.anio}`);
        console.log(`Estado: ${this.estado}`);
    },

    agregarCapitulo(nombre) {
        this.capitulos.push(nombre);
        console.log(`Capítulo "${nombre}" agregado.`);
    },

    eliminarCapitulo(nombre) {
        const index = this.capitulos.indexOf(nombre);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`Capítulo "${nombre}" eliminado.`);
        }
        else { console.log(`El capítulo "${nombre}" no existe.`); }
    }

}

libro.info();
libro.agregarCapitulo("Capítulo I");
libro.agregarCapitulo("Capítulo II");

//libro.info(); libro.eliminarCapitulo("Capítulo I");

libro.info();

