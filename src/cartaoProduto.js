import { adicionarAoCarrinho } from "./menuCarrinho";
import {catalogo} from "./utilidades";

//Cards de produtos
export function renderizarCatalogo() {
for(const produtoCatalogo of catalogo) {
    const cartaoProduto = 
    `<div class= 'border-solid z-2 w-48 m-2 flex flex-col pb-2 justify-between shadow-xl shadow-slate-700 group rounded-lg ${produtoCatalogo.ferragem ? 'ferragem' : 'acessorio'}'
    id="card-produto-${produtoCatalogo.id}">
    <img
     src="./assets/imagens/${produtoCatalogo.nomeArquivoImagem}"
     alt="Ferragem Superior 1101."
     class='group-hover:scale-110 duration-500 my-3 rounded-lg'      
    />
    <p class='text-sm mx-4'>${produtoCatalogo.marca}</p>
    <P class='text-sm mx-4'>${produtoCatalogo.nome}</P>
    <p class='text-sm mx-4'>R$${produtoCatalogo.preco}</p>
    <button id='adicionar-${produtoCatalogo.id}' class='bg-yellow-400 m-4 text-slate-800 hover:bg-yellow-600 rounded-lg'><i class="fa-solid fa-cart-plus"></i></button>
    </div>`;
    
    document.getElementById("container-produto").innerHTML += cartaoProduto  
  }

  for(const produtoCatalogo of catalogo) {
    document.getElementById(`adicionar-${produtoCatalogo.id}`)
    .addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id))
  }
}