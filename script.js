
let elementoInput = document.getElementById('msg');
elementoInput.style.display = "none";
let elementoBtnCopiar = document.getElementById('btn-copiar');
elementoBtnCopiar.style.display = "none";
let elementoImg = document.getElementById('found-blue');
let elementoTitulo = document.getElementById('h2');
let elementoParagrafo = document.getElementById('p');
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/
/*
let titulo = document.querySelector('h2');
titulo.innerHTML = 'Mensagem Criptografada:';
*/


function exibirTextoTela(tag, texto) {
    let titulo = document.querySelector(tag);
titulo.innerHTML = texto;
    
}

exibirTextoTela('h2[id="h2"]', 'Nenhuma mensagem encontrada!');
exibirTextoTela('p[id="p"]', 'Digite um texto que você deseja criptografar ou descriptografar.');



function codifica(texto){
    let caracteres = texto.split("");
    caracteres.forEach(function(item, i) {
        if(item == 'a'){
            caracteres[i] = 'ai';
        }else if (item == 'e'){
            caracteres[i] = 'enter';
        }else if (item == 'i'){
            caracteres[i] = 'imes';
        }else if (item == 'o'){
            caracteres[i] = 'ober';
        }else if (item == 'u'){
            caracteres[i] =  'ufat';
        }
    });
    return caracteres.join("");
}

function decodifica(texto) {
    let codigo = [['a','ai'],['e','enter'],['i','imes'],['o','ober'],['u','ufat']];
    texto = texto;
    for (let i =0; i<codigo.length; i++){
        if(texto.includes(codigo[i][1])){
            texto = texto.replaceAll(codigo[i][1], codigo[i][0])
        }
    }
    return texto;
}

function encriptarTexto(){
   
    let textoOriginal = document.getElementById('input-texto').
   value;
   let textoCriptgrafado = codifica(textoOriginal);
   console.log(textoCriptgrafado);
   document.getElementById('msg').value = textoCriptgrafado;
   limparCampo('input[name="input-texto"]');
   elementoInput.style.display = "block";
   elementoBtnCopiar.style.display = "block";
   elementoImg.style.display = "none";
   elementoTitulo.style.display = "none";
   elementoParagrafo.style.display = "none";
}

function copiaTexto(){
    /*
    let textoCriptgrafado = document.getElementById('msg').value;
    document.getElementById('input-texto').value = textoCriptgrafado
    limparCampo();
    */
   let textoCriptgrafado = document.getElementById('msg').value;
   document.getElementById('input-texto').value = textoCriptgrafado;
   console.log(textoCriptgrafado);
   limparCampo('input[name="msg"]');
}

function decriptarTexto() {
    let textoCriptografado = document.getElementById('input-texto').value;
    let textoDescriptografado = decodifica(textoCriptografado);
    document.getElementById('msg').value = textoDescriptografado;
    limparCampo('input[name="input-texto"]');
}

function limparCampo(tag){
    document.querySelector(tag).value ="";
    
}


