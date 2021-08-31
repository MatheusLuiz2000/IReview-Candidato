import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// Dashboard
import DashboardPainel from '../pages/Dashboard/Painel';
import Vagas from '../pages/Dashboard/Vagas';
import NovaVaga from '../pages/Dashboard/NovaVaga';
import VagaID from '../pages/Dashboard/VagaID';
import Candidatos from '../pages/Dashboard/Candidatos';
import Mensagens from '../pages/Dashboard/Mensagens';
import Configuracoes from '../pages/Dashboard/Configuracoes';
import AnexarCurriculo from '../pages/Dashboard/AnexarCurriculo';

// Login
import Login from '../pages/Login';
import EsqueceuSenha from '../pages/EsqueceuSenha';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/esqueceu-senha" exact component={EsqueceuSenha} />

      <Route path="/dashboard" exact isPrivate component={DashboardPainel} />
      <Route path="/dashboard/vagas" isPrivate exact component={Vagas} />
      <Route path="/anexar-curriculo" exact component={AnexarCurriculo} />
      <Route path="/cadastrar" exact component={NovaVaga} />
      <Route path="/dashboard/vagas/:id" isPrivate exact component={VagaID} />
      <Route
        path="/dashboard/candidaturas"
        isPrivate
        exact
        component={Candidatos}
      />
      <Route
        path="/dashboard/mensagens"
        isPrivate
        exact
        component={Mensagens}
      />
      <Route
        path="/dashboard/configuracoes"
        isPrivate
        exact
        component={Configuracoes}
      />
    </Switch>
  );
}
