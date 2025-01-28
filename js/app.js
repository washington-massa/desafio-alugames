let alugados = 1;

function alterarStatus(jogo) {
    let alterar = document.getElementById(`game-${jogo}`);
    let botao = alterar.querySelector('.dashboard__item__button');
    let imagem = alterar.querySelector('.dashboard__item__img');

    if (botao.classList.contains('dashboard__item__button--return')){
        if (confirm('Deseja devolver o jogo?')) {
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        alugados--;
        console.log(alugados);
        }
    } else {
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        alugados++;
        console.log(alugados);
    }
}

// desafio palindromo

function verificarPalindromo(texto) {
    let letras = texto.split('');
    console.log(letras)

    let reverso = letras.reverse();
    console.log(reverso);
    let invertida = reverso.join('');
    console.log(invertida);

    console.log(texto == invertida);

}

verificarPalindromo('kauan');

// desafio ordenação de string numerica

function ordenarNumeros(num1,num2,num3) {
    let numeros = [];
    numeros.push(parseInt(num1));
    numeros.push(parseInt(num2));
    numeros.push(parseInt(num3));
    numeros.sort(compararNumeros);
    console.log(numeros);
}

function compararNumeros(a,b) {
   return a - b;
}

ordenarNumeros(10,50,30);