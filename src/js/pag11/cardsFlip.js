function voltearCards(){
    const tarjetas = document.querySelectorAll('#cont-tarjetas-flip .cards');

    tarjetas.forEach(tarjeta=>{
        tarjeta.addEventListener('click', function () {  
            tarjeta.classList.toggle('click');
        });
    });
}