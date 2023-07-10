/*
passo 1- pegar os personagens no js para poder verificar quando o usuario passar o mouse em cima de um deles 
*/

const personagens = document.querySelectorAll('.personagem');
console.log(personagens)

//passo 2 - adicionar a classe selecionado no personagem que o usuario passar o cursor do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerWidth <450){
            window.scrollTo({top:0,behavior:'smooth'});
        }

//passo 3 -  verificar se ja existe um personagem selecionado, se sim,devemos remover a seleção dele
        removerSelecaodoPersonagem();

      personagem.classList.add('selecionado');


        alterarImagemPersonagemSelecionado(personagem);

    newFunction(personagem);
    
           alterarDescricaoPersonagem(personagem);


})
})


function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function newFunction(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    console.log(imagemPersonagemGrande);

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaodoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

