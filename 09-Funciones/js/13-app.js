
const reproductor = {
    cancion: ``,
    reproducir: id => 
        console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () =>
        console.log(`Pausando ...`),
    borrar: id =>
        console.log(`Borrando cancion ${id} ...`) ,
    crearPlaylist: playlist =>
        console.log(`Creando playlist ${playlist}...`),
    reproducirPlaylist: playlist =>
        console.log(`Reproduciendo playlist ${playlist}`),
    // set agrega valores
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    // get obtiene esos valores 
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = `Mora-Unavez`;
reproductor.obtenerCancion; //En el get no es necesario el parentesis de la funcion, solamente cuando lo defines de esta forma



reproductor.reproducir(30);
// reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist(`Hibiki`);
reproductor.reproducirPlaylist(`Hibiki`);