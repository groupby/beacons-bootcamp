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

    const gbiSelectedNavigation = facets.map(facet => {
        return {
            name: facet.name,
            displayName: facet.name,
            refinements: [
                {
                    type: 'Value',
                    value: facet.name,
                },
            ],
            range: false,
            or: false,
        };
    });

    const gbiRecords = matchingProducts.map(product => {
        return {
            _u: `http://www.example.com/${product.id}`,
        };
    });

    res.render('search', {
        searchResults: matchingProducts,
        facets,
        searchTerm,
        totalMatches: matchingProducts.length,
        recordStart: 1,
        recordEnd: 3,
        gbiArea: 'Dev',
        gbiSelectedNavigation: JSON.stringify(gbiSelectedNavigation),
        gbiRecords: JSON.stringify(gbiRecords),
    });
}

