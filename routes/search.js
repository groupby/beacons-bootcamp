var express = require('express');
var router = express.Router();

const catalog = require('../data').catalog;

/* GET search results. */
router.get('/', function (req, res, next) {
    const term = req.query.searchterm;
    console.log(`Search term: ${term}`);

    const matchingProducts = [];
    catalog.forEach(item => {
        if (item.name.toLowerCase().includes(term.toLowerCase())) {
            matchingProducts.push(item);
        }
    });

    res.render('search_results', {
        searchResults: matchingProducts,
        loginId: 'matt',
        searchTerm: term,
    });
});

module.exports = router;

