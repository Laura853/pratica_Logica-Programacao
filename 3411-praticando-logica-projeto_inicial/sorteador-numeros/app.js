function sortear() {
    let quantidadeDeNumeros =  document.getElementById("quantidade").value;
    let doNumero =  document.getElementById("de").value;
    let ateONumero =  document.getElementById("ate").value;

    if (doNumero >=  ateONumero){
        alert('"Campo Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if (quantidadeDeNumeros > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }

    let sorteados = [];
    let numero;

    // alert(`Quantidade de números : ${quantidadeDeNumeros}`);
    // alert(`Do número : ${doNumero}`);
    // alert(`Até o número : ${ateONumero}`);

    // let número = obterNumeroAleatorio(de, ate);
    // alert(numero);

    for (let i =0; i < quantidadeDeNumeros; i++){
        numero = obterNumeroAleatorio(doNumero, ateONumero);
        while(sorteados.includes(numero)) {;
        numero = obterNumeroAleatorio(doNumero, ateONumero);
        }
        sorteados.push(numero);
    } 

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ` <label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`;
    alterarStatus();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarStatus() {
   let botao =  document.getElementById('btn-reiniciar');

   if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
   } else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
   }
}   

function reiniciar() {
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML =  '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatus();
}
