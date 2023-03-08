import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from '../../components/common/Helmet';
import Section, { SectionTitle, SectionBody } from '../../components/common/Section';
import Grid from '../../components/common/Grid';
import DigimonCard from '../../components/common/DigimonCard';

import DigimonData from '../../assets/fake-data/digimon';
import banner from '../../assets/images/banner.png';
function Home() {
  return (
    <Helmet title="Home">
      <Section>
        <SectionTitle>Top Digital in week</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {DigimonData.getDigimon(4).map((item, index) => (
              <DigimonCard
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

      {/* banner */}
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="banner" />
          </Link>
        </SectionBody>
      </Section>
      {/* end banner */}
    </Helmet>
  );
}

export default Home;
