function dibujarLineas(indice, p1, p2){

    const canvas = document.querySelectorAll('.canvas');
    const index = parseInt(indice) - 1;
    
    if(canvas[index]){

        const ctx = canvas[index].getContext("2d");
        const estilos = getComputedStyle(canvas[index]);

        const w = estilos.width;
        const h = estilos.height;
        
        canvas[index].width=w.split("px")[0];
        canvas[index].height=h.split("px")[0];
        
        
        ctx.strokeStyle = "green";
        y1 = parseInt(h) * p1;
        y2 = parseInt(h) * p2;
        ctx.moveTo(0, y1);
        ctx.lineTo(canvas[index].width, y2);
        ctx.stroke();
    }
}

