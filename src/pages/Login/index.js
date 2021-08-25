import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory  } from 'react-router-dom';
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

//API
import { Logar } from '../../services/logar';

// Validation
import { LoginValidation } from '../../validation/validations';

//Util
import retornoMensagem from '../../util/retornoMensagem';

export default function Login() {
  const history = useHistory();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidation),
  });

  useEffect(() => {
    localStorage.removeItem("dadosCandidato");
  }, [])

  const onSubmit = async e => {
    const entrar = await Logar(e.email, e.senha);

    if(entrar.status !== 200) {
      return retornoMensagem(entrar.status, entrar.data);
    }

    retornoMensagem(entrar.status, '🥳 Login efetuado com sucesso!');

    localStorage.setItem("dadosCandidato", JSON.stringify(entrar.data));

    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <Container>
      <ContainerHeader>
        <img src={Logo} alt="Logo" />
        <Link to="/cadastrar">
          <Botao type="button">Cadastrar</Botao>
        </Link>
      </ContainerHeader>
      <Box>
        <ContainerTitle>
          <h2>Encontre o emprego dos sonhos</h2>
          <span>Entrar para continuar na iReview.</span>
        </ContainerTitle>
        <BoxInside>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="Email"
              name="email"
              control={control}
              errors={errors.email?.message}
              placeHolder="example@example.com"
            />
            <Input
              type="password"
              label="Senha"
              name="senha"
              control={control}
              errors={errors.senha?.message}
              placeHolder="******"
            />
            <ContainerButtonSubmit>
              <Botao type="submit">Entrar</Botao>
              <p>
                Não possui conta ainda? <Link to="/cadastrar">Cadastrar</Link>
              </p>
            </ContainerButtonSubmit>
          </form>
          <Link to="/esqueceu-senha" className="link_esqueceu">
            <p>Esqueceu a senha?</p>
          </Link>
        </BoxInside>
      </Box>
    </Container>
  );
}
