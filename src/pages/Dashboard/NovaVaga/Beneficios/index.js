import React, { useState, useEffect } from 'react';

import { Container, Box, ContainerSubmit, ContainerInputGroup } from './style';

import Button from '../../../../components/Dashboard/Button';
import Input from '../../../../components/Input';

import { useForm } from 'react-hook-form';

export default function Benenficios() {
  const [beneficios, setbeneficios] = useState([]);

  useEffect(() => {
    let beneficiosStorage = localStorage.getItem('beneficios-vagas');

    if (!beneficiosStorage) return;

    beneficiosStorage = JSON.parse(beneficiosStorage);

    console.log(beneficiosStorage);
    setbeneficios(beneficiosStorage);
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = e => {
    console.log(e);
    const novo = beneficios;
    novo.push(e);
    localStorage.setItem('beneficios-vagas', JSON.stringify(novo));
    setbeneficios(novo);
  };

  const remove = item => {
    console.log('aqui');
    const novo = beneficios;

    for (var i = 0; i < novo.length; i++) {
      if (novo[i] === item) {
        novo.splice(i, 1);
      }
    }

    localStorage.setItem('beneficios-vagas', JSON.stringify(novo));
    console.log("novo1", novo);
    setbeneficios([...novo]);
  };

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
            placeholder="Conta pra gente qual o seu momento profissional. Fica a vontade!"
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
