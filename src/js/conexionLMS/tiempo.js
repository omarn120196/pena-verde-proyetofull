let tiempo = '00:00:00';
let horas = 0;
let minutos = 0;
let segundos = 0;
let hr = '00';
let min = '00'
let seg = '00';
let cronometro;

function calcularTiempo(){
    cronometro = setInterval(function(){

        if(segundos > 59){
            segundos = 0;
            minutos++; 
            if(minutos<10){
                min = `0${minutos}`;
            }
            else{
                min = `${minutos}`;
            }

            if(minutos > 59){
                minutos = 0;
                horas++;
                
                if(horas<10){
                    hr = `0${horas}`;
                }
                else{
                    hr = `${horas}`;
                }
            }
        }

        segundos++;

        if(segundos<10){
            seg = `0${segundos}`;
        }  
        else{
            seg = `${segundos}`;
        }
        
        tiempo = `${hr}:${min}:${seg}`;

    }, 1000);
}