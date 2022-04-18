function iniciarCuestionario(){
    const qtActivar=document.getElementById("pregunta1");
    const qtDesactivar=document.getElementById("pregunta0");
    qtActivar.classList.add('activo');
    qtDesactivar.classList.remove('activo');
    //alert("pregunta");
    
    /*const selectBtn = document.querySelectorAll('');
    
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
    })*/
}

function responder1(){
    const qtActivar1=document.getElementById("resultadoPreg1-1");
    qtActivar1.classList.add('activo');
    const qtActivar2=document.getElementById("resultadoPreg1-2");
    qtActivar2.classList.add('activo');

    setTimeout(function(){
        const qtActivar2=document.getElementById("pregunta2");
        const qtDesactivar3=document.getElementById("pregunta1");
        qtActivar2.classList.add('activo');
        qtDesactivar3.classList.remove('activo');
    }, 5000);
    
}

function responder2(){
    const qtActivar1=document.getElementById("resultadoPreg2-1");
    qtActivar1.classList.add('activo');
    const qtActivar2=document.getElementById("resultadoPreg2-2");
    qtActivar2.classList.add('activo');

    setTimeout(function(){
        const qtActivar3=document.getElementById("pregunta3");
        const qtDesactivar4=document.getElementById("pregunta2");
        qtActivar3.classList.add('activo');
        qtDesactivar4.classList.remove('activo');
    }, 5000);
    
}

function responder3(){
    const qtActivar1=document.getElementById("resultadoPreg3-1");
    qtActivar1.classList.add('activo');
    const qtActivar2=document.getElementById("resultadoPreg3-2");
    qtActivar2.classList.add('activo');

    setTimeout(function(){
        const qtActivar3=document.getElementById("pregunta4");
        const qtDesactivar4=document.getElementById("pregunta3");
        qtActivar3.classList.add('activo');
        qtDesactivar4.classList.remove('activo');
    }, 5000);
    
}

function responder4(){
    const qtActivar1=document.getElementById("resultadoPreg4-1");
    qtActivar1.classList.add('activo');
    const qtActivar2=document.getElementById("resultadoPreg4-2");
    qtActivar2.classList.add('activo');

    setTimeout(function(){
        const qtActivar3=document.getElementById("pregunta5");
        const qtDesactivar4=document.getElementById("pregunta4");
        qtActivar3.classList.add('activo');
        qtDesactivar4.classList.remove('activo');
    }, 5000);
    
}

function responder5(){
    const qtActivar1=document.getElementById("resultadoPreg5-1");
    qtActivar1.classList.add('activo');
    const qtActivar2=document.getElementById("resultadoPreg5-2");
    qtActivar2.classList.add('activo');

    setTimeout(function(){
        const qtActivar3=document.getElementById("final-cuestionario");
        const qtDesactivar4=document.getElementById("pregunta5");
        qtActivar3.classList.add('activo');
        qtDesactivar4.classList.remove('activo');
    }, 5000);
    
}

