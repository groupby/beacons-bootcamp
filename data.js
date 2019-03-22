// Static data for the store

// Represents items in store's product catalog
const catalog = [
    {
        id: 1,
        sku: 'sku1',
        name: 'Personal Locator Beacon',
        desc: 'Locates your person.',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Micro_personal_locator_beacon.jpg',
    },
    {
        id: 2,
        sku: 'sku2',
        name: 'Beacon on Water',
        desc: 'Some sort of marine equipment I suppose.',
        imgUrl: 'https://www.publicdomainpictures.net/pictures/220000/nahled/balises-sur-leau-.jpg',
    },
    {
        id: 3,
        sku: 'sku3',
        name: 'Not Actually a Beacon',
        desc: 'But you probably don\'t mind that, do you?',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Glazed-Donut.jpg',
    },
];

const STORE_NAME = 'Show Me The Beacons';

module.exports = {
    catalog,
    STORE_NAME,
};
