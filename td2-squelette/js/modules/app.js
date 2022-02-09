import   produit from "./product.js";
import ui from "./ui.js";

let champRecherche = document.querySelector('input#product-search');
let divProduits = document.querySelector('div#product-list');
function init() {
    ui.buildProductList(produit.product);
    

    champRecherche.addEventListener('keyup', () => {
        divProduits.innerHTML = "";
        ui.buildProductList(produit.search(champRecherche.value));
    })

}

export default {
    init
}