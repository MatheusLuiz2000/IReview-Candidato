import React from 'react';

import ImageVaga from '../../../assets/images/image_vaga_1.jpg';
import { TituloVaga, Conteudo, TextoEsquerda, TextoDireita } from './style';

import Content from '../../../components/Dashboard/Content';

export default function Candidatos() {
  return (
    <Content titulo="Candidaturas" active="candidatos">
      <Conteudo>
        <img src={ImageVaga} width="120px" height="120px" alt="Logo vaga" />
        <TituloVaga>Desenvolvedor Full Stack</TituloVaga>
      </Conteudo>
      <Conteudo>
        <TextoEsquerda>Salário inicial:</TextoEsquerda>
        <TextoDireita>R$ 3.000,00</TextoDireita>
      </Conteudo>
      <Conteudo>
        <TextoEsquerda>Ensino superior:</TextoEsquerda>
        <TextoDireita>Completo</TextoDireita>
      </Conteudo>
      <Conteudo>
        <TextoEsquerda>Local:</TextoEsquerda>
        <TextoDireita>São Paulo</TextoDireita>
      </Conteudo>
      <Conteudo>
        <TextoEsquerda>Benefícios:</TextoEsquerda>
        <TextoDireita>Vale transporte, vale refeição, vale alimentação, plano de saúde</TextoDireita>
      </Conteudo>
      <Conteudo>
        <TextoEsquerda>Descrição:</TextoEsquerda>
        <TextoDireita>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos
          </TextoDireita>
      </Conteudo>
    </Content>
  );
}
