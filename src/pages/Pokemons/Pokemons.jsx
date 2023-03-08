import React, { useEffect } from 'react';

import Helmet from '../../components/common/Helmet';
import Section, { SectionBody, SectionTitle } from '../../components/common/Section';
import Grid from '../../components/common/Grid';
import PokemonsView from '../../components/common/PokemonsView';
import PokemonsCard from '../../components/common/PokemonsCard';

import pokemonsData from '../../assets/fake-data/pokemons';

const Pokemons = (props) => {
  // const pokemons = pokemonsData.getPokemonsBySlug(props.match.params.slug);
  const pokemons = pokemonsData;
  const relatedPokemons = pokemonsData.getPokemons(8);
  console.log(pokemons);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pokemons]);
  return (
    <Helmet title={pokemons.title}>
      <Section>
        <PokemonsView pokemons={pokemons} />
      </Section>
      <Section>
        <SectionTitle>More</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedPokemons.map((item, index) => (
              <PokemonsCard
                key={index}
                img01={item.image01}
                // img02={item.image02}
                name={item.title}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Pokemons;
