//Variables de botones de navegación
const btnAtras = $('#atras');
const btnAdelante = $('#adelante');
const btnHome = $('#home');
let noPagina = 0;
let porcentaje;

//Clase botones
class BotonesNavegacion{
    
    sigPagina(){
        if(noPagina < paginas.length - 1){
            noPagina++;
            selectOpcion(noPagina);
            visualizarPagina();
        }
        else{
            console.log('No hay más páginas');
        }
    }
    
    atrasPaginas(){
        if(noPagina > 0){
            noPagina--;
            selectOpcion(noPagina);
            visualizarPagina();
        }
        else{
            console.log('Estas en inicio');
        }
    }

    home(){
        noPagina = 0;
        selectOpcion(noPagina);
        visualizarPagina();
    }
}

//Iniciar funciones------------------------------------------------
jQuery(function($){
    
    //Visualizar página actual
    visualizarPagina();

    //Instanciar Clase Botones Navegacion
    const btnNav = new BotonesNavegacion;

    //Botones de navegación
    btnAdelante.on('click', btnNav.sigPagina);
    btnAtras.on('click', btnNav.atrasPaginas);
    btnHome.on('click', btnNav.home);

    //Calcular altura
    calcularAltura();
})

//Funciones----------------------------------------------------------

function visualizarPagina(){

    const contenedor = $('#cont-paginas');
    const url = 'contenido/'+paginas[noPagina].ruta;
    const titulo = paginas[noPagina].nombre;

    //Cambiar el titulo de la página
    const headingTitulo = $('.header h1');
    headingTitulo.empty();
    headingTitulo.text(titulo);

    //Actualizar el porcentaje del progreso
    const totalPaginas = paginas.length;
    const porcentajePorPagina = 100 / totalPaginas;
    porcentaje = parseInt(porcentajePorPagina * paginas[noPagina].progreso) ;
    verificarMenu();

    //Cargar página
    contenedor.empty();
    abrirURL(url, contenedor);

    function abrirURL(url, contenedor) {  
        $.get(url, {}, function(data){
            contenedor.html(data);

            //Script de las páginas
            

            //Script página04
            seleccionarInfo04();
          
            //Script página05
            seleccionarInfo05();
          
            // Scrip página06
            visualizarPag06();
          
            // Scrip página07
            visualizarPag07();
          
            //Script página11
            voltearCards();
          
            // Script página12
            visualizarPag12();
            voltearCardsPag12();
          
            //Script página15
            // visualizarGlobos();

            //Script página16
            visualizarMapa();
          
            //Script página14
            visualizarInfo14();

            //Script página24
            flipCard();

            //Script página25
            arrastrar();

            //Script página26
            iniciarCasos()

            //Script página27
            evaluacionFinal();
        });
    }
}

//Cambiar el indicador del menu
function selectOpcion(noPagina){
    
    const select = document.querySelector('.select');
    select.classList.remove('select');

    enlaces[noPagina].classList.add('select');
}

//Parpadear el boton al final de la página
function calcularAltura(){

    $(window).on("scroll", function() {
        const scrollHeight = $(document).height();
        const scrollPosition = $(window).height() + $(window).scrollTop();


        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            
            btnAdelante.addClass('parpadea');

            setTimeout(()=>{
                btnAdelante.removeClass('parpadea');
            }, 3000);
             
        }
        else{
            btnAdelante.removeClass('parpadea');
        }
    });
}