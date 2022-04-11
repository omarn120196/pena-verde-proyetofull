function visualizarCuadro1(){
    var cuadro1 = document.getElementById("cuadro1");

    if (cuadro1.style.display === "none") {
        cuadro1.style.display  = "block";
    } else {
        cuadro1.style.display = "none";
    }

    cuadro1.style.opacity = 0;

    setTimeout(()=>{
        cuadro1.style.opacity = 1;
    }, 300);
}

function visualizarCuadro2(){
    var cuadro2 = document.getElementById("cuadro2");

    if (cuadro2.style.display === "none") {
        cuadro2.style.display  = "block";
    } else {
        cuadro2.style.display = "none";
    }
}

function visualizarCuadro3(){
    var cuadro3 = document.getElementById("cuadro3");

    if (cuadro3.style.display === "none") {
        cuadro3.style.display  = "block";
    } else {
        cuadro3.style.display = "none";
    }
}