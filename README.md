## CIFRADO CÉSAR

###### Se presenta un programa que se utiliza para *encriptar y desencriptar mensajes*, utilizando el **CIFRADO CÉSAR**. Obedece a las minúsculas y mayúsculas.  


1.  **Estructura**  
  El código presenta dos funciones:  

  **cipher**

  * *Function cipher* (mayúsculas)
      > input = "HOLA"  
    output = "OVSH"

  * *Function cipher* (minúsculas)
      > input = "hola"  
      output = "ovsh"

  **descipher**.

  * *Function decipher* (mayúsculas)
        > input = "OVSH"  
        output = "HOLA"

  * *Function decipher* (minúsculas)
        > input = "ovsh"  
        output = "hola"  

***
### PSEUDOCÓDIGO  

    function cipher (texto_a_cifrar){  
      texto_cifrado = "",  

      para ( i = 0 ; i < texto_a_cifrar.longitud ; i++){  
        si (códigoASCII[i] < 97){  
          posicion_alfabeto = códigoASCII[i] - 65;  
          texto_cifrado = ((posicion_alfabeto + 33) modulo de 26 ) + 65;  
          nueva_posicion += texto_cifrado en códigoASCII
          }  

        si no (códigoASCII[i] >= 97){  
          posicion_alfabeto = códigoASCII[i] - 97;  
          texto_cifrado = ((posicion_alfabeto + 33) modulo de 26 ) + 97;  
          nueva_posicion += texto_cifrado en códigoASCII
            }
        }  
      }  
      return texto_cifrado  



      function decipher (texto_a_descifrar){  
        texto_descifrado = "",  

        para ( i = 0 ; i < texto_a_descifrar.longitud ; i++){  
          si (códigoASCII[i] < 97){  
            posicion_alfabeto = códigoASCII[i] + 65;  
            texto_descifrado = ((posicion_alfabeto - 33) modulo de 26 ) + 65;  
            nueva_posicion += texto_descifrado en códigoASCII
            }  

          si no (códigoASCII[i] >= 97){  
            posicion_alfabeto = códigoASCII[i] - 45;  
            texto_descifrado = ((posicion_alfabeto - 33) modulo de 26 ) + 97;  
            nueva_posicion += texto_descifrado en códigoASCII
              }
          }  
        }  
        return texto_descifrado  

***
### DIAGRAMA DE FLUJO :

![Atributo Alt](https://drive.google.com/file/d/0B3bpOQCV2XsLYXRZUl91Q0ZXcFU/view "diagrama_cifrado") 
