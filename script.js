const textoprincipal = document.querySelector("#texto-principal");
const textosecundario = document.querySelector("#texto-secundario");

function btncriptofar () {
    const textocriptogrado = cripto(textoprincipal.value);
    textosecundario.value = textocriptogrado;
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

function btndescriptofar () {
    const textodescriptogrado = descripto(textoprincipal.value);
    textodescriptogrado.value = textodescriptogrado;
}

function descripto (stringdescriptografada) {
    let matrizcodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    stringdescriptografada = stringdescriptografada.toLowerCase();

    for(let i = 0; i< matrizcodigo.length;i++) {
        if(stringdescriptografada.includes(matrizcodigo[i][1])) {
            stringdescriptografada = stringdescriptografada.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0])
        }
    }
    return stringdescriptografada;
}

 function btntextocopiado () {
    const copiartexto = document.querySelector("textosecundario");
    const copiado = textosecundario.value;
    navigator.clipboard.writeText(copiado);
    textosecundario.value =""
 }