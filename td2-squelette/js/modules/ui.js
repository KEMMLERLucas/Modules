import * as cart from "./cart.js";


let displayProduct = function(produit) {
    console.log('Creation du produit');
    console.log(`Prix du produit : ${produit.price}, description du produit :
    ${produit.desc}`);
    let divProduit = document.createElement('div');
    divProduit.setAttribute('id', 'product-list');

    //Créer les texte node pour chaque div

    let divProduct = document.createElement('div');
    divProduct.classList.add('product');

    let divPhoto = document.createElement('div');
    divPhoto.setAttribute('class', 'photo');

    let divRefPrix = document.createElement('div');
    divRefPrix.classList.add('details-top');
    let texteNPrix = document.createElement('strong');
    texteNPrix.classList.add('bigger');
    let texteNRef = document.createElement('strong');
    texteNRef.classList.add('bigger');
    texteNRef.innerHTML = produit.ref;
    divRefPrix.appendChild(texteNRef);

    texteNRef.setAttribute('data-type', 'ref');
    texteNPrix.setAttribute('data-type', 'price');

    //Il faut aussi ajouter le cadis pour ajouter au panier.

    texteNPrix.innerHTML = produit.price + " €";
    divRefPrix.appendChild(texteNPrix);

    let divDesc = document.createElement('div');
    divDesc.setAttribute('class', 'details-description');
   
    divDesc.innerHTML = produit.desc;

    divProduct.appendChild(divPhoto);
    divProduct.appendChild(divRefPrix);
    divProduct.appendChild(divDesc);




    let divProduits = document.querySelector('div#product-list');
    divProduits.appendChild(divProduct);

    //BoutonProduit.addEventListner('click', () => {cart.default.addToCart(produit)})
}


let buildProductList = (tab) => {
    tab.forEach((elem) => {
        displayProduct(elem);
    });
}

export default {
    buildProductList
}