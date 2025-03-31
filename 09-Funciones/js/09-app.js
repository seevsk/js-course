// Metodos de propiedad, son funciones con sintaxis que al utilizarla es lo mismo que un metodo (objeto que contiene multiples funciones)

const reproductor = {
    reproducir: function(id){ 
        console.log(`Reproduciendo cancion con el id ${id}...`);
    },
    pausar: function(){
        console.log(`Pausando ...`)
    },
    borrar: function (id){
        console.log(`Borrando cancion ${id} ...`);
    },
    crearPlaylist: function (playlist){
        console.log(`Creando playlist ${playlist}...`);
    },
    reproducirPlaylist: function(playlist){
        console.log(`Reproduciendo playlist ${playlist}`)
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist(`Hibiki`);
reproductor.reproducirPlaylist(`Hibiki`);