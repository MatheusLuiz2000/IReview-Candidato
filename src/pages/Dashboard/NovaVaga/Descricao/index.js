import React, { useEffect } from 'react';

import { Container, ContainerSubmit, Box, ContainerInputGroup } from './style';

import Button from '../../../../components/Dashboard/Button';
import Input from '../../../../components/Input';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { EnderecoValidation } from '../../../../validation/validations';

export default function Descricao() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EnderecoValidation),
  });

  useEffect(() => {
    if(localStorage.getItem("endereco")) {
      const dados = JSON.parse(localStorage.getItem("endereco"));

      reset(dados);
    }
  }, []);

  const onSubmit = async e  => {
    localStorage.setItem("endereco", JSON.stringify(e));
  }

  return (
    <Container>
      <Box onSubmit={handleSubmit(onSubmit)}>
        <ContainerInputGroup>
          <Input
            type="text"
            tipo="dashboard"
            label="CEP"
            placeholder="Digite o CEP"
            name="cep"
            control={control}
            options={{
              numericOnly: true,
            }}
            errors={errors.cep?.message}
          />
          <Input
            type="text"
            tipo="dashboard"
            label="Rua"
            placeholder="Digite a rua"
            name="rua"
            control={control}
            options={{
              delimiters: [''],
            }}
            errors={errors.rua?.message}
          />
        </ContainerInputGroup>
        <ContainerInputGroup>
          <Input
            type="text"
            tipo="dashboard"
            label="Bairro"
            placeholder="Digite o bairro"
            name="bairro"
            control={control}
            options={{
              delimiters: [''],
            }}
            errors={errors.bairro?.message}
          />
          <Input
            type="text"
            tipo="dashboard"
            label="Cidade"
            placeholder="Digite a cidade"
            name="cidade"
            control={control}
            options={{
              delimiters: [''],
            }}
            errors={errors.cidade?.message}
          />
        </ContainerInputGroup>
        <ContainerInputGroup>
          <Input
            type="text"
            tipo="dashboard"
            label="Estado"
            placeholder="Digite o estado"
            name="estado"
            control={control}
            options={{
              delimiters: [''],
            }}
            errors={errors.estado?.message}
          />
          <Input
            type="text"
            tipo="dashboard"
            label="País"
            placeholder="Digite o país"
            name="pais"
            control={control}
            options={{
              delimiters: [''],
            }}
            errors={errors.pais?.message}
          />
        </ContainerInputGroup>
        <ContainerSubmit>
          <Button tipo="primary">Próximo</Button>
        </ContainerSubmit>
      </Box>
    </Container>
  );
}
