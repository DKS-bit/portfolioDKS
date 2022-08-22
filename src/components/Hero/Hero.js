import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Seja bem vindo! <br ></br>
      Sou Lucas D. Maia :D
    </SectionTitle>
    <SectionText>
      Sou um desevolvedor full stack com o objetivo de sempre estar aprendendo para fazer paginas, projetos e coisas legais C:
    </SectionText>
    <Button onClick = {()=>window.location = 'https://google.com'}>Meu contato! </Button>
  </LeftSection>
</Section>
);

export default Hero;