const cartaoProdutos = document.getElementById("container-produto");

function esconderFerragens() {
    exibirTodos();
    const produtosFerragem = Array.from(
        cartaoProdutos.getElementsByClassName('ferragem'));
        
        for(const produto of produtosFerragem){
            produto.classList.add('hidden');
        }
    }

    function esconderAcessorios() {
        exibirTodos();
        const produtosFerragem = Array.from(
            cartaoProdutos.getElementsByClassName('acessorio'));
            
            for(const produto of produtosFerragem){
                produto.classList.add('hidden');
            }
        }
    
function exibirTodos() {
   const produtosEscondidos = Array.from
   (cartaoProdutos.getElementsByClassName('hidden'));

   for (const produto of produtosEscondidos){
    produto.classList.remove('hidden');
   }


}

export function inicializarFiltros(){
    document
    .getElementById('exibir-acessorio')
    .addEventListener('click', esconderFerragens);

    document
    .getElementById('exibir-ferragem')
    .addEventListener('click', esconderAcessorios);

    document
    .getElementById('exibir-todos')
    .addEventListener('click', exibirTodos);
}
