let listaDeNumerosSorteados = [];
let numeroLimite = 30;
let numeroSecreto = gerarNumeroAleatorio();
tentativas = 1;
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Acertou!');
        let mensagemTentativas = `Parabéns você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeLementosDALista = listaDeNumerosSorteados.length;

    if (quantidadeDeLementosDALista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reniciar').setAttribute('disabled', true);
}
