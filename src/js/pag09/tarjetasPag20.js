function voltearCardsPag20(){
    const tarjetas = document.querySelectorAll('#flipCards-pag09 .cards');

    tarjetas.forEach(tarjeta=>{
        tarjeta.addEventListener('click', function () {  
            tarjeta.classList.toggle('click');
        });
    });
}