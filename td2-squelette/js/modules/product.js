
let product = [];

function Produit(référence, prix, description) {
    this.ref = référence,
    this.price = prix,
    this.desc = description

}



product.push(new Produit("#REF1", 250.29, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
product.push(new Produit("#REF2", 129.25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
product.push(new Produit("#REF3", 18.10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
product.push(new Produit("#REF4", 180.12, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
product.push(new Produit("#PRT1", 22.0, "Produit de test"));
product.push(new Produit("#PRT2", 40.0, "Autre produit de test"));

function search(keywords) {
    
    let foncRecherche = element => element.ref.includes(keywords) || element.desc.includes(keywords);
    
    let res = product.filter(foncRecherche);
    
    return res;
}

export default {
     product,
     search
}