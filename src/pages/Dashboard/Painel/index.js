import React from 'react';
import { Link } from 'react-router-dom';
import {
  ContainerVagas,
  BoxConteudo,
  ContainerDashboard,
  ContainerMensagens,
  ContainerCalendario,
  ContainerUltimasMensagens,
  Mensagem,
} from './style';

// Components
import Content from '../../../components/Dashboard/Content';
import ButtonSmall from '../../../components/Dashboard/ButtonSmall';

// Icons
import IconCalendar from '../../../assets/icons/calendar.svg';
import Avatar2 from '../../../assets/images/avatar2.svg';

export default function Painel() {
  return (
    <Content active="dashboard" titulo="Dashboard">
      <ContainerDashboard>
        <div>
          <ContainerVagas>
            <h4>Últimas Vagas lançadas</h4>
            <BoxConteudo>
              <div className="avatar-nome">
                <img src={Avatar2} alt="Avatar" />
                <div className="nome-data">
                  <h5>Vaga de Desenvolvedor</h5>
                  <p>15 Março, 2021</p>
                </div>
              </div>
              <p>Segunda, 15 de março de 2021</p>
              <p>Desenvolver Full Stack</p>
              <Link to="/dashboard/candidatos/x">VER</Link>
            </BoxConteudo>
            <BoxConteudo>
              <div className="avatar-nome">
                <img src={Avatar2} alt="Avatar" />
                <div className="nome-data">
                  <h5>Vaga de Desenvolvedor</h5>
                  <p>15 Março, 2021</p>
                </div>
              </div>
              <p>Segunda, 15 de março de 2021</p>
              <p>Desenvolver Full Stack</p>
              <Link to="/dashboard/candidatos/x">VER</Link>
            </BoxConteudo>
            <BoxConteudo>
              <div className="avatar-nome">
                <img src={Avatar2} alt="Avatar" />
                <div className="nome-data">
                  <h5>Vaga de Desenvolvedor</h5>
                  <p>15 Março, 2021</p>
                </div>
              </div>
              <p>Segunda, 15 de março de 2021</p>
              <p>Desenvolver Full Stack</p>
              <Link to="/dashboard/candidatos/x">VER</Link>
            </BoxConteudo>
          </ContainerVagas>
          <ContainerVagas>
            <h4>Candidaturas recentes</h4>
            <BoxConteudo>
              <div className="avatar-nome">
                <img src={Avatar2} alt="Avatar" />
                <div className="nome-data">
                  <h5>Vaga de Desenvolvedor</h5>
                  <p>10 Março, 2021</p>
                </div>
              </div>
              <p>Segunda, 10 de março de 2021</p>
              <p>Desenvolver Full Stack</p>
            </BoxConteudo>
          </ContainerVagas>
        </div>
        <ContainerMensagens>
          <ContainerCalendario>
            <div>
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>20/05/1999 00:00:00</p>
            </div>
            <div>
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>20/05/1999 00:00:00</p>
            </div>
          </ContainerCalendario>
          <ContainerUltimasMensagens>
            <h2>Últimas Mensagens</h2>
            <Mensagem className="first">
              <div className="avatar-mensagem">
                <img src={Avatar2} alt="Avatar 2" />
                <p>
                  Olá, tudo bem? Vi sobre o processo seletivo. Vamos conversar?
                </p>
              </div>
              <ButtonSmall tipo="primary">VER</ButtonSmall>
            </Mensagem>
            <Mensagem>
              <div className="avatar-mensagem">
                <img src={Avatar2} alt="Avatar 2" />
                <p>
                  Olá, tudo bem? Vi sobre o processo seletivo. Vamos conversar?
                </p>
              </div>
              <ButtonSmall tipo="primary">VER</ButtonSmall>
            </Mensagem>
            <Mensagem>
              <div className="avatar-mensagem">
                <img src={Avatar2} alt="Avatar 2" />
                <p>
                  Olá, tudo bem? Vi sobre o processo seletivo. Vamos conversar?
                </p>
              </div>
              <ButtonSmall tipo="primary">VER</ButtonSmall>
            </Mensagem>
          </ContainerUltimasMensagens>
        </ContainerMensagens>
      </ContainerDashboard>
    </Content>
  );
}
