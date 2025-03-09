const imagens = [
    { 
        url: "./images/capa1.jpg", 
        titulo: "ACELERAMOS A QUALIDADE DA EDUCAÇÃO PÚBLICA", 
        botao: "COMEMORE COM A GENTE",
        posicao: "center center"
    },
    { 
        url: "./images/capa2.jpg", 
        titulo: "O FUTURO COMEÇA AGORA: VOLTA ÀS AULAS 2025!", 
        botao: "SAIBA MAIS",
        posicao: "center center"
    },
    { 
        url: "./images/capa.jpg", 
        titulo: "SEJA UM PARTICIPANTE DO NOSSO PROJETO", 
        botao: "APOIE ESSA CAUSA",
        posicao: "center center"
    },
];

let indiceAtual = 0;

// Função para trocar a imagem, o texto e os ajustes individuais
function trocarImagem() {
    // Aplica o efeito correto de fundo e os ajustes individuais
    document.querySelector('.hero').style.background = 
        `linear-gradient(to right, rgba(0, 31, 76, 0.8), rgba(0, 86, 166, 0.6) 30%, rgba(0, 86, 166, 0) 100%), 
        url('${imagens[indiceAtual].url}') no-repeat center center`;
    document.querySelector('.hero').style.backgroundSize = "cover";
    document.querySelector('.hero').style.backgroundPosition = imagens[indiceAtual].posicao;

    // Atualiza os textos
    document.querySelector('.hero h1').innerHTML = imagens[indiceAtual].titulo;
    document.querySelector('.btn-action').innerHTML = imagens[indiceAtual].botao;

    // Avança o índice para a próxima troca
    indiceAtual = (indiceAtual + 1) % imagens.length;
}

// Aplica a primeira imagem imediatamente
trocarImagem();

// Troca automática a cada 5 segundos
setInterval(trocarImagem, 5000);

// Botão para trocar a imagem manualmente
document.querySelector('.btn-change-image').addEventListener('click', trocarImagem);
