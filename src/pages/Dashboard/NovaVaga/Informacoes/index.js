import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Container, ContainerButtonSubmit, ContainerInputGroup } from './style';
import Input from '../../../../components/Input';

import Button from '../../../../components/Dashboard/Button';
import limpaObjeto from '../../../../util/limpaObjeto';

export default function Provas() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if(localStorage.getItem("regras-vagas")) {
      const dados = JSON.parse(localStorage.getItem("regras-vagas"));

      reset(dados);
    }

  }, []);

  const onSubmit = e => {
    localStorage.setItem("regras-vagas", JSON.stringify(limpaObjeto(e)));
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        tipo="dashboard"
        label="Idioma"
        placeholder="Digite o idioma"
        name="idioma"
        control={control}
        options={{
          delimiters: [''],
        }}
        errors={errors.idioma?.message}
      />
      <ContainerInputGroup>
        <Input
          type="text"
          tipo="dashboard"
          label="Nível de leitura"
          placeholder="Digite o nível de leitura"
          name="nivel_leitura"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.nivel_leitura?.message}
        />
        <Input
          type="text"
          tipo="dashboard"
          label="Nível de escrita"
          placeholder="Digite o nível de escrita"
          name="nivel_escrita"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.nivel_escrita?.message}
        />
      </ContainerInputGroup>
      <Input
        type="text"
        tipo="dashboard"
        label="Nível de conversação"
        placeholder="Digite o nível de conversação"
        name="nivel_conversacao"
        control={control}
        options={{
          delimiters: [''],
        }}
        errors={errors.nivel_conversacao?.message}
      />
      <ContainerButtonSubmit>
      <Button type="submit">Próximo</Button>
      </ContainerButtonSubmit>
    </Container>
  )
}
