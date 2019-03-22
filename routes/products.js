var express = require('express');
var router = express.Router();

/* GET product. */
router.get('/:productId', function (req, res, next) {
    const productId = req.params.productId;

    const product = {
        id: productId,
        name: 'Super Beacon',
        desc: 'A very nice beacon.',
    };

    res.render('products', { product });
});

module.exports = router;
