import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {}


function abrirCarrinho() {
    document.getElementById("carrinho").classList.add("right-[0px]");
    document.getElementById("carrinho").classList.remove("right-[-340px]");


}

function fecharCarrinho () {
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-340px]");


}

function irParaCheckout(){
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }
  window.location.href = window.location.origin + "/checkout.html";
}

export function iniciarCarrinho () {
    const botaoFecharCarrinho = document.getElementById ("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById ("abrir-carrinho");
    const botaoIrParaCheckout = document.getElementById ("finalizaCompra")

    botaoFecharCarrinho.addEventListener('click', fecharCarrinho);
    botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);
    botaoIrParaCheckout.addEventListener('click', irParaCheckout);
}

function removerDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQuantidade[idProduto];
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  renderizarProdutosCarrinho();

}

function incrementarQuantidadeProduto(idProduto){
    idsProdutoCarrinhoComQuantidade[idProduto]++;
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    atualizarInformacaoQuantidade(idProduto);

}

function decrementarQuantidadeProduto(idProduto){
    if(idsProdutoCarrinhoComQuantidade[idProduto] === 1){
      removerDoCarrinho(idProduto);
      return;
    }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInformacaoQuantidade(idProduto);

}

function atualizarInformacaoQuantidade(idProduto){
  document.getElementById(`quantidade-${idProduto}`).innerText =
  idsProdutoCarrinhoComQuantidade[idProduto];

}

function desenharProdutoNoCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto)
    const containerProdutosCarrinho =
    document.getElementById('produtos-carrinho');

  const elementoArticle = document.createElement("article"); //<article></article>
    const articleClasses = ['flex', 'bg-white', 'rounded-lg',  'p-1', 'relative',];

    for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass);

    }

    const cartaoProdutoCarrinho =
      `<button id="remover-produto-${produto.id}" class="absolute top-0 right-2">
      <i class="fa-solid fa-trash-can text-slate-800 hover:text-yellow-400"
      ></i>
      </button>
      <img
      src="./assets/imagens/${produto.nomeArquivoImagem}"
      alt= "Carrinho: ${produto.nome}"
      class="h-24 rounded-lg"
      />
      <div class="p-2 flex flex-col justify-between text-slate-800">
      <p class="text-sm"> ${produto.nome}</p>
      <p class="text-lg ">R$${produto.preco}</p>
      </div>
      <div class='flex text-slate-800 items-end absolute bottom-0 right-2 tex-lg'>
      <button id='decrementar-produto-${produto.id}'>-</button>
      <p id='quantidade-${produto.id}' class='ml-2'>${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
      <button class='ml-2' id='incrementar-produto-${produto.id}'>+</button>
      <div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);

  document
  .getElementById(`incrementar-produto-${produto.id}`)
  .addEventListener('click', () => incrementarQuantidadeProduto(produto.id));

  document
  .getElementById(`decrementar-produto-${produto.id}`)
  .addEventListener('click', () => decrementarQuantidadeProduto(produto.id));

  document
  .getElementById(`remover-produto-${produto.id}`)
  .addEventListener('click', () => removerDoCarrinho(produto.id));
}

export function renderizarProdutosCarrinho(){
  const containerProdutosCarrinho =
  document.getElementById('produtos-carrinho');
  containerProdutosCarrinho.innerHTML = '';

  for(const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoNoCarrinho(idProduto);
  }
}

export function adicionarAoCarrinho(idProduto) {
    if (idProduto in idsProdutoCarrinhoComQuantidade) {
        incrementarQuantidadeProduto(idProduto);
        return;
    }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
  desenharProdutoNoCarrinho(idProduto);
}

export function atualizarPrecoCarrinho() {
  const PrecoCarrinho =  document.getElementById('preco-total');
  let precoTotalCarrinho = 0;
  for(const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
    precoTotalCarrinho += catalogo.find(p => p.id === idProdutoNoCarrinho).preco *
    idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
  }
  PrecoCarrinho.innerText = `Total: R$${precoTotalCarrinho}`; 
}