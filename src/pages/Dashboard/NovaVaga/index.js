import React, { useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import { Container } from './style';

import CriacaoVaga from '../../../components/Dashboard/CriacaoVaga';
import TimeLineVaga from '../../../components/Dashboard/TimeLineVaga';

// Tabs
import DadosGerais from './DadosGerais';
import Descricao from './Descricao';
import Regras from './Regras';
import Beneficios from './Beneficios';
import Provas from './Provas';
import Informacoes from './Informacoes';
import Cursos from './Cursos';
import InformacoesImportantes from './InformacoesImportantes';

export default function Cadastrar() {
  const [tabIndex, setTabIndex] = useState(1);

  const changeTab = number => {
    setTabIndex(number);
  };

  return (
    <CriacaoVaga active="vagas" titulo="Cadastrar dados">
      <Container>
        <TimeLineVaga changeTab={changeTab} selected={tabIndex - 1} />
        <Tabs selectedIndex={tabIndex - 1}>
          <TabPanel>
            <DadosGerais />
          </TabPanel>
          <TabPanel>
            <Beneficios />
          </TabPanel>
          <TabPanel>
            <Descricao />
          </TabPanel>
          <TabPanel>
            <Regras />
          </TabPanel>
          <TabPanel>
            <Provas />
          </TabPanel>
          <TabPanel>
            <Informacoes />
          </TabPanel>
          <TabPanel>
            <Cursos />
          </TabPanel>
          <TabPanel>
            <InformacoesImportantes />
          </TabPanel>
        </Tabs>
      </Container>
    </CriacaoVaga>
  );
}
