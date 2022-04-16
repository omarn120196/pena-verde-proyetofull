function arrastrar(){
    
    const elementosDrag = $('.p-drag');
    const elementosDrop = $('.drop');

    let dragSelect;
    let dropCorrespondiente;
    
    elementosDrag.draggable({
        revert: true,
        start: function( event, ui ) {
            dragSelect = $(this).attr('data-id');
            console.log(`Drag ${dragSelect}`);
        }
    });


    elementosDrop.droppable({
            
        accept: ".p-drag",
        tolerance: "intersect",
        drop: function( event, ui ) {
            dropCorrespondiente = $(this).attr('data-id');
            console.log(`Lugar ${dropCorrespondiente}`);

            verificarLugar();
        }
    });

    function verificarLugar() {  

        if(dragSelect === dropCorrespondiente){
            let dragActivo = $(`#p-drag${dragSelect}`);

            dragActivo.draggable({
                revert: false,
            });

            dragActivo.draggable("disable");

            dragActivo.css({
                cursor: 'default'
            });
        }
    }
}

