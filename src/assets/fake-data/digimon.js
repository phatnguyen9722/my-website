const digimon_01_image_01 = require('../images/digimon/pikachu.png').default;

const digimon_02_image_01 = require('../images/digimon/squirtle.png').default;

const digimon_03_image_01 = require('../images/digimon/charmander.jpeg').default;

const digimon_04_image_01 = require('../images/digimon/certitan.png').default;

const Digimon = [
    {
        title: 'pikachu',
        type: 'electric',
        image01: digimon_01_image_01,
        // image02: product_01_image_02,
        description:
            'a',
    },
    {
        title: 'squirtle',
        type: 'water',
        image01: digimon_02_image_01,
        // image02: product_02_image_02,
        description:
            'a',
    },
    {
        title: 'charmander',
        type: 'fire',
        image01: digimon_03_image_01,
        // image02: product_02_image_02,
        description:
            'a',
    },
    {
        title: 'certitan',
        type: 'iron',
        image01: digimon_04_image_01,
        // image02: product_02_image_02,
        description:
            'a',
    },
];

const getAllDigimon = () => Digimon;
const getDigimon = (count) => {
    const max = Digimon.length - 1;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return Digimon.slice(start, start + count);
}
const getDigimonBySlug = (slug) => Digimon.find(e => e.slug === slug)


const DigimonData = {
    getAllDigimon,
    getDigimonBySlug,
    getDigimon
}

export default DigimonData;