const listaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes");
listaOpcoes.addEventListener("click", eventoClick);
function eventoClick(event){
    let objeto = event.target;
    const botao = objeto.id;
            const opcao = document.querySelector(`.secaoTransacao .container div[data-id="${botao}"]`);
            const opcaoBox1 = document.querySelector(".secaoTransacao__boxOpcao_1");
            const opcaoBox2 = document.querySelector(".secaoTransacao__boxOpcao_2");
            const opcaoBox3 = document.querySelector(".secaoTransacao__boxOpcao_3");
            removeClasse();
            opcao.classList.add("mostrar");
            opcaoBox1.classList.add("mostrar");
            opcaoBox2.classList.add("mostrar");
            opcaoBox3.classList.add("mostrar");
}
function removeClasse(){
    const secao = document.querySelectorAll(".secaoTransacao .container div");
    for(let i = 0; i < secao.length; i++){
        secao[i].classList.remove("mostrar");
    }
}