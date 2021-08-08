import React from 'react';

import { Container, Box, Circle } from './style';

import IconDados from '../../../assets/icons/dados.svg';
import IconAtividadesExercidas from '../../../assets/icons/atividadesexercidas.svg';
import IconRegras from '../../../assets/icons/ranqueamento.svg';
import IconProvas from '../../../assets/icons/regras.svg';
import IconBox from '../../../assets/icons/box2.svg';
import IconInfo from '../../../assets/icons/info.svg';

export default function TimeLineVaga({ changeTab }) {
  return (
    <Container>
      <hr />
      <Box onClick={() => changeTab(1)}>
        <Circle>
          <img src={IconDados} alt="Icon - Dados cadastrais" />
        </Circle>
        <h3>Dados Cadastrais</h3>
      </Box>
      <Box onClick={() => changeTab(2)}>
        <Circle>
          <img src={IconBox} alt="Icon - Box" />
        </Circle>
        <h3>Sobre você</h3>
      </Box>
      <Box onClick={() => changeTab(3)}>
        <Circle>
          <img src={IconAtividadesExercidas} alt="Icon - Atividade Exercidas" />
        </Circle>
        <h3>Endereço</h3>
      </Box>
      <Box onClick={() => changeTab(4)}>
        <Circle>
          <img src={IconRegras} alt="Icon - Regras de seleção" />
        </Circle>
        <h3>Formação</h3>
      </Box>
      <Box onClick={() => changeTab(5)}>
        <Circle>
          <img src={IconProvas} alt="Icon - Provas de seleção" />
        </Circle>
        <h3>Histórico Profissional</h3>
      </Box>
      <Box onClick={() => changeTab(6)}>
        <Circle>
          <img src={IconInfo} alt="Icon - IconInfo" className="info" />
        </Circle>
        <h3>Idiomas</h3>
      </Box>
      <Box onClick={() => changeTab(7)}>
        <Circle>
          <img src={IconInfo} alt="Icon - IconInfo" className="info" />
        </Circle>
        <h3>Cursos/Certificações</h3>
      </Box>
      <Box onClick={() => changeTab(8)}>
        <Circle>
          <img src={IconInfo} alt="Icon - IconInfo" className="info" />
        </Circle>
        <h3>Informações importantes</h3>
      </Box>
    </Container>
  );
}
