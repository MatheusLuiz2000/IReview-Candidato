import React from 'react';

import { Container, ContainerHeader, Box } from './style';

// Images
import Logo from '../../../assets/images/logo.svg';

export default function CriacaoVaga({ children }) {
  return (
    <Container>
      <ContainerHeader>
        <img src={Logo} alt="iReview - Logo" />
      </ContainerHeader>
      <Box>{children}</Box>
    </Container>
  );
}
