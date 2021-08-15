import React, { useEffect } from 'react';

import { Container, Box, ContainerSubmit, ContainerInputGroup } from './style';

import Button from '../../../../components/Dashboard/Button';
import Input from '../../../../components/Input';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { SobreVoceValidation } from '../../../../validation/validations';

export default function Benenficios() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SobreVoceValidation),
  });

  useEffect(() => {
    if(localStorage.getItem("sobre-voce")) {
      const sobreVoce = JSON.parse(localStorage.getItem('sobre-voce'));

      reset(sobreVoce);
    }
  }, [])

  const onSubmit = async e => {
    localStorage.setItem("sobre-voce", JSON.stringify(e))
  }

  return (
    <Container>
      <Box onSubmit={handleSubmit(onSubmit)}>
        <ContainerInputGroup>
          <Input
            tipo="dashboard"
            textarea={true}
            rowstextarea={10}
            label="Sobre você"
            name="sobre_voce"
            control={control}
            placeholder="Conta pra gente um pouco mais sobre você!"
            errors={errors.sobre_voce?.message}
          />
          <Input
            tipo="dashboard"
            textarea={true}
            rowstextarea={10}
            label="Momento profissional"
            name="momento_profissional"
            control={control}
            placeholder="Conta pra gente qual o seu momento profissional!"
            errors={errors.momento_profissional?.message}
          />
        </ContainerInputGroup>
        <ContainerSubmit>
          <Button tipo="primary">Próximo</Button>
        </ContainerSubmit>
      </Box>
    </Container>
  );
}
