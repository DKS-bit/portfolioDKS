import React from 'react';
import { DiDatabase, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id ="tech">
  <SectionDivider/>
  <SectionTitle>Tecnologias</SectionTitle>
  <SectionText>
    Ja estudei e utilizei muitas tecnologias indo do backend para o frontend e ate mesmo o design de paginas
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experiencia com <br/>
          React.js/Next
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiDatabase size="3rem"/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experiencia com <br/>
          Node.js, PHP e Bancos de dados relacionais e nao relacionais
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiZend size="3rem"/>
      <ListContainer>
        <ListTitle>Design</ListTitle>
        <ListParagraph>
          Experiencia com <br/>
          ferramentas como o Figma
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
