const btnCipher = document.getElementById('cipher');
const btnDescipher = document.getElementById('decipher');
const input = document.getElementById('inputText');
const box = document.getElementById('content');
const desplazamiento = document.getElementById('desplazamiento');

// no introduce numeros en el input
input.addEventListener('keypress', val = event => {
  tecla = (document.all) ? event.keyCode : event.which;
  if (tecla === 8) return true;
  patron = /[A-Za-z]/;
  te = String.fromCharCode(tecla);
  return patron.test(te);
});

// función cifrado
btnCipher.addEventListener('click', () => {
  let valor = parseInt(desplazamiento.value);
  let cipherWord = '';
  let inpuTxt = input.value;

  if (inpuTxt) {
    for (var i = 0 ; i < inpuTxt.length ; i++) { // mayúsculas
      if (inpuTxt.charCodeAt(i) >= 65 && inpuTxt.charCodeAt(i) <= 90) {
        cipherWord += (String.fromCharCode(((inpuTxt.charCodeAt(i) - 65 + valor) % 26) + 65));
      } else if (inpuTxt.charCodeAt(i) >= 97 && inpuTxt.charCodeAt(i) <= 122) { // minusculas
        cipherWord += String.fromCharCode(((inpuTxt.charCodeAt(i) - 97 + valor) % 26) + 97);
      } else if (inpuTxt.charCodeAt(i) === 32) {
        cipherWord += ' ';
      }
    }
    box.innerHTML = `<p class="result"> Tu texto cifrado es : ${cipherWord} </p>`;
  }
});

// función descifrado
btnDescipher.addEventListener('click', () => {
  let valor = parseInt(desplazamiento.value);
  let decipherWord = '';
  let inpuTxt = input.value;

  if (inpuTxt) {
    for (var i = 0 ; i < inpuTxt.length ; i++) { // mayúsculas
      if (inpuTxt.charCodeAt(i) >= 65 && inpuTxt.charCodeAt(i) <= 90) {
        decipherWord += (String.fromCharCode(((inpuTxt.charCodeAt(i) + 65 - valor) % 26) + 65));
      } else if (inpuTxt.charCodeAt(i) >= 97 && inpuTxt.charCodeAt(i) <= 122) { // minusculas
        decipherWord += String.fromCharCode(((inpuTxt.charCodeAt(i) - 45 - valor) % 26) + 97);
      } else if (inpuTxt.charCodeAt(i) === 32) {
        decipherWord += ' ';
      }
    }
    box.innerHTML = `<p class="result"> Tu texto descifrado es : ${decipherWord} </p>`;
  }
});
