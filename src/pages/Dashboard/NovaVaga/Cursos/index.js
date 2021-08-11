import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Container, ContainerButtonSubmit, ContainerInputGroup } from './style';
import Input from '../../../../components/Input';

import Button from '../../../../components/Dashboard/Button';
import limpaObjeto from '../../../../util/limpaObjeto';

export default function Cursos() {
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
        label="Nome do curso"
        placeholder="Digite o nome do curso"
        name="nome_curso"
        control={control}
        options={{
          delimiters: [''],
        }}
        errors={errors.nome_curso?.message}
      />
      <ContainerInputGroup>
        <Input
          type="text"
          tipo="dashboard"
          label="Área do curso"
          placeholder="Digite a área do curso"
          name="area_curso"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.area_curso ?.message}
        />
        <Input
          type="text"
          tipo="dashboard"
          label="Nome da instituição do curso"
          placeholder="Digite o nome da instituição do curso"
          name="nome_instituicao_curso"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.nome_instituicao_curso?.message}
        />
      </ContainerInputGroup>
      <ContainerInputGroup>
        <Input
          tipo="dashboard"
          label="Data de início"
          name="data_inicio"
          control={control}
          type="date"
          placeholder="Escolha a data de início"
          errors={errors.data_inicio?.message}
        />
        <Input
          tipo="dashboard"
          label="Data de término"
          name="data_fim"
          control={control}
          type="date"
          placeholder="Escolha a data de término"
          errors={errors.data_fim?.message}
        />
      </ContainerInputGroup>
      <ContainerInputGroup>
        <Input
          type="text"
          tipo="dashboard"
          rowstextarea={8}
          label="Descrição do curso"
          placeholder="Digite a descrição do curso"
          name="descricao_curso"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.descricao_curso?.message}
        />
        <Input
          type="text"
          tipo="dashboard"
          rowstextarea={8}
          label="Habilidade desenvolvidas do curso"
          placeholder="Digite as habilidades desenvolvidas do curso"
          name="habilidades_curso"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.habilidades_curso?.message}
        />
      </ContainerInputGroup>
      <ContainerButtonSubmit>
      <Button type="submit">Próximo</Button>
      </ContainerButtonSubmit>
    </Container>
  )
}
