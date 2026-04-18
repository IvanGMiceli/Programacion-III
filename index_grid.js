console.log({ document });

/**
 * @type {HTMLButtonElement}
 */
const cambiarModoClaro = document.getElementById("modoClaro");

/**
 * @type {HTMLButtonElement}
 */
const cambiarModoOscuro = document.getElementById("modoOscuro");


cambiarModoClaro.onclick = () => {
    
    const rutaCssClaro = document.getElementsByTagName("link");

    rutaCssClaro[0].href ="./CSS/index_grid_claro.css"
    rutaCssClaro[0].rel="stylesheet";
}

cambiarModoOscuro.onclick = () => {
    
    const rutaCssOscuro = document.getElementsByTagName("link");

    rutaCssOscuro[0].href ="./CSS/index_grid.css"
    rutaCssOscuro[0].rel="stylesheet";
}




