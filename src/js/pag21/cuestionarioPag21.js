function iniciarCuestionarioPag21(){
    const qtActivar=document.getElementById("contenidoPag21");
    const qtDesactivar=document.getElementById("inicioCuest21");
    qtActivar.classList.add('activo');
    qtDesactivar.classList.remove('activo');
    
    const elemento1=document.getElementById('respuesta1pag21');//caja3
    const elemento2=document.getElementById('respuesta2pag21');//caja4
    const elemento3=document.getElementById('respuesta3pag21');//caja1
    const elemento4=document.getElementById('respuesta4pag21');//caja5
    const elemento5=document.getElementById('respuesta5pag21');//caja2

    const contRes1=document.getElementById('contenedor1');
    const contRes2=document.getElementById('contenedor2');
    const contRes3=document.getElementById('contenedor3');
    const contRes4=document.getElementById('contenedor4');
    const contRes5=document.getElementById('contenedor5');
    
    contRes1.addEventListener('dragover', e => {
        e.preventDefault();
    });
    contRes2.addEventListener('dragover', e => {
        e.preventDefault();
    });
    contRes3.addEventListener('dragover', e => {
        
        e.preventDefault();
    });
    contRes4.addEventListener('dragover', e => {
        e.preventDefault();
    });
    contRes5.addEventListener('dragover', e => {
        e.preventDefault();
    });


    contRes1.addEventListener('drop', e => {
        elemento3.addEventListener('dragend', e => {
            elemento3.classList.add('correcto')
            contRes1.classList.add('correcto')
        });
    });

    contRes2.addEventListener('drop', e => {
        elemento5.addEventListener('dragend', e => {
            elemento5.classList.add('correcto')
            contRes2.classList.add('correcto')
        });
    });

    contRes3.addEventListener('drop', e => {
        elemento1.addEventListener('dragend', e => {
            elemento1.classList.add('correcto')
            contRes3.classList.add('correcto')
        });
    });

    contRes4.addEventListener('drop', e => {
        elemento2.addEventListener('dragend', e => {
            elemento2.classList.add('correcto')
            contRes4.classList.add('correcto')
        });
    });

    contRes5.addEventListener('drop', e => {
        elemento4.addEventListener('dragend', e => {
            elemento4.classList.add('correcto')
            contRes5.classList.add('correcto')
        });
    });
}

