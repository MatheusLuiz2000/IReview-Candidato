import React, { useEffect } from 'react';

import { ContainerInputGroup, ContainerButtonSubmit } from './style';

import Button from '../../../../components/Dashboard/Button';
import Input from '../../../../components/Input';
import { useForm } from 'react-hook-form';

import limpaObjeto from '../../../../util/limpaObjeto';

export default function Regras() {
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

  }, [])
  const onSubmit = e => {
    localStorage.setItem("regras-vagas", JSON.stringify(limpaObjeto(e)));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ContainerInputGroup>
        <Input
          type="text"
          tipo="dashboard"
          label="Nome da formação"
          placeholder="Digite o nome da formação"
          name="formacao"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.formacao?.message}
        />
        <Input
          type="text"
          tipo="dashboard"
          label="Nome da instituição da formação"
          placeholder="Digite o nome da instituição da formação"
          name="institucao"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.institucao?.message}
        />
      </ContainerInputGroup>
      <ContainerInputGroup>
        <Input
          type="text"
          tipo="dashboard"
          label="Área da formação"
          placeholder="Digite a área da formação"
          name="area_formacao"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.area_formacao?.message}
        />
        <Input
          type="text"
          tipo="dashboard"
          label="Tipo da formação"
          placeholder="Digite o tipo da formação"
          name="tipo_formacao"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.tipo_formacao?.message}
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
          label="Descrição da formação"
          placeholder="Digite a descrição da formação"
          name="descricao_formacao"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.descricao_formacao?.message}
        />
        <Input
          type="text"
          tipo="dashboard"
          rowstextarea={8}
          label="Habilidade desenvolvidas na formação"
          placeholder="Digite as habilidades desenvolvidas na formação"
          name="habilidades_formacao"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.habilidades_formacao?.message}
        />
      </ContainerInputGroup>
      <ContainerButtonSubmit>
      <Button type="submit">Próximo</Button>
      </ContainerButtonSubmit>
    </form>
  );
}
