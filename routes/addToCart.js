const catalog = require('../catalog');

// Meant to be mounted as a POST request handler.
// The parameters are parsed and available in "req.body".
module.exports = function (req, res, next) {
    const productId = req.body.productId;
    console.log(`Add to cart - Product ID: ${productId}`);

    // Assume the product being added to the cart will be found in the catalog.
    const product = catalog.filter(item => {
        return item.id === productId;
    })[0];

    // Render cart view. Cart will not track what has been added. It will always
    // show just the most recently added item, using the parameter here.
    res.render('cart', {
        product,
    });
}
