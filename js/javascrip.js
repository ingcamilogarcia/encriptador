const campo_texto=document.querySelector("#texto-encriptado");
const campo_mensaje=document.querySelector("#campo-mensaje");

const matriz = [
    ["e", "enter"], //indice 0
    ["i", "imes"], //indice 1
    ["a", "ai"], //indice 2
    ["o", "ober"], //indice 3
    ["u", "ufat"], //indice 4

];

function btnEncriptar() {
const texto =  encriptar(campo_texto.value);
campo_mensaje.value = texto;
}



function encriptar(fraseEncriptada)
 {
    for (let i = 0; i < matriz.length; i++){ 
      if(fraseEncriptada.includes(matriz[i][0]))
      { fraseEncriptada = fraseEncriptada.replaceAll(matriz[i][0], matriz[i][1]) 
     
       } 
    }
  return fraseEncriptada;
}

function btnDesencriptar() {
    const textodesEncriptado = desEncriptar(campo_texto.value);
    campo_mensaje.value = textodesEncriptado; 
    
    }

    
    function desEncriptar(frasedesEncriptada)
    {  for(let i=0; i<matriz.length; i++) {
      if (frasedesEncriptada.includes(matriz[i][1])) {
        frasedesEncriptada = frasedesEncriptada.replaceAll(matriz[i][1], matriz[i][0])
      }
             
    }
    return frasedesEncriptada; 
    }

