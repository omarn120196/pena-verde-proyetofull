function voltearCardsPag20(){
    const tarjetas = document.querySelectorAll('#flipCards-pag20 .cards');

    tarjetas.forEach(tarjeta=>{
        tarjeta.addEventListener('click', function () {  
            tarjeta.classList.toggle('click');
        });
    });
}