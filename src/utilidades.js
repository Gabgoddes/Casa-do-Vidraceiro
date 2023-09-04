//Lista de Produtos

export const catalogo =[
    {
      id: "1",
      nome: 'Ferragem Superior 1101',
      marca: 'GDS',
      preco: 35,
      nomeArquivoImagem: 'produto1.jpg',
      ferragem:true,
    },
    {
        id: "2",
      nome: 'Ferragem Pivotante 1329',
      marca: 'GDS',
      preco: 20,
      nomeArquivoImagem: 'produto2.jpg',
      ferragem:true,
    },
    {
      id: "3",
        nome: 'Fechadura Para Porta de Giro 1520',
        marca: 'GDS',
        preco: 66,
        nomeArquivoImagem: 'produto3.jpg',
        ferragem:true,
    },
    {
      id: "4",
        nome: 'Ferragem 1306',
        marca: 'GDS',
        preco: 30,
        nomeArquivoImagem: 'produto4.jpg',
        ferragem:true,
    },
    {
      id: "5",
        nome: 'Ferragem 1310',
        marca: 'GDS',
        preco: 50,
        nomeArquivoImagem: 'produto5.jpg',
        ferragem:true,
    },
    {
      id: "6",
        nome: 'Kit de Ferragens (Kit 01)',
        marca: 'GDS',
        preco: 140,
        nomeArquivoImagem: 'produto6.jpg',
        ferragem:true,
    },
    {
      id: "7",
        nome: 'Ferragem 1302',
        marca: 'GDS',
        preco: 20,
        nomeArquivoImagem: 'produto7.jpg',
        ferragem:true,
    },
    {
      id: "8",
        nome: 'Ferragem 1103',
        marca: 'GDS',
        preco: 45,
        nomeArquivoImagem: 'produto8.jpg',
        ferragem:true,
    },
    {
      id: "9",
        nome: 'Ferragem 1013',
        marca: 'GDS',
        preco: 12,
        nomeArquivoImagem: 'produto9.jpg',
        ferragem:true,
    },
    {
      id: "10",
        nome: 'Ferragem 1201',
        marca: 'GDS',
        preco: 6,
        nomeArquivoImagem: 'produto10.jpg',
        ferragem:true,
    },
    {
      id: "11",
        nome: 'Ferragem 1123',
        marca: 'GDS',
        preco: 20,
        nomeArquivoImagem: 'produto11.jpg',
        ferragem:true,
    },
    {
      id: "12",
        nome: 'Ferragem 1570',
        marca: 'GDS',
        preco: 25,
        nomeArquivoImagem: 'produto12.jpg',
        ferragem:true,
    },
    {
      id: "13",
        nome: 'Ferragem 1571',
        marca: 'GDS',
        preco: 15,
        nomeArquivoImagem: 'produto13.jpg',
        ferragem:true,
    },
    {
      id: "14",
        nome: 'Botão Francês ABS',
        marca: 'GDS',
        preco: 1,
        nomeArquivoImagem: 'produto14.jpg',
        ferragem:false,
    },
    ];

    export function salvarLocalStorage(chave, informacao) {
      localStorage.setItem(chave, JSON.stringify(informacao));
    }

    export function lerLocalStorage(chave) {
      return JSON.parse(localStorage.getItem(chave));
    }

    export function apagarLocalStorage(chave) {
      localStorage.removeItem(chave);
    }


    export function desenharProdutoNoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {
      const produto = catalogo.find((p) => p.id === idProduto)
        const containerProdutosCarrinho =
        document.getElementById(idContainerHtml);
    
      const elementoArticle = document.createElement("article"); //<article></article>
        const articleClasses = ['flex', 'bg-white', 'rounded-lg',  'p-1', 'relative', 'mb-4','w-96',];
    
        for (const articleClass of articleClasses) {
            elementoArticle.classList.add(articleClass);
    
        }
    
        const cartaoProdutoCarrinho =
          `
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
          <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
          <div>`;
    
      elementoArticle.innerHTML = cartaoProdutoCarrinho;
      containerProdutosCarrinho.appendChild(elementoArticle);
    }