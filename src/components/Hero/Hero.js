import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      <ReactTypingEffect
        text={[" Seja bem vindo!", "Sou Lucas D. Maia :D"]}
        speed={100}
        eraseSpeed={50}
        typingDelay={0}
        cursorRenderer={cursor => <p style={{background:"#242f54"}}>{cursor}</p>}
      />
    </SectionTitle>
    <SectionText>
      Sou um desevolvedor full stack com o objetivo de sempre estar aprendendo para fazer paginas, projetos e coisas legais C:
    </SectionText>
    <Button onClick = {()=>window.location = 'https://wa.me/5511947474540'}>Meu contato! </Button>
  </LeftSection>
</Section>

);

export default Hero;