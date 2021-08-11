import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Container,
  ContainerHeader,
  ContainerTitle,
  Box,
  BoxInside,
  ContainerButtonSubmit,
} from './style';

import Botao from '../../components/Botao';
import Input from '../../components/Input';

import Logo from '../../assets/images/logo.svg';

// Validation
import { DadosCadastraisValidation } from '../../validation/validations';

export default function EsqueceuSenha() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(DadosCadastraisValidation),
  });

  const onSubmit = e => {
    console.log(e);
  };

  return (
    <Container>
      <ContainerHeader>
        <img src={Logo} alt="Logo" />
        <Link to="/login">
          <Botao type="button">Entrar</Botao>
        </Link>
      </ContainerHeader>
      <Box>
        <ContainerTitle>
          <h2>Esqueceu sua senha?</h2>
          <span>Fica tranquilo. A gente resolve!</span>
        </ContainerTitle>
        <BoxInside>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="Email corporativo"
              name="email"
              control={control}
              errors={errors.email?.message}
              placeHolder="example@example.com"
            />
            <ContainerButtonSubmit>
              <Botao type="submit">Entrar</Botao>
              <p>
                Não possui conta? <Link to="/cadastrar">Cadastrar</Link>
              </p>
            </ContainerButtonSubmit>
          </form>
        </BoxInside>
      </Box>
    </Container>
  );
}
