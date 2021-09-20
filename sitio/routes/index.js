var express = require('express');
var router = express.Router();
const {index} = require('../controller/indexController')

/* GET home page. */
router.get('/', index);

module.exports = router;
