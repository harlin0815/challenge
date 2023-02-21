const Text = document.querySelector('#texto_1');
const inputMsg = document.querySelector('#resultado');
const btnEncrypt = document.querySelector('#encriptar');
const btnDecrypt = document.querySelector('#desencriptar');
const btnCopy = document.querySelector('#copia');


function uno(){
    var texto = document.getElementById("texto_1").value;
    texto = texto
    .replace("/e/igm","enter")
    .replace("o/igm","ober")
    .replace("i/igm","ines")
    .replace("a/igm","ai")
    .replace("u/igm","ufar");
    document.getElementById("encriptar").value = texto;

     
}
function desncriptar(){
    var texto = document.getElementById("texto_1").value;
    texto = texto
    .replaceAll("enter","e")
    .replaceAll("ines","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufar","u");
    document.getElementById("desencriptar").value = texto;
}

function copiar(){
    var mensajeencriptado=btnrespuesta;
    navigator.clipboard.writeText(mensajeencriptado);
}
//btnincriptar.onclick=encritar;
//btndesencriptar.onclick=desncriptar;
//btncopiar.onclick=copiar;
