//Div encriptado permanece oculto hasta que se le de click sobre los botones (encriptar, desencriptar)
document.getElementById("encriptando").style.display = "none";

//Funcion del botón encriptar
/*
Oculta el div divEncriptado y pone visible el de encriptado
Asigna a una variable el contenido del textarea
Llama a la funcion encriptando para encriptar el texto y lo refleja en pantalla
*/
function encriptarBtn(){

    document.getElementById("divEncriptado").style.display = "none";
    document.getElementById("encriptando").style.display = "block";

    const txtNuevo = document.getElementById("txt_encriptar").value;
    const txtEncriptado = encriptando(txtNuevo);

    const pEncriptado = document.getElementById("pEncriptado");
    pEncriptado.textContent = txtEncriptado;
 
}

//Funcion del botón desencriptar
/*
Oculta el div divEncriptado y pone visible el de encriptando
Asigna a una variable el contenido del textarea
Llama a la funcion desencriptando para desencriptar el texto y lo refleja en pantalla
*/
function desEncriptarBtn(){

    document.getElementById("divEncriptado").style.display = "none";
    document.getElementById("encriptando").style.display = "block";

    const txtNuevo = document.getElementById("txt_encriptar").value;
    const txtEncriptado = desEncriptando(txtNuevo);

    const pEncriptado = document.getElementById("pEncriptado");
    pEncriptado.textContent = txtEncriptado;
 
}

//Funcion del botón copiar
/*
Toma el texto que se encuentra en el div y lo copia
*/
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

 //Funcion encriptando
/*
Busca en el string las vocales y las sustituye en un nuevo string
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

//Funcion desencriptando
/*
Revisa cuando se topa una vocal en el string y verifica si las que siguen son las del encriptado
y las sustituye por la vocal sola.
*/
function desEncriptando(txtEncriptar){
    let txtDesEncriptado = "";
    for (let i = 0; i < txtEncriptar.length; i++) {
        if(txtEncriptar[i] == "a" && txtEncriptar[i + 1] == "i"){
            txtDesEncriptado += txtEncriptar[i];
            i++;
        } else if(txtEncriptar[i] == "e" && txtEncriptar[i + 1] == "n" && txtEncriptar[i + 2] == "t" && txtEncriptar[i + 3] == "e" && txtEncriptar[i + 4] == "r"){
            txtDesEncriptado += txtEncriptar[i];
            i += 4;
        } else if(txtEncriptar[i] == "i" && txtEncriptar[i + 1] == "m" && txtEncriptar[i + 2] == "e" && txtEncriptar[i + 3] == "s"){
            txtDesEncriptado += txtEncriptar[i];
            i += 3;
        } else if(txtEncriptar[i] == "o" && txtEncriptar[i + 1] == "b" && txtEncriptar[i + 2] == "e" && txtEncriptar[i + 3] == "r"){
            txtDesEncriptado += txtEncriptar[i];
            i += 3;
        } else if(txtEncriptar[i] == "u" && txtEncriptar[i + 1] == "f" && txtEncriptar[i + 2] == "a" && txtEncriptar[i + 3] == "bt"){
            txtDesEncriptado += txtEncriptar[i];
            i += 3;
        } else {
            txtDesEncriptado += txtEncriptar[i];
        }
    }

    return txtDesEncriptado;
}