let listaNumerosSorteados = [];
let numeroLImite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){

    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p','Escreva um número de 1 à 10: ');

}

mensagemInicial();

function verificarChute() {
    
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){

        exibirTextoNaTela('h1', 'Acertou!');

        let palavrasTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavrasTentativa}!`;

        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    }else if(chute > numeroSecreto){

        exibirTextoNaTela('p','O número secreto é menor!');
        tentativas++;

    }else{

        exibirTextoNaTela('p','O número secreto é maior!');
        tentativas++;

    }

    limparCampo();
}

function gerarNumeroAleatorio(){

    let numeroEscolido = parseInt(Math.random() * numeroLImite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLImite){

        listaNumerosSorteados = [];

    }

    if(listaNumerosSorteados.includes(numeroEscolido)){

        return gerarNumeroAleatorio();

    }else{
        listaNumerosSorteados.push(numeroEscolido);
        return numeroEscolido;

    }

}

function limparCampo(){

    chute = document.querySelector('input');
    chute.value = '';

}

function reiciarJogo(){

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled');

}