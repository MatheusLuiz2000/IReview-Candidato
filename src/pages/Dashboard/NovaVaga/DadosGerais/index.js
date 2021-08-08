import React, { useState, useEffect } from 'react';

import { Form, ContainerInputGroup, ContainerSubmit } from './style';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../../../../components/Dashboard/Button';

import Input from '../../../../components/Input';

import { DadosGeraisVagaValidation } from '../../../../validation/validations';

export default function DadosGerais() {
  const [areas, setAreas] = useState('');

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(DadosGeraisVagaValidation),
  });

  useEffect(() => {
    setAreas([
      {
        value: 1,
        label: 'Area1',
      },

      {
        value: 2,
        label: 'Area2',
      },
      {
        value: 3,
        label: 'Area3',
      },
      {
        value: 4,
        label: 'Area4',
      },
      {
        value: 5,
        label: 'Area5',
      },
    ]);
  }, []);

  useEffect(() => {
    if(localStorage.getItem("dados-gerais")) {
      const dadosGerais = JSON.parse(localStorage.getItem('dados-gerais'));

      reset(dadosGerais);
    }
  }, [])


  const onSubmit = async e => {
    localStorage.setItem("dados-gerais", JSON.stringify(e))
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ContainerInputGroup>
          <Input
            type="text"
            tipo="dashboard"
            label="Nome"
            placeholder="Digite o seu nome"
            name="nome"
            control={control}
            options={{
              delimiters: [''],
            }}
            errors={errors.nome?.message}
          />
          <Input
            type="text"
            tipo="dashboard"
            label="Sobrenome"
            placeholder="Digite o seu sobrenome"
            name="sobrenome"
            control={control}
            options={{
              delimiters: [''],
            }}
            errors={errors.sobrenome?.message}
          />
        </ContainerInputGroup>
        <ContainerInputGroup>
          <Input
            type="text"
            tipo="dashboard"
            label="Documento (CPF)"
            placeholder="Digite o seu CPF"
            name="documento"
            control={control}
            options={{
              numericOnly: true,
            }}
            errors={errors.documento?.message}
          />
          <Input
            tipo="dashboard"
            label="Data de nascimento"
            name="data_nascimento"
            control={control}
            type="date"
            placeholder="Escolha a data"
            errors={errors.data_nascimento?.message}
          />
        </ContainerInputGroup>
        <ContainerInputGroup>
          <Input
            type="text"
            tipo="dashboard"
            label="Email"
            placeholder="Digite o seu email"
            name="email"
            control={control}
            options={{
              numericOnly: true,
            }}
            errors={errors.email?.message}
          />
          <Input
            type="text"
            tipo="dashboard"
            label="Telefone"
            name="telefone"
            control={control}
            placeholder="Digite o seu telefone"
            errors={errors.telefone?.message}
          />
        </ContainerInputGroup>
        <ContainerSubmit>
          <Button tipo="primary">Próximo</Button>
        </ContainerSubmit>
      </Form>
    </>
  );
}
