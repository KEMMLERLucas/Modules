let tab = [];

function addToCart(product) {
    let objTrouve = tab.find(e => e.produit === product);

    if (objTrouve){
        let idxObj = tab.indexOf(objTrouve);
        tab[idxObj].quantité++;
    }else {

        let obj = {
            produit: product,
            quantité: 1
        }
        tab.push(obj);
    }
    

    
}

function genericCalc(fonct) {
    return tab.reduce(fonct);
}


export default {
    addToCart,
    tab,
    genericCalc
}