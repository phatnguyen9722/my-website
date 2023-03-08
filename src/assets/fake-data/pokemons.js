const pokemon_01_image_01 = require('../images/pokemons/pikachu.png').default;

const pokemon_02_image_01 = require('../images/pokemons/squirtle.png').default;

const pokemon_03_image_01 = require('../images/pokemons/charmander.jpeg').default;

const pokemon_04_image_01 = require('../images/pokemons/certitan.png').default;

const pokemons = [
    {
        title: 'pikachu',
        type: 'electric',
        image01: pokemon_01_image_01,
        // image02: product_01_image_02,
        description:
            'a',
    },
    {
        title: 'squirtle',
        type: 'water',
        image01: pokemon_02_image_01,
        // image02: product_02_image_02,
        description:
            'a',
    },
    {
        title: 'charmander',
        type: 'fire',
        image01: pokemon_03_image_01,
        // image02: product_02_image_02,
        description:
            'a',
    },
    {
        title: 'certitan',
        type: 'iron',
        image01: pokemon_04_image_01,
        // image02: product_02_image_02,
        description:
            'a',
    },
];

const getAllPokemons = () => pokemons;
const getPokemons = (count) => {
    const max = pokemons.length - 1;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return pokemons.slice(start, start + count);
}
const getPokemonsBySlug = (slug) => pokemons.find(e => e.slug === slug)


const pokemonsData = {
    getAllPokemons,
    getPokemonsBySlug,
    getPokemons
}

export default pokemonsData;