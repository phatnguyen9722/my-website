const digimon_01_image_01 = require('../images/digimon/veemon.jpg');
const digimon_01_image_02 = require('../images/digimon/x-veemon.jpeg');

const digimon_02_image_01 = require('../images/digimon/agumon.png');
const digimon_02_image_02 = require('../images/digimon/greymon.png');

const digimon_03_image_01 = require('../images/digimon/gatomon.png');
const digimon_03_image_02 = require('../images/digimon/angewomon.webp');

const digimon_04_image_01 = require('../images/digimon/patamon.webp');
const digimon_04_image_02 = require('../images/digimon/angemon.png');

const digimon_05_image_01 = require('../images/digimon/gabumon.webp');
const digimon_05_image_02 = require('../images/digimon/garurumon.webp');
const Digimon = [
    {
        title: 'Veemon',
        type: 'dragon',
        image01: digimon_01_image_01,
        image02: digimon_01_image_02,
        description:
            'Veemon is a Dragon Digimon. It is a new species of Digimon that was discovered recently.',
    },
    {
        title: 'agumon',
        type: 'fire',
        image01: digimon_02_image_01,
        image02: digimon_02_image_02,
        description:
            `Agumon is a Reptile Digimon. It has grown up and become able to walk on two legs, and has an appearance like a tiny dinosaur. Because it is still on the way to adulthood, its power is low, but as its personality is quite ferocious, it doesn't understand fear. It has grown hard, sharp claws on both its hands and feet, and demonstrates its power in battle. It is also a being that foretells Digivolution to a great and powerful Digimon.`
    },
    {
        title: 'Gatomon',
        type: 'Holy Beast',
        image01: digimon_03_image_01,
        image02: digimon_03_image_02,
        description:
            `Gatomon is an Animal Digimon. It has a very healthy curiosity, so it loves pranks. Although its body is small, it is a precious Holy-species Digimon, and its appearance does not match the true strength it possesses. It wears a Holy Ring on its tail, but if it is lost, its power is decreased and it can no longer exhibit its original power.`
    },
    {
        title: 'Patamon',
        type: '',
        image01: digimon_04_image_01,
        image02: digimon_04_image_02,
        description:
            `Patamon is a Mammal Digimon. It is characterized by its large ears, and is able to fly through the air by using them as large wings, but because it only goes at a speed of 1 kph, it is said that it is definitely faster walking. However, it's very popular because its appearance is cute when it is desperately flying (though it seems that it doesn't feel the same). Due to its extremely obedient personality, its trainers are well-defended. Also, even though Patamon doesn't wear a Holy Ring, it is able to exhibit its hidden holy power, and it appears to have inherited the genes of ancient Digimon.`,
    },
    {
        title: 'Gabumon',
        type: 'Fire',
        image01: digimon_05_image_01,
        image02: digimon_05_image_02,
        description:
            `Gabumon is a Reptile Digimon. Although it is covered by a fur pelt, it is still clearly a Reptile Digimon. Due to its extremely timid and shy personality, it always gathers up the data which Garurumon leaves behind, and shapes it into a fur pelt to wear. Because it is wearing the fur pelt of Garurumon, who is feared by other Digimon, it fills the role of safeguarding itself as a result of protecting its body. When it is wearing the fur pelt, its personality does a complete 180° shift. Gabumon is especially close to Bulucomon.`,
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