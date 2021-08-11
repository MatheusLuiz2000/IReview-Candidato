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
        label="Nome da empresa em que trabalhou"
        placeholder="Digite o nome da empresa em que trabalhou"
        name="empresa_trabalhou"
        control={control}
        options={{
          delimiters: [''],
        }}
        errors={errors.empresa_trabalhou?.message}
      />
      <ContainerInputGroup>
        <Input
          type="text"
          tipo="dashboard"
          label="Salário em média"
          placeholder="Digite o salário em média"
          name="media_salario"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.media_salario?.message}
        />
        <Input
          type="text"
          tipo="dashboard"
          label="Área em que atuou"
          placeholder="Digite a área em que atuou"
          name="area_atuada"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.area_atuada?.message}
        />
      </ContainerInputGroup>
      <ContainerInputGroup>
        <Input
          type="text"
          tipo="dashboard"
          label="Tipo do contrato"
          placeholder="Digite o tipo do contrato acordado"
          name="tipo_contrato"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.tipo_contrato?.message}
        />
        <Input
          type="text"
          tipo="dashboard"
          label="Cargo"
          placeholder="Digite o cargo exercido"
          name="cargo_exercido"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.cargo_exercido?.message}
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
          label="Descrição das demandas realizadas"
          placeholder="Digite a descrição das demandas realizadas"
          name="descricao_demandas"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.descricao_demandas?.message}
        />
        <Input
          type="text"
          tipo="dashboard"
          rowstextarea={8}
          label="Habilidade exercidas"
          placeholder="Digite as habilidades exercidas"
          name="habilidades_exercidas"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.habilidades_exercidas?.message}
        />
      </ContainerInputGroup>
      <ContainerButtonSubmit>
      <Button type="submit">Próximo</Button>
      </ContainerButtonSubmit>
    </Container>
  )
}
