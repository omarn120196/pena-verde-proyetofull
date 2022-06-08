function voltearCardsPag12(){
    const tarjetas = document.querySelectorAll('#cont-02-flipCards .cards');

    tarjetas.forEach(tarjeta=>{
        tarjeta.addEventListener('click', function () {  
            tarjeta.classList.toggle('click');
        });
    });
}