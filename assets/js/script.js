const listaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes");
listaOpcoes.addEventListener("click", eventoClick);
function eventoClick(event){
    let objeto = event.target;
    const botao = objeto.id;
            const opcao = document.querySelector(`.secaoTransacao .container div[data-id="${botao}"]`);
            removeClasse();
            opcao.classList.add("mostrar");
}
function removeClasse(){
    const secao = document.querySelectorAll(".secaoTransacao .container div");
    for(let i = 0; i < secao.length; i++){
        secao[i].classList.remove("mostrar");
    }
}