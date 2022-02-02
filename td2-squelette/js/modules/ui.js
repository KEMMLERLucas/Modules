import produit from './product';
let displayProduct = function(produit) {
    let divProduit = document.createElement('div');
    divProduit.setAttribute('id', 'product-list');

    //Créer les texte node pour chaque div

    let divProduct = document.createElement('div');
    divProduct.classList.add('product');

    let divPhoto = document.createElement('div');
    divPhoto.setAttribute('class', 'photo');

    let divRefPrix = document.createElement('div');
    divRefPrix.classList.add('details-top');

    let divDesc = document.createElement('div');
    divDesc.setAttribute('class', 'details-description');
}