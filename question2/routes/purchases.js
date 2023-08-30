const express = require('express');
const {addPurchassesClient, getUser, getProduct} = require('../models/purchases')

const router = express.Router();


router.post('/', (req, res) => {
    const newPurchase =  addPurchassesClient(req.body.pseudo,parseInt(req.body.product,10) , parseInt(req.body.quantity,10));
    if( newPurchase=== undefined) return res.sendStatus(400);
    console.log(newPurchase);
    return res.json(newPurchase);
  });

router.get('/:id', (req, res) => {
    let pseudo = getUser(req?.params?.id);
    if(!pseudo) return res.sendStatus(400);
    
    return res.json(pseudo);
}); 

router.get('/recommendations/:username', (req, res) => {
    
    let prod = getProduct(req?.params?.username);
    if(!prod) return res.sendStatus(400);
    
    return res.json(prod);
}); 



module.exports = router;