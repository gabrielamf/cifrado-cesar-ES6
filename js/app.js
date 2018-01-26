const btnCipher = document.getElementById('cipher');
const btnDescipher = document.getElementById('decipher');
const input = document.getElementById('inputText');
const box = document.getElementById('content');
const desplazamiento = document.getElementById('desplazamiento');

input.addEventListener('keypress', (tecla) => {
  if (tecla.charCode < 48 || tecla.charCode > 57)
    return false;
});

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
    box.innerHTML = `<p> Tu texto cifrado es : ${cipherWord} </p>`;
  }
});

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
    box.innerHTML = `<p> Tu texto descifrado es : ${decipherWord} </p>`;
  }
});
