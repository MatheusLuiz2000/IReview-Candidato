import React from 'react';

import { Link } from 'react-router-dom';
import { Container, ContainerLista, ContainerSair } from './style';

import Logo from '../../../assets/images/logo_dashboard.svg';
import Candidatura from '../../../assets/images/candidatura.png';
import Chat from '../../../assets/images/chat.png';
import Curriculo from '../../../assets/images/curriculo.png';
import Vagas from '../../../assets/images/vagas.png';
import Dashboard from '../../../assets/images/dashboard.png';

// Icons
import { IconSair } from '../../Icons';

export default function LeftMenu() {
  return (
    <Container id="menu">
      <img src={Logo} alt="Logo" />
      <ContainerLista>
        <Link to="/dashboard">
          <img src={Dashboard} alt="Dashboard" width="40px" />
          <p>Dashboard</p>
        </Link>
        <Link to="/dashboard/vagas">
          <img src={Vagas} alt="Vagas" width="40px" />
          <p>Vagas</p>
        </Link>
        <Link to="/dashboard/candidaturas">
          <img src={Candidatura} alt="Candidatura" width="40px" />
          <p>Candidaturas</p>
        </Link>
        <Link to="/dashboard/mensagens">
          <img src={Chat} alt="Chat" width="40px" />
          <p>Chat</p>
        </Link>
        <Link to="/cadastrar">
          <img src={Curriculo} alt="Curriculo" width="40px" />
          <p>Cúrriculo</p>
        </Link>
      </ContainerLista>
      <ContainerSair>
        <button
          className="no-style"
          type="button"
          onClick={() => {
            localStorage.removeItem('dadosEmpresa');
            window.location.href = '/login';
          }}
        >
          <IconSair />
          <p>Sair</p>
        </button>
      </ContainerSair>
    </Container>
  );
}
