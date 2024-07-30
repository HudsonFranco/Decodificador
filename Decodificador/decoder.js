textInput = document.querySelector("#input-text");

outputText = document.querySelector("#output-text");

function criptografar () {

        var texto = textInput.value;

        var resultCripto = texto.replace(/a/g, "faf").replace(/e/g, "lol").replace(/i/g, "que").replace(/o/g, "ou").replace(/u/g, "at")

        outputText.innerHTML = '<textarea readonly id="input-text" class= "resultado">' + resultCripto +'</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';

    }

function descriptografar () {

        var texto = textInput.value;

        var resultDescripto = texto.replace(/faf/g, "a").replace(/lol/g, "e").replace(/que/g, "i").replace(/ou/g, "o").replace(/at/g, "u");

        outputText.innerHTML = '<textarea readonly id="input-text" class= "resultado">' + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';

    }

function copiar () {

        var textoCop = document.getElementById('input-text');

        textoCop.select();

        document.execCommand('copy');

        alert("Texto copiado.");

      }