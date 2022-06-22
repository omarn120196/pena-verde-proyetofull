function seleccionarResponsive(){
    
    let aciertos = 0;
    const select1 = document.querySelectorAll('.select1');
    const select2 = document.querySelectorAll('.select2');
    const select3 = document.querySelectorAll('.select3');
    const select4 = document.querySelectorAll('.select4');
    const select5 = document.querySelectorAll('.select5');
    const select6 = document.querySelectorAll('.select6');
    const select7 = document.querySelectorAll('.select7');
    const select8 = document.querySelectorAll('.select8');

    select1.forEach(select=>{
        
        select.addEventListener('click', function () {  
            const data = parseInt(select.dataset.id);
            if(data == 1){
                select.classList.add('respuesta-correcta');
                setTimeout(()=>{
                    select.classList.remove('respuesta-correcta');
                    select.classList.add('fondoCorrecto');
                    aciertos ++;
                    if(aciertos == 8){
                        retroalimentacion();
                    }
                }, 2000)
            }
            else{
                select.classList.remove('respuesta-incorrecta');
                select.classList.add('respuesta-incorrecta');
            }
        });
    });

    select2.forEach(select=>{
        
        select.addEventListener('click', function () {  
            const data = parseInt(select.dataset.id);
            if(data == 2){
                select.classList.add('respuesta-correcta');
                setTimeout(()=>{
                    select.classList.remove('respuesta-correcta');
                    select.classList.add('fondoCorrecto');
                    aciertos ++;
                    if(aciertos == 8){
                        retroalimentacion();
                    }
                }, 2000)
            }
            else{
                select.classList.remove('respuesta-incorrecta');
                select.classList.add('respuesta-incorrecta');
            }
        });
    });

    select3.forEach(select=>{
        
        select.addEventListener('click', function () {  
            const data = parseInt(select.dataset.id);
            if(data == 3){
                select.classList.add('respuesta-correcta');
                setTimeout(()=>{
                    select.classList.remove('respuesta-correcta');
                    select.classList.add('fondoCorrecto');
                    aciertos ++;
                    if(aciertos == 8){
                        retroalimentacion();
                    }
                }, 2000)
            }
            else{
                select.classList.remove('respuesta-incorrecta');
                select.classList.add('respuesta-incorrecta');
            }
        });
    });

    select4.forEach(select=>{
        
        select.addEventListener('click', function () {  
            const data = parseInt(select.dataset.id);
            if(data == 4){
                select.classList.add('respuesta-correcta');
                setTimeout(()=>{
                    select.classList.remove('respuesta-correcta');
                    select.classList.add('fondoCorrecto');
                    aciertos ++;
                    if(aciertos == 8){
                        retroalimentacion();
                    }
                }, 2000)
            }
            else{
                select.classList.remove('respuesta-incorrecta');
                select.classList.add('respuesta-incorrecta');
            }
        });
    });

    select5.forEach(select=>{
        
        select.addEventListener('click', function () {  
            const data = parseInt(select.dataset.id);
            if(data == 5){
                select.classList.add('respuesta-correcta');
                setTimeout(()=>{
                    select.classList.remove('respuesta-correcta');
                    select.classList.add('fondoCorrecto');
                    aciertos ++;
                    if(aciertos == 8){
                        retroalimentacion();
                    }
                }, 2000)
            }
            else{
                select.classList.remove('respuesta-incorrecta');
                select.classList.add('respuesta-incorrecta');
            }
        });
    });

    select6.forEach(select=>{
        
        select.addEventListener('click', function () {  
            const data = parseInt(select.dataset.id);
            if(data == 6){
                select.classList.add('respuesta-correcta');
                setTimeout(()=>{
                    select.classList.remove('respuesta-correcta');
                    select.classList.add('fondoCorrecto');
                    aciertos ++;
                    if(aciertos == 8){
                        retroalimentacion();
                    }
                }, 2000)
            }
            else{
                select.classList.remove('respuesta-incorrecta');
                select.classList.add('respuesta-incorrecta');
            }
        });
    });

    select7.forEach(select=>{
        
        select.addEventListener('click', function () {  
            const data = parseInt(select.dataset.id);
            if(data == 7){
                select.classList.add('respuesta-correcta');
                setTimeout(()=>{
                    select.classList.remove('respuesta-correcta');
                    select.classList.add('fondoCorrecto');
                    aciertos ++;
                    if(aciertos == 8){
                        retroalimentacion();
                    }
                }, 2000)
            }
            else{
                select.classList.remove('respuesta-incorrecta');
                select.classList.add('respuesta-incorrecta');
            }
        });
    });

    select8.forEach(select=>{
        
        select.addEventListener('click', function () {  
            const data = parseInt(select.dataset.id);
            if(data == 8){
                select.classList.add('respuesta-correcta');
                setTimeout(()=>{
                    select.classList.remove('respuesta-correcta');
                    select.classList.add('fondoCorrecto');
                    aciertos ++;
                    if(aciertos == 8){
                        retroalimentacion();
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