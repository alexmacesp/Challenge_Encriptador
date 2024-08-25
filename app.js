function encriptar(){
    let entrada = document.getElementById('myInput').value;
    if (test_entrada = sololetras(entrada) === true){
        entrada = entrada.toLowerCase();
        entrada = reemplazarVocales(entrada);
        document.getElementById('displayText').textContent = entrada;
    }
    else{
        document.getElementById('displayText').textContent = "Ingresa caracteres validos"
    }
}

function desencriptar(){
    let entrada = document.getElementById('myInput').value;
    entrada = revertirReemplazos(entrada);
    document.getElementById('displayText').textContent = entrada;
}


function reemplazarVocales(str) {
    return str.replace(/[aeiou]/g, function(match) {
        switch (match) {
            case 'a': return 'ai';
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'o': return 'ober';
            case 'u': return 'ufat';
        }
    });
}

function revertirReemplazos(str) {
    return str
        .replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e')
        .replace(/ai/g, 'a');
}

function cambio(){
    let entrada = document.getElementById('myInput').value;
    if(entrada === ''){
        document.getElementById('campo__resultado').style.display = "block";
    }
    else{
        document.getElementById('campo__resultado').style.display = "none";
    }
}

function sololetras(str){
    return /^[a-zA-Z\s]+$/.test(str);
}