import React, { useEffect } from 'react';

import Helmet from '../../components/common/Helmet';
import Section, { SectionBody, SectionTitle } from '../../components/common/Section';
import Grid from '../../components/common/Grid';
import DigimonView from '../../components/common/DigimonView';
import DigimonCard from '../../components/common/DigimonCard';

import DigimonData from '../../assets/fake-data/digimon';

const Digimon = (props) => {
  // const Digimon = DigimonData.getDigimonBySlug(props.match.params.slug);
  const Digimon = DigimonData;
  const relatedDigimon = DigimonData.getDigimon(8);
  console.log(Digimon);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Digimon]);
  return (
    <Helmet title={Digimon.title}>
      <Section>
        <DigimonView Digimon={Digimon} />
      </Section>
      <Section>
        <SectionTitle>More</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedDigimon.map((item, index) => (
              <DigimonCard
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

export default Digimon;
