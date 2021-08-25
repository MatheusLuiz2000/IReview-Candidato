import React from 'react';

import { TituloVaga, Conteudo, TextoEsquerda, TextoDireita, Box } from './style';
import Content from '../../../components/Dashboard/Content';
import Button from '../../../components/Dashboard/Button';

import ImageVaga from '../../../assets/images/image_vaga_1.jpg';

export default function Component() {
  return (
    <Content titulo="Detalhes da vaga" active="vagas">
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
      <Box>
        <Button type="button">Inscreva-se</Button>
      </Box>
    </Content>
  );
}
