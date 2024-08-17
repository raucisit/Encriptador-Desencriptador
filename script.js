const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function encriptarTexto(texto){
     if(typeof texto !='string'){ // Verifica que lo que viene es una cadena de texto
      
        return '';

    }
     
    return texto.toLowerCase()// retorna texto en minúsculas
    
    .replace(/e/g,'enter')//reemplazo de carácteres
    .replace(/i/g,'imes')
    .replace(/a/g,'ai')
    .replace(/o/g,'ober')
    .replace(/u/g,'ufat');
}

function botonEncriptar()
{
    const textoencriptado= encriptarTexto(textarea.value)
    mensaje.value= textoencriptado; // deposita el texto encriptado en caja mensaje
    textarea.value="";//limpia caja de texto 
    mensaje.style.backgroundImage="none"; //elimina la imagen de fondo de la caja de texto mensaje

}


function DesencriptarTexto(dtexto)
{
    if(typeof dtexto !='string'){ // Verifica que lo que viene es una cadena de texto
     
       return '';

    }  
    
   return dtexto.toLowerCase()// retorna texto en minúsculas
   
   .replace(/enter/g,'e')//reemplazo de carácteres
   .replace(/imes/g,'i')
   .replace(/ai/g,'a')
   .replace(/ober/g,'o')
   .replace(/ufat/g,'u');
}

function botonDesencriptar()
{
    const textoDesencriptado= DesencriptarTexto(mensaje.value);
    textarea.value= textoDesencriptado;// deposita el texto encriptado en caja mensaje
    mensaje.value="";//limpia caja de texto 
    
}

function capturarTexto()
{

let textoCapturado=document.getElementById("captext").value // captura el contenico de texarea mediante "id"
navigator.clipboard.writeText(textoCapturado) //api clipboard copia el texto al portapapeles   


//console.log("texto capturado:", textoCapturado);
}





 