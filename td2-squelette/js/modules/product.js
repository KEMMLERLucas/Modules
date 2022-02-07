
let product = [];

function Produit(référence, prix, description) {
    this.ref = référence,
    this.price = prix,
    this.desc = description

}




product.push(new Produit("#PRT1", 22.0, "Produit de test"));
product.push(new Produit("#PRT2", 40.0, "Autre produit de test"));

function search(keywords) {
    console.log('Recherche des elements contenant : ' + keywords);
    let foncRecherche = element => element.ref.includes(keywords) || element.desc.includes(keywords);
    
    let res = product.filter(foncRecherche);
    console.log(res);
    return res;
}

export default {
     product,
     search
}