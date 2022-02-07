import  * as produit from "./product.js";
import * as ui from "./ui.js";

let champRecherche = document.querySelector('input#product-search');
let divProduits = document.querySelector('div#product-list');
function init() {
    ui.default.buildProductList(produit.default.product);

    champRecherche.addEventListener('keyup', () => {
        divProduits.innerHTML = "";
        ui.default.buildProductList(produit.default.search(champRecherche.value));
    })

}

export default {
    init
}