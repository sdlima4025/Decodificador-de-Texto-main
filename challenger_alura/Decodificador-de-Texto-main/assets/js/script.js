var textInput = document.querySelector('#input-text') 
var outInput = document.querySelector('#output-text')

function codificar () {
    var texto = textInput.value

    var resultDescripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    document.getElementById('result-area').innerHTML =  '<textarea readonly id="result">' + resultDescripto + '</textarea>' + '<button id="copy" onclick="copiar()">Copiar</button>' + '<button id="transferir" onclick="transferir()">Transferir</button>'

    
    document.getElementById('input-text').value = " ";
}
function decodificar () {
    var texto = textInput.value

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('result-area').innerHTML =  '<textarea readonly id="result">' + resultDescripto + '</textarea>' + '<button id="copy" onclick="copiar()">Copiar</button>' + '<button id="transferir" onclick="transferir()">Transferir</button>'
    
    document.getElementById('input-text').value = " ";
}
function copiar() {
    var textoCop = document.getElementById('result');
  
    textoCop.select();
    document.execCommand('copy');
    document.getElementById('result').value = " ";
    alert('Texto copiado para a área de transferência')
}


function transferir() {
    var textoCop = document.getElementById('result');
  
    textoCop.select();
    document.execCommand('copy');
    document.getElementById('input-text').value = document.getElementById('result').value;
    document.getElementById('result').value = " ";
    alert('Texto enviado para a área de output')
}