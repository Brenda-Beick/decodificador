const textoprincipal = document.querySelector("#texto-principal");
const textosecundario = document.querySelector("#texto-secundario");

function btncriptografar() {
    const textocriptografado = cripto(textoprincipal.value);
    textosecundario.value = textocriptografado;
}

function cripto (stringcriptografada) {
    let matrizcodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    stringcriptografada = stringcriptografada.toLowerCase();

    for(let i = 0; i< matrizcodigo.length;i++) {
        if(stringcriptografada.includes(matrizcodigo[i][0])) {
           stringcriptografada = stringcriptografada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }
    }
    return stringcriptografada;
}

function btndescriptografar () {
    const textodescriptografado = descripto(textoprincipal.value);
    textosecundario.value = textodescriptografado;
}

function descripto (stringdescriptografada) {
    let matrizcodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    stringdescriptografada = stringdescriptografada.toLowerCase();

    for(let i = 0; i < matrizcodigo.length;i++) {
        if(stringdescriptografada.includes(matrizcodigo[i][1])) {
            stringdescriptografada = stringdescriptografada.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0])
        }

    return stringdescriptografada;
}

 function btntextocopiado () {
    const copiartexto = document.querySelector("textosecundario");
    const copiado = textosecundario.value;
    navigator.clipboard.writeText(copiado);
    textosecundario.value =""
 }