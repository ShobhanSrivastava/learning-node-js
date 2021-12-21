const express = require('express');
const path = require('path');

const router = express.Router();

const products = [];
//admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    res.render('add-products',{ title : "Add Products" })
});

//admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    products.push({title : req.body.title})
    res.redirect("/");
});

module.exports = { routes : router, prods : products};