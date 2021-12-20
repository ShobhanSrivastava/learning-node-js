const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../utils/path')

router.get('/',(req, res, next) => { //This works like an else block, if nothing works, this will be executed
    res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;