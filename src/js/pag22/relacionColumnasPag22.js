window.addEventListener('load', function(){
    const elemento1=document.getElementById('concepto1');
    const elemento2=document.getElementById('concepto2');
    const elemento3=document.getElementById('concepto3');

    const contRes1=document.getElementById('contenedor1pag22');
    const contRes2=document.getElementById('contenedor2pag22');
    const contRes3=document.getElementById('contenedor3pag22');
    this.window.onload=function inciarR(){
        setTimeout('iniciarRel',1000);
    }

    

});

function iniciarRel(){
    const elemento1=document.getElementById('concepto1');
    const elemento2=document.getElementById('concepto2');
    const elemento3=document.getElementById('concepto3');

    const contRes1=document.getElementById('contenedor1pag22');
    const contRes2=document.getElementById('contenedor2pag22');
    const contRes3=document.getElementById('contenedor3pag22');
    elemento1.addEventListener('dragend', e => {
        console.log('drag')
    });
    contRes1.addEventListener('dragover', e => {
        e.preventDefault();
    });
    contRes2.addEventListener('dragover', e => {
        e.preventDefault();
    });
    contRes3.addEventListener('dragover', e => {
        
        e.preventDefault();
    });

    contRes1.addEventListener('drop', e => {
        elemento3.addEventListener('dragend', e => {
            console.log('dragend')
            elemento3.classList.add('correcto')
            contRes1.classList.add('correcto')
        });
    });

    contRes2.addEventListener('drop', e => {
        elemento1.addEventListener('dragend', e => {
            elemento1.classList.add('correcto')
            contRes2.classList.add('correcto')
        });
    });

    contRes3.addEventListener('drop', e => {
        elemento2.addEventListener('dragend', e => {
            elemento2.classList.add('correcto')
            contRes3.classList.add('correcto')
        });
    });
}

