const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');
const { prods } = require('./admin');
const adminData = require('./admin')

router.get('/',(req, res, next) => { //This works like an else block, if nothing works, this will be executed
    const products = adminData.prods;
    res.render('shop', { prod : prods, pageTitle : 'Shop' });
});

module.exports = router;