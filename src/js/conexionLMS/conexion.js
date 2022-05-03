//Conexión a Moodle
const scorm = pipwerks.SCORM;

window.onload = function(){
    conectarLMS();
    actualizarStatus();
    verificarLocation();
    calcularTiempo();
}

window.onunload = function(){
    registrarTiempo(tiempo);
    cerrarConexion();
}

function conectarLMS(){
    scorm.version = '1.2';
    scorm.init();

}

function statusCurso(estado){
    scorm.set("cmi.core.lesson_status", estado);
}

function cerrarConexion(){
    asignarLocation();
    scorm.set("cmi.core.exit", "suspend");
    scorm.quit();
}

function asignarCalificación(calificacion){
    scorm.set("cmi.core.score.raw", calificacion);
}

function registrarTiempo(tiempo){
    console.log(tiempo);
    scorm.set("cmi.core.session_time", tiempo);
}

function asignarLocation(){
    scorm.set('cmi.core.lesson_location', noPagina);
}

function verificarLocation(){

    const status = scorm.get('cmi.core.lesson_status');
    console.log(status);

    switch(status){
        case 'incomplete':
            const location = parseInt(scorm.get('cmi.core.lesson_location'));
            console.log(location);
            noPagina = location;
            break;
        case 'completed':
            noPagina = 26;
            break;
        case 'passed':
            noPagina = 26;
            break;
        default:
            noPagina = 0;
            break;
    }

    visualizarPagina();
    selectOpcion(noPagina);
}