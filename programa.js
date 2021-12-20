function exibeTexto(texto) {
    document.write(texto);
    pulaLinha;
    }
function pulaLinha() {
    document.write("<br>");
}
function exibaFib(n) {
    var primeiroNum = 0,
        segundoNum = 1,        
        numerofibo = [];
    if (n <= 0) {
        return numerofibo;
        pulaLinha();
    }
    if (n === 1) {
        return numerofibo.Push(primeiroNum);
        pulaLinha();
    }
    numerofibo[0] = primeiroNum;
    numerofibo[1] = segundoNum;    
        for (var i = 2; i <= n; i++) {
            numerofibo[i] = numerofibo[(i - 1)] + numerofibo[(i - 2)];
    }
    return numerofibo;
}

var resultado = (exibaFib(100));
    if (resultado) {
        for (var x = 0; x < resultado.length; x++) {
        console.log(resultado[x]);
    }
}
exibeTexto("100 sequencias: " + resultado);


/*exibeTexto("100 sequencias: " + resultado);--> NÃO FUNCIONA! HIPÓTESE PRIMÁRIA: CRIAR UMA FUNCTION PARA O PROMPT COM RETURN DO QUE FOI DITADO
var resultado = parseInt(prompt("digite um valor"));
    return resultado(exibaFib); {
        for(var x = 0; x < resultado.lenght; x++);
        exibeTexto(resultado);
    }*/