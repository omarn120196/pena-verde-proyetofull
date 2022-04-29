const scorm = pipwerks.SCORM;

document.addEventListener('DOMContentLoaded', function(){
    conectarLMS();
});

function conectarLMS(){
    scorm.version = '1.2';
    scorm.init();
    console.log(scorm);

}