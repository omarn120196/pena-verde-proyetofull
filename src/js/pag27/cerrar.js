function cerrarVentana(){

    const btnCerrar = document.querySelector('#cerrar');
    
    if(btnCerrar){

        btnCerrar.addEventListener('click', function (e) {  

            e.preventDefault();
            console.log('cerrando');
            
        });
    }
}

function registrar (promedio) {  
    
    const btnRegistrar = document.querySelector('#registrar');
    

    if(btnRegistrar){

        btnRegistrar.addEventListener('click', function (e) {  

            e.preventDefault();

            console.log(promedio);
            asignarCalificación(promedio);
            
        });
    }
}