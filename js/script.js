document.getElementById("encriptando").style.display = "none";

//
function encriptarBtn(){

    document.getElementById("divEncriptado").style.display = "none";
    document.getElementById("encriptando").style.display = "block";

    const txtNuevo = document.getElementById("txt_encriptar").value;
    const txtEncriptado = encriptando(txtNuevo);

    const pEncriptado = document.getElementById("pEncriptado");
    pEncriptado.textContent = txtEncriptado;
 
}

function desEncriptarBtn(){

    document.getElementById("divEncriptado").style.display = "none";
    document.getElementById("encriptando").style.display = "block";

    const txtNuevo = document.getElementById("txt_encriptar").value;
    const txtEncriptado = desEncriptando(txtNuevo);

    const pEncriptado = document.getElementById("pEncriptado");
    pEncriptado.textContent = txtEncriptado;
 
}

function copiarTxt(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

  /*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
  */
function encriptando(txtEncriptar){
    let txtEncriptado = "";
    for (let i = 0; i < txtEncriptar.length; i++) {
        if(txtEncriptar[i] == "a"){
            txtEncriptado += "ai";
        } else if(txtEncriptar[i] == "e"){
            txtEncriptado += "enter";
        } else if(txtEncriptar[i] == "i"){
            txtEncriptado += "imes";
        } else if(txtEncriptar[i] == "o"){
            txtEncriptado += "ober";
        } else if(txtEncriptar[i] == "u"){
            txtEncriptado += "ufat";
        } else {
            txtEncriptado += txtEncriptar[i];
        }
    }

    return txtEncriptado;
}

function desEncriptando(txtEncriptar){
    let txtDesEncriptado = "";
    for (let i = 0; i < txtEncriptar.length; i++) {
        if(txtEncriptar[i] == "a"){
            txtDesEncriptado += txtEncriptar[i];
            i++;
        } else if(txtEncriptar[i] == "e"){
            txtDesEncriptado += txtEncriptar[i];
            i += 4;
        } else if(txtEncriptar[i] == "i" || txtEncriptar[i] == "o" || txtEncriptar[i] == "u"){
            txtDesEncriptado += txtEncriptar[i];
            i += 3;
        } else {
            txtDesEncriptado += txtEncriptar[i];
        }
    }

    return txtDesEncriptado;
}