import React from 'react';

import { Container, Box } from './style';

export default function TimeLineVaga({ changeTab, selected }) {
  return (
    <Container>
      <Box selected={selected === 0} onClick={() => changeTab(1)}>
        <h4>Dados Cadastrais</h4>
      </Box>
      <Box selected={selected === 1} onClick={() => changeTab(2)}>
        <h4>Sobre você</h4>
      </Box>
      <Box selected={selected === 2} onClick={() => changeTab(3)}>
        <h4>Endereço</h4>
      </Box>
      <Box selected={selected === 3} onClick={() => changeTab(4)}>
        <h4>Formação</h4>
      </Box>
      <Box selected={selected === 4} onClick={() => changeTab(5)}>
        <h4>Histórico Profissional</h4>
      </Box>
      <Box selected={selected === 5} onClick={() => changeTab(6)}>
        <h4>Idiomas</h4>
      </Box>
      <Box selected={selected === 6} onClick={() => changeTab(7)}>
        <h4>Cursos/Certificações</h4>
      </Box>
      <Box selected={selected === 7} onClick={() => changeTab(8)}>
        <h4>Informações importantes</h4>
      </Box>
    </Container>
  );
}
