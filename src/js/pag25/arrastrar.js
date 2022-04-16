function arrastrar(){
    
    const elementosDrag = $('.p-drag');
    const elementosDrop = $('.drop');

    let dragSelect;
    let dropCorrespondiente;

    let aciertos = 0;
    
    elementosDrag.draggable({
        revert: true,
        helper: "clone",
        start: function( event, ui ) {
            dragSelect = $(this).attr('data-id');
        }
    });


    elementosDrop.droppable({
            
        accept: ".p-drag",
        tolerance: "intersect",
        drop: function( event, ui ) {
            dropCorrespondiente = $(this).attr('data-id');

            verificarLugar();
        }
    });

    function verificarLugar() {  

        if(dragSelect === dropCorrespondiente){
            let dragActivo = $(`#p-drag${dragSelect}`);
            let dropActivo = $(`#drop${dropCorrespondiente}`);

            dragActivo.draggable({
                revert: false,
                appendTo: dropActivo
            });

            dragActivo.draggable("disable");



            dragActivo.css({
                cursor: 'default'
            });

            dropActivo.append(dragActivo);

            aciertos++;

            if(aciertos == 8){
                retroalimentacion();
            }
        }
    }

    function retroalimentacion(){
        const contIntro = $('#intro-actividad25');
        const contInicio = $('#inicioBtn');
        const contActividad = $('#cont-actividad25');
        const contBox = $('#box');

        contIntro.addClass('retro');
        contInicio.addClass('retro');
        contActividad.addClass('retro');

        contBox.addClass('bien');
        contBox.css('opacity', 0);

        setTimeout(()=>{
            contBox.css('opacity', 1);
        }, 600);
    }
}

