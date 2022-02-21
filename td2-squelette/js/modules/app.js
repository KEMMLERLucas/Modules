import   produit from "./product.js";
import ui from "./ui.js";
import cart from "./cart.js";

let champRecherche = document.querySelector('input#product-search');
let divProduits = document.querySelector('div#product-list');
let champViderPanier = document.querySelector('a#empty-cart');
function init() {
    ui.buildProductList(produit.product);
    

    champRecherche.addEventListener('keyup', () => {
        divProduits.innerHTML = "";
        ui.buildProductList(produit.search(champRecherche.value));
    })

    champViderPanier.addEventListener('click', (e) => {
        cart.emptyCart();
        ui.displayCart();
    }); 
}

export default {
    init
}