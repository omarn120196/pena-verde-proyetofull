function seleccionarR(){
    let aciertos  = 0;

    const conceptos1 = document.querySelectorAll('.conceptos1');
    const conceptos2 = document.querySelectorAll('.conceptos2');
    const conceptos3 = document.querySelectorAll('.conceptos3');
    const conceptos4 = document.querySelectorAll('.conceptos4');
    const conceptos5 = document.querySelectorAll('.conceptos5');

    conceptos1.forEach(select=>{
        
        select.addEventListener('click', function () {  
            const data = parseInt(select.dataset.definicion);
            if(data == 1){
                select.classList.add('respuesta-correcta');
                setTimeout(()=>{
                    select.classList.remove('respuesta-correcta');
                    select.classList.add('fondoCorrecto');
                    aciertos ++;
                    if(aciertos == 5){
                        mensaje();
                    }
                }, 2000)
            }
            else{
                select.classList.remove('respuesta-incorrecta');
                select.classList.add('respuesta-incorrecta');
            }
        });
    });

    conceptos2.forEach(select=>{
        
        select.addEventListener('click', function () {  
            const data = parseInt(select.dataset.definicion);
            if(data == 2){
                select.classList.add('respuesta-correcta');
                setTimeout(()=>{
                    select.classList.remove('respuesta-correcta');
                    select.classList.add('fondoCorrecto');
                    aciertos ++;
                    if(aciertos == 5){
                        mensaje();
                    }
                }, 2000)
            }
            else{
                select.classList.remove('respuesta-incorrecta');
                select.classList.add('respuesta-incorrecta');
            }
        });
    });

    conceptos3.forEach(select=>{
        
        select.addEventListener('click', function () {  
            const data = parseInt(select.dataset.definicion);
            if(data == 3){
                select.classList.add('respuesta-correcta');
                setTimeout(()=>{
                    select.classList.remove('respuesta-correcta');
                    select.classList.add('fondoCorrecto');
                    aciertos ++;
                    if(aciertos == 5){
                        mensaje();
                    }
                }, 2000)
            }
            else{
                select.classList.remove('respuesta-incorrecta');
                select.classList.add('respuesta-incorrecta');
            }
        });
    });

    conceptos4.forEach(select=>{
        
        select.addEventListener('click', function () {  
            const data = parseInt(select.dataset.definicion);
            if(data == 4){
                select.classList.add('respuesta-correcta');
                setTimeout(()=>{
                    select.classList.remove('respuesta-correcta');
                    select.classList.add('fondoCorrecto');
                    aciertos ++;
                    if(aciertos == 5){
                        mensaje();
                    }
                }, 2000)
            }
            else{
                select.classList.remove('respuesta-incorrecta');
                select.classList.add('respuesta-incorrecta');
            }
        });
    });

    conceptos5.forEach(select=>{
        
        select.addEventListener('click', function () {  
            const data = parseInt(select.dataset.definicion);
            if(data == 5){
                select.classList.add('respuesta-correcta');
                setTimeout(()=>{
                    select.classList.remove('respuesta-correcta');
                    select.classList.add('fondoCorrecto');
                    aciertos ++;
                    if(aciertos == 5){
                        mensaje();
                    }
                }, 2000)
            }
            else{
                select.classList.remove('respuesta-incorrecta');
                select.classList.add('respuesta-incorrecta');
            }
        });
    });
}