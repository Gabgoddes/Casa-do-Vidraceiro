import { desenharProdutoNoCarrinhoSimples, lerLocalStorage, apagarLocalStorage, salvarLocalStorage } from "./src/utilidades";

function desenharProdutosCheckout(){
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};
    for ( const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoNoCarrinhoSimples
        (
            idProduto,
            "container-produtos-checkout",
            idsProdutoCarrinhoComQuantidade[idProduto],
        )
    };
}

function finalizarCompraPedidos(evt){
    evt.preventDefault();
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};
    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        return;
    }
    const dataAtual = new Date();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutoCarrinhoComQuantidade    
    }

    const historicoDePedidos = lerLocalStorage('historico') ?? [];
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];

    salvarLocalStorage('historico', historicoDePedidosAtualizado);

    apagarLocalStorage('carrinho');

    window.location.href = window.location.origin + '/pedidos.html'
}

desenharProdutosCheckout();

document.addEventListener('submit', (evt) => finalizarCompraPedidos(evt));
