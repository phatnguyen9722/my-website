import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from '../../components/common/Helmet';
import Section, { SectionTitle, SectionBody } from '../../components/common/Section';
import Grid from '../../components/common/Grid';
import DigimonCard from '../../components/common/DigimonCard';
import HeroSlider from '../../components/common/HeroSlider';

import DigimonData from '../../assets/fake-data/digimon';
import heroSliderData from '../../assets/fake-data/hero-slider';
import banner from '../../assets/images/banner.png';
function Home() {
  console.log(DigimonData.getDigimon(4))
  return (
    <Helmet title="Home">
      {/* hero slider */}
      <HeroSlider data={heroSliderData} control={true} auto={false} timeOut={5000} />
      {/* end hero slider */}

      {/* policy section */}
      <Section>
        <SectionBody>
          {/* <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard name={item.name} description={item.description} icon={item.icon} />
              </Link>
            ))}
          </Grid> */}
        </SectionBody>
      </Section>
      {/* end policy section */}
      <Section>
        <SectionTitle>Top Digital in week</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {DigimonData.getDigimon(4).map((item, index) => (
              <DigimonCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
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
