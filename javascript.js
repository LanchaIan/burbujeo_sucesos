let boton1 = false;
let boton2 = false;
let boton3 = false;
let boton4 = false;

function comprobar_boton(botonx){
    let comprobacion;
    if (botonx == 'boton_1'){
        comprobacion = boton1;
    }
    if (botonx == 'boton_2'){
        comprobacion = boton2;
    }
    if (botonx == 'boton_3'){
        comprobacion = boton3;
    }
    if (botonx == 'boton_4'){
        comprobacion = boton4;
    }

    return comprobacion;
}

function entra(botonx){
    let comprobacion = comprobar_boton(botonx);
    if (comprobacion === false){
        let boton = document.getElementById(botonx);
        boton.style.backgroundColor = "orchid";
    }
}

function sale(botonx){
    let comprobacion = comprobar_boton(botonx);
    if (comprobacion === false){
        let boton = document.getElementById(botonx);
        boton.style.backgroundColor = "white";
    }
}

function click(botonx){
    alert("besb");
    if (botonx == 'boton_1'){
        boton1 = true;
    }
    if (botonx == 'boton_2'){
        boton2 = true;
    }
    if (botonx == 'boton_3'){
        boton3 = true;
    }
    if (botonx == 'boton_4'){
        boton4 = true;
    }
    let boton = document.getElementById(botonx);
    boton.style.backgroundColor = "skyblue";
}


function cambiar(){
    let sub_categoria_ = document.getElementById("sub_categoria").value;
        document.getElementById("textarea").value = "Texto de " + camino + " -> " + sub_categoria_;
}