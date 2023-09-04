import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtosCatalogo";
import { iniciarCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho";
import {atualizarPrecoCarrinho} from "./src/menuCarrinho";

renderizarCatalogo();
iniciarCarrinho();
atualizarPrecoCarrinho();
renderizarProdutosCarrinho();
inicializarFiltros();