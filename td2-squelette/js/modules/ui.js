import cart from "./cart.js";


let displayProduct = function(produit) {
    
    let htmlCreate = 
    `<div class="photo">
        <span class="mdi mdi-camera"></span>
        <a class="product-add2cart">
            <span class="mdi mdi-cart"></span>
        </a>
    </div>
    <div class="details">
        <div class="details-top">
            <strong class="bigger" data-type="ref">${produit.ref}</strong>
            <strong class="bigger" data-type="price">${produit.price} €</strong>
        </div>
        <div class="details-description">${produit.desc}</div>
    </div>`;


    let divProduct = document.createElement('div');
    divProduct.classList.add('product');

    divProduct.innerHTML = htmlCreate;

    
    let divProduits = document.querySelector('div#product-list');
    divProduits.appendChild(divProduct);
    let boutonAjoutePanier = divProduct.querySelector('a.product-add2cart')
    boutonAjoutePanier.addEventListener('click', (event) => {
        cart.addToCart(produit);
        displayCart();
    })
    
}


let buildProductList = (tab) => {
    tab.forEach((elem) => {
        displayProduct(elem);
    });

    
}

let displayCart = () => {
    console.log(cart.tab);
    let tableau = cart.getTab();
    let panierCourant = document.querySelector('table#cart-content');
    let fonctionTransformerChaine = (e) => {
        return `<tr>
        <td data-type="ref">${e.produit.ref}</td>
        <td data-type="qte">x${e.quantité}</td>
        <td data-type="amount">${e.produit.price * e.quantité}€</td>
    </tr>`;
    }
    let fonctionAjoutHtml = (acc, elem) => {
        return acc += elem;
    }
    console.log(cart.tab);
    if (cart.tab.length === 0) {
        console.log("Tabeau vide !");
        panierCourant.innerHTML = "";
    }else {
    let str = tableau.map(fonctionTransformerChaine).reduce(fonctionAjoutHtml, "");//.reduce(fonctionAjoutHtml, "");
    console.log("Ajout dans le panier !");
    panierCourant.innerHTML = str;
    }

    let fonctionPrixTot = (acc, elem) => {
       
        return acc += (elem.produit.price * elem.quantité);
    }

    let prixTotal = cart.genericCalc(fonctionPrixTot);
    
    console.log(prixTotal);
    document.querySelector('span#cart-total').innerHTML = prixTotal + "€";

    let fonctionElementTot = (acc, elem) => acc += (elem.quantité);


    let nbElem = cart.genericCalc(fonctionElementTot); //Mauvais appel pas de second parametre
    console.log(nbElem);
    document.querySelector('span#total-products').innerHTML = nbElem;
    
}

export default {
    buildProductList,
    displayCart
}