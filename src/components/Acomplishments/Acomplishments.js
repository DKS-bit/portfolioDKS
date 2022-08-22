import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Algo'},
  { number: 1000, text: 'VOu colocar algo aqui', },
  { number: 1900, text: 'NAos ei', },
  { number: 5000, text: 'To sem ideias ok', }
];

const Acomplishments = () => (
<Section>
  <SectionTitle>Conquistas pessoais</SectionTitle>
  <Boxes>
    {data.map((card, index) => (
      <Box key={index}>
        <BoxNum>{card.number}+</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
</Section>
);

export default Acomplishments;
