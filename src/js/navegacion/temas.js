function temas(){
    
    const contOpciones = document.querySelector('.options__menu');

    paginas.forEach(pagina=>{
        const {nombre, progreso, icono} = pagina;

        const enlaces = document.createElement('a');
        enlaces.setAttribute('href', '#');
        enlaces.classList.add('enlacesPaginas');
        enlaces.dataset.pagina = progreso - 1;

        if(progreso == 1){
            enlaces.classList.add('select');
        }

        enlaces.innerHTML = `
            <div class="option">
                <i class="${icono}" title="${nombre}"></i>
                <h4>${nombre}</h4>
            </div>
        `;

        contOpciones.appendChild(enlaces)
    });
}