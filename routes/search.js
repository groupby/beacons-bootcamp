const catalog = require('../catalog');

module.exports = function (req, res, next) {
    const searchTerm = req.query.q;
    console.log(`Search - Search term: ${searchTerm}`);

    // Basic search engine - If product name includes the search term, it's a match.
    const matchingProducts = catalog.filter(item => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Mock "facets", which are groups of products that a shopper can select.
    // In GroupBy these are called "navigations".
    const facets = [
        {
            name: "All products",
            selected: true,
        },
        {
            name: "Survival Equipment",
            selected: false,
        },
        {
            name: "Marine Equipment",
            selected: false,
        },
        {
            name: "Food",
            selected: false,
        },
    ];

    res.render('search', {
        searchResults: matchingProducts,
        facets,
    });
}

