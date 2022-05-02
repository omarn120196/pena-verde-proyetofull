//Conexión a Moodle
const scorm = pipwerks.SCORM;

window.onload = function(){
    conectarLMS();
    statusCurso();
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

function statusCurso(){
    scorm.set("cmi.core.lesson_status", "completed");
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