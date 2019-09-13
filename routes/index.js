const config = require('../config');

module.exports = function (req, res, next) {
    res.render('index', {
        title:            config.storeName,
        storeProductType: config.storeProductType,
    });
};
