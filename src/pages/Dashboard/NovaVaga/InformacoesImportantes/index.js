import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  Container,
  ContainerButtonSubmit,
  ContainerInputGroup,
  Label,
  LastBox,
  Select,
} from './style';

import Button from '../../../../components/Dashboard/Button';
import limpaObjeto from '../../../../util/limpaObjeto';

export default function InformacoesImportantes() {
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
      <ContainerInputGroup>
        <div>
          <Label>Início imediato?</Label>
          <Select name="inicio_imediato">
            <option value="sim" selected>
              Sim
            </option>
            <option value="nao">Não</option>
          </Select>
        </div>
        <div>
          <Label>Aceita viajar com a empresa?</Label>
          <Select name="viajar_empresa">
            <option value="aceito" selected>
              Aceito
            </option>
            <option value="nao_aceito">Não aceito</option>
          </Select>
        </div>
      </ContainerInputGroup>
      <ContainerInputGroup>
        <div>
          <Label>Aceita mudança de endereço?</Label>
          <Select name="mudar_endereco">
            <option value="aceito_mudar" selected>
              Aceito
            </option>
            <option value="nao_aceito_mudar">Não aceito</option>
          </Select>
        </div>
        <div>
          <Label>Possui CNPJ Aberto?</Label>
          <Select name="cnpj_aberto">
            <option value="tenho_cnpj_aberto" selected>
              Sim
            </option>
            <option value="nao_tenho_cnpj_aberto">Não</option>
          </Select>
        </div>
      </ContainerInputGroup>
      <LastBox>
        <Label>Possui filhos?</Label>
        <Select name="possui_filhos">
          <option value="tenho_filhos" selected>
            Sim, possuo filhos
          </option>
          <option value="nao_tenho_filhos">Não possuo filhos</option>
        </Select>
      </LastBox>
      <ContainerButtonSubmit>
        <Button type="submit">Finalizar</Button>
      </ContainerButtonSubmit>
    </Container>
  );
}
