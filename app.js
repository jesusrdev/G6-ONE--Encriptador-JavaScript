
// Textareas
let inputElement = document.getElementById('input');
let outputElement = document.getElementById('output');


// inputElement.innerText = 'Hola';


// Buttons
let btnEncriptar = document.getElementById('encriptar');
let btnDesencriptar = document.getElementById('desencriptar');
let btnCopy = document.getElementById('copy');


// Encriptadores
let a = 'ai';
let e = 'enter';
let i = 'imes';
let o = 'ober';
let u = 'ufat';


// Eventos
btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);


// Funciones
function encriptar() {
  let input = inputElement.value;

  if (verificarCaracteres(input)) {
    let divMessages = document.getElementById('messages');
    divMessages.classList += ' active';

    let textoEncriptado = '';

    for (let i = 0; i < input.length; i++) {
      const letra = input[i];
      
      textoEncriptado += encriptarVocales(letra);
      
    }


    outputElement.innerText = textoEncriptado;

  } else {
    alert('Revise que el texto solo tenga letras minúsculas y no tenga acentos ni caracteres especiales');
  }

}


function encriptarVocales(letra) {
  switch (letra) {
    case 'a':
      return a;
  
    case 'e':
      return e;
  
    case 'i':
      return i;
  
    case 'o':
      return o;
  
    case 'u':
      return u;
  
    default:
      return letra;
  }
}


function desencriptar() {
  let input = inputElement.value;

  if (verificarMinusculas(input)) {
    
    let divMessages = document.getElementById('messages');
      divMessages.classList += ' active';
  
  
    let textoDesencriptado = '';
  
    textoDesencriptado = input.replaceAll(a, 'a');
    textoDesencriptado = textoDesencriptado.replaceAll(e, 'e');
    textoDesencriptado = textoDesencriptado.replaceAll(i, 'i');
    textoDesencriptado = textoDesencriptado.replaceAll(o, 'o');
    textoDesencriptado = textoDesencriptado.replaceAll(u, 'u');
  
    outputElement.innerText = textoDesencriptado;

  } else {

    alert('Revise que el texto solo tenga letras minúsculas y no tenga acentos ni caracteres especiales');
    
  }

}



// Funciones de verificacion

function verificarMinusculas(input) {
  return input === input.toLowerCase();
}

function verificarCaracteres(input) {

  let regex = /^[a-z ]*$/

  console.log(input.match(regex));

  return input.match(regex) != null;
}


// Botón copiar

function copy() {
  let copyText = outputElement.value;

  // navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
  //   if (result.state === "granted" || result.state === "prompt") {

      navigator.clipboard.writeText(copyText).then(
        () => {
          alert('Se copio correctamente el texto');
        },
        () => {
          alert('No se pudo copiar el texto');
        },
      );
  //   }

  // });


}

document.querySelector("#copy").addEventListener("click", copy);

