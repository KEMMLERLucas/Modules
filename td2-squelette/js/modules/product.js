
let product = [];

function Produit(référence, prix, description) {
    this.ref = référence,
    this.price = prix,
    this.desc = description

}




product.push(new Produit("Produit Test numéro 1", 22.0, "Produit de test"));
product.push(new Produit("Produit Test numéro 2", 40.0, "Autre produit de test"));


export default {
    product,
    Produit
}