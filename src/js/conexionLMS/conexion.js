//Conexión a Moodle
const scorm = pipwerks.SCORM;

window.onload = function(){
    conectarLMS();
    calcularTiempo();
}

window.onunload = function(){
    scorm.set("cmi.core.exit", "suspend");
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
    scorm.quit();
}

function asignarCalificación(calificacion){
    scorm.set("cmi.core.score.raw", calificacion);
}

function registrarTiempo(tiempo){
    console.log(tiempo);
    scorm.set("cmi.core.session_time", tiempo);
}