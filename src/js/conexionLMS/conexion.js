const scorm = pipwerks.SCORM;

window.onload = function(){
    conectarLMS();
    statusCurso();
}

window.onunload = function(){
    cerrarConexion();
}

function conectarLMS(){
    scorm.version = '1.2';
    scorm.init();
    console.log(scorm);

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