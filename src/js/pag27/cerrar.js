function cerrarVentana(){

    const btnCerrar = document.querySelector('#cerrar');
    
    if(btnCerrar){

        btnCerrar.addEventListener('click', function (e) {  

            e.preventDefault();
            window.parent.close();
            
            
        });
    }
}

function registrar (promedio) {  
    
    const btnRegistrar = document.querySelector('#registrar');
    

    if(btnRegistrar){

        btnRegistrar.addEventListener('click', function (e) {  

            e.preventDefault();

            asignarCalificación(promedio);
            
        });
    }
}