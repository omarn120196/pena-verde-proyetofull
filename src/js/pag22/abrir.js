function abrirConceptosSeguros(){
    const noConcepto = document.querySelectorAll('.numeroConcepto');

    noConcepto.forEach(numero=>{
        numero.addEventListener('click', function(){
            const dato = numero.dataset.concepto;
            
            const concepto = document.querySelector(`#conceptoS${dato}`);
            concepto.classList.toggle('abrirConcepto');
        });
    });
}