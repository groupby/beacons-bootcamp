const catalog = require('../catalog');

module.exports = function (req, res, next) {
    const productId = req.params.productId;
    console.log(`Product - Product ID: ${productId}`);

    // Grab product from catalog by ID. Assuming just one will be found.
    const product = catalog.filter(item => item.id === productId)[0];

    res.render('product', {
        product,
    });
}
