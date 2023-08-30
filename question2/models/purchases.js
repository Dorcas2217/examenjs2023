const path = require('node:path');
const { serialize, parse } = require('../utils/json');
const jsonDbPath = path.join(__dirname, '/../data/purchases.json');
const {users, products} = require('../constants');


function addPurchassesClient(pseudo, idProduct, qte){

const idUser = users.findIndex((elt)=> elt === pseudo);
const idProd = products.findIndex((elt)=> elt.id === idProduct);

if(idUser === undefined || idProd === undefined) return null;

const purchases = parse(jsonDbPath);

const newPurchase = {
    pseudo : pseudo,
    product: idProduct,
    quantity: qte
}
purchases.push(newPurchase);

serialize(jsonDbPath, purchases);

return newPurchase;

}

function getUser(idProd){
    const id = products.findIndex((elt)=> elt.id === idProd);
    if( id === undefined) return null;

    const purchases = parse(jsonDbPath);

    let max = 0;
    purchases.forEach((elt) => {
       if(elt.quantity > max){
        max = elt.quantity;
       }
    });

    const purchase = purchases.find((elt)=> elt.quantity === max);

    return purchase.pseudo;
}

function getProduct(pseudo){
    const idUser = users.findIndex((elt)=> elt === pseudo);
    if(idUser === undefined ) return null;

    var rand = Math.floor(Math.random()*products.length);
    const prod = products[rand];

    return prod;

}

module.exports = {
    addPurchassesClient, getUser, getProduct
}
