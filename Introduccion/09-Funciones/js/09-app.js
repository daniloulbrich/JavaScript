

const reproductor =  {
    reproducir: function(id){
        console.log(`Reporduciendo cancion...${id}`);
    },
    pausar:  function(id){
        console.log(`pausando cancion...${id}`);
    }
    
}

reproductor.reproducir(30);
reproductor.pausar(23)