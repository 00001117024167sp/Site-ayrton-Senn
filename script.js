
document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    if (
        botaoDeAcessibilidade &&
        opcoesDeAcessibilidade &&
        aumentaFonteBotao &&
        diminuiFonteBotao &&
        alternaContraste
    ) {
        botaoDeAcessibilidade.addEventListener('click', function () {
            botaoDeAcessibilidade.classList.toggle('rotacao-botao');
            opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

            const estaExpandido = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
            botaoDeAcessibilidade.setAttribute('aria-expanded', !estaExpandido);
        });

        let tamanhoAtualFonte = 1;

        aumentaFonteBotao.addEventListener('click', function () {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        });

        diminuiFonteBotao.addEventListener('click', function () {
            if (tamanhoAtualFonte > 0.6) {
                tamanhoAtualFonte -= 0.1;
                document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
            }
        });

        alternaContraste.addEventListener('click', function () {
            document.body.classList.toggle('alto-contraste');
        });
    } else {
        console.warn('Algum botão de acessibilidade não foi encontrado no DOM.');
    }
});

// ScrollReveal
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('#inicio', { delay: 500 });
    ScrollReveal().reveal('#tropicalia', { delay: 500 });
    ScrollReveal().reveal('#galeria', { delay: 500 });
    ScrollReveal().reveal('#contato', { delay: 500 });
} else {
    console.warn('ScrollReveal não está carregado.');

}

