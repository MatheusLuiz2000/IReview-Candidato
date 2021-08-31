import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  Container,
  ContainerButtonSubmit,
  ContainerInputGroup,
  LastBox,
} from './style';

import Button from '../../../../components/Dashboard/Button';
import Select from '../../../../components/Select';
import limpaObjeto from '../../../../util/limpaObjeto';

export default function InformacoesImportantes() {
  const { handleSubmit, control, reset } = useForm();

  useEffect(() => {
    if(localStorage.getItem("infos-importantes")) {
      const dados = JSON.parse(localStorage.getItem("infos-importantes"));

      reset(dados);
    }

  }, []);

  const onSubmit = e => {
    console.log('event', e);
    localStorage.setItem("infos-importantes", JSON.stringify(limpaObjeto(e)));
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <ContainerInputGroup>
        <Select
          type="text"
          tipo="dashboard"
          label="Início imediato?"
          placeholder="Escolha uma opção"
          name="inicio_imediato"
          control={control}
          options={[
            {
              value: 'sim',
              label: 'Sim',
            },
            {
              value: 'nao',
              label: 'Não',
            }
          ]}
        />
        <Select
          type="text"
          tipo="dashboard"
          label="Aceita viajar com a empresa?"
          placeholder="Escolha uma opção"
          name="viajar_empresa"
          control={control}
          options={[
            {
              value: 'aceito',
              label: 'Aceito',
            },
            {
              value: 'nao_aceito',
              label: 'Não aceito',
            }
          ]}
        />
      </ContainerInputGroup>
      <ContainerInputGroup>
        <Select
          type="text"
          tipo="dashboard"
          label="Aceita mudança de endereço?"
          placeholder="Escolha uma opção"
          name="mudar_endereco"
          control={control}
          options={[
            {
              value: 'aceito',
              label: 'Aceito',
            },
            {
              value: 'nao_aceito',
              label: 'Não aceito',
            }
          ]}
        />
        <Select
          type="text"
          tipo="dashboard"
          label="Possui CNPJ Aberto?"
          placeholder="Escolha uma opção"
          name="cnpj_aberto"
          control={control}
          options={[
            {
              value: 'sim',
              label: 'Sim',
            },
            {
              value: 'nao',
              label: 'Não',
            }
          ]}
        />
      </ContainerInputGroup>
      <LastBox>
        <Select
          type="text"
          tipo="dashboard"
          label="Possui filhos?"
          placeholder="Escolha uma opção"
          name="cnpj_aberto"
          control={control}
          options={[
            {
              value: 'tenho_filhos',
              label: 'Sim, possuo filhos',
            },
            {
              value: 'nao_tenho_filhos',
              label: 'Não possuo filhos',
            }
          ]}
        />
      </LastBox>
      <ContainerButtonSubmit>
        <Button
          onClick={() => {
            // aqui vai a request
            window.location.href = '/dashboard/vagas';
          }}
          type="submit">Finalizar</Button>
      </ContainerButtonSubmit>
    </Container>
  );
}
