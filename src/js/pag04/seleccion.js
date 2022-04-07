function seleccionarInfo04(){
    
    const selectBtn = document.querySelectorAll('a.btn-float');
    
    selectBtn.forEach(btn=>{

        btn.addEventListener('click', function (e) {
            e.preventDefault();  
            const divInfo = btn.getAttribute('href');
            const divActivo = document.querySelector('.circulo-activo');
            const visualizar = document.querySelector(divInfo);

            divActivo.classList.remove('circulo-activo');
            visualizar.classList.add('circulo-activo');

            visualizar.style.opacity = 0;

            setTimeout(()=>{
                visualizar.style.opacity = 1;
            }, 300);
        });
    })
}