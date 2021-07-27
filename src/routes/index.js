import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// Assinatura
import DadosCadastrais from '../pages/Assinatura/DadosCadastrais';
import FormasPagamento from '../pages/Assinatura/FormasPagamento';
import Pagamento from '../pages/Assinatura/Pagamento';
import FinalizaOperacao from '../pages/Assinatura/FinalizaOperacao';

// Dashboard
import DashboardPainel from '../pages/Dashboard/Painel';
import Vagas from '../pages/Dashboard/Vagas';
import NovaVaga from '../pages/Dashboard/NovaVaga';
import VagaID from '../pages/Dashboard/VagaID';
import Candidatos from '../pages/Dashboard/Candidatos';
import Mensagens from '../pages/Dashboard/Mensagens';
import Configuracoes from '../pages/Dashboard/Configuracoes';

// Login
import Login from '../pages/Login';
import EsqueceuSenha from '../pages/EsqueceuSenha';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/esqueceu-senha" exact component={EsqueceuSenha} />

      <Route
        path="/assinatura/dados-cadastrais"
        exact
        component={DadosCadastrais}
      />
      <Route
        path="/assinatura/formas-pagamento"
        exact
        component={FormasPagamento}
      />
      <Route path="/assinatura/pagamento" exact component={Pagamento} />
      <Route
        path="/assinatura/finaliza-operacao"
        exact
        component={FinalizaOperacao}
      />
      <Route path="/dashboard" exact isPrivate component={DashboardPainel} />
      <Route path="/dashboard/vagas" isPrivate exact component={Vagas} />
      <Route
        path="/dashboard/vagas/nova"
        isPrivate
        exact
        component={NovaVaga}
      />
      <Route path="/dashboard/vagas/:id" isPrivate exact component={VagaID} />
      <Route
        path="/dashboard/candidatos"
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
