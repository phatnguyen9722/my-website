import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from '../../components/common/Helmet';
import Section, { SectionTitle, SectionBody } from '../../components/common/Section';
import Grid from '../../components/common/Grid';
import PokemonsCard from '../../components/common/PokemonsCard';

import pokemonsData from '../../assets/fake-data/pokemons';

function HomePage() {
  return (
    <Helmet title="Home Page">
      <Section>
        <SectionTitle>Top Pokemon in week</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {pokemonsData.getPokemons(4).map((item, index) => (
              <PokemonsCard
                key={index}
                img01={item.image01}
                // img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
}

export default HomePage;
