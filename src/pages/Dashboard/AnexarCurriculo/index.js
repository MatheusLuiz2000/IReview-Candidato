import React from 'react';

import { Container, ContainerHeader, Box, Title, BoxInput, TextDark, TextLight, TextColor, Link, BoxButton } from './style';
import Button from '../../../components/Dashboard/Button';

// Images
import Logo from '../../../assets/images/logo.svg';

export default function AnexarCurriculo() {
  return (
    <Container>
      <ContainerHeader>
        <img src={Logo} alt="iReview - Logo" />
      </ContainerHeader>
      <Box>
        <Title>Preencher dados cadastrais</Title>
        <BoxInput>
          <TextDark>Anexar currículo</TextDark>
          <input type="file" id="curriculo" name="curriculo" accept="pdf" />
          <TextLight>Para melhor análise, são permitidos apenas arquivos PDF</TextLight>
          <BoxButton>
            <Button
              onClick={() => {
                window.location.href = '/dashboard/vagas';
              }}
              type="submit">Enviar</Button>
          </BoxButton>
        </BoxInput>
        <TextColor>OU</TextColor>
        <Link href="/cadastrar">Complete as suas informações manualmente!</Link>
        <TextLight>Fica tranquilo, esse processo é bem rapidinho!</TextLight>
      </Box>
    </Container>
  );
}
