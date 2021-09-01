import React, { useState, useEffect } from 'react';

import {
  Container,
  ListaMensagens,
  PreviaMensagem,
  Circle,
  Conversas,
  MensagemEnviada,
  MensagemRecebida,
  ContainerEnviaMensagem,
  Box,
  BoxLeft,
  BoxRight,
  BoxChat,
  BoxPrincipal,
  Name,
  Message,
  BoxNotification,
  Notification,
} from './style';

// Components
import Content from '../../../components/Dashboard/Content';
import ButtonSmall from '../../../components/Dashboard/ButtonSmall';
import Button from '../../../components/Dashboard/Button';

// Icons
import IconPlus from '../../../assets/icons/plus.svg';
import IconAnexo from '../../../assets/icons/anexo.svg';
import IconEmoji from '../../../assets/icons/plus.svg';

// Images
import Avatar1 from '../../../assets/images/avatar2.svg';
import IconUsuario from '../../../assets/icons/user1.svg';
import Candidato1 from '../../../assets/images/candidato1.jpg';

import { buscarConversas } from '../../../services/api';

export default function Mensagens() {
  const [previaMensagem, setPreviaMensagem] = useState([]);

  // async function buscarMensagens() {
  //   const buscar = await buscarConversas();

  //   return setPreviaMensagem(buscar.data);
  // }

  // useEffect(() => {
  //   buscarMensagens();
  // }, []);

  return (
    <Content active="mensagens" titulo="Mensagens">
      {/* <ListaMensagens>
        <div className="chat-title">
          <h2>Chat</h2>
        </div>
        {previaMensagem.length <= 0 ? <h5>Ainda não possui mensagens</h5> : ''}
      </ListaMensagens> */}
      <Box>
        <BoxLeft>
          <div className="chat-title">
            <h2>Chat</h2>
          </div>
          <BoxChat>
            <img src={Avatar1} alt="avatar" style={{ marginRight: '8px', width: "40px" }} />
            <BoxPrincipal>
              <Name>Matheus Luiz Matos Lopes</Name>
              <Message>Olá! Tudo bem? Meu nome é Matheus Luiz Matos Lopes..</Message>
            </BoxPrincipal>
            <BoxNotification>
              <Message>5min</Message>
              <Notification>2</Notification>
            </BoxNotification>
          </BoxChat>
          <BoxChat>
            <img src={IconUsuario} alt="avatar" style={{ marginRight: '8px', width: "40px" }} />
            <BoxPrincipal>
              <Name>Aline Bujato</Name>
              <Message>Boa tarde! Tudo bom? Meu nome é Aline Bujato..</Message>
            </BoxPrincipal>
            <BoxNotification>
              <Message>7min</Message>
              <Notification>5</Notification>
            </BoxNotification>
          </BoxChat>
          <BoxChat>
            <img src={Avatar1} alt="avatar" style={{ marginRight: '8px', width: "40px" }} />
            <BoxPrincipal>
              <Name>Lucas Maropo</Name>
              <Message>Olá! Tudo bem? Meu nome é Lucas Maropo..</Message>
            </BoxPrincipal>
            <BoxNotification>
              <Message>20min</Message>
              <Notification>3</Notification>
            </BoxNotification>
          </BoxChat>
          <BoxChat>
            <img src={IconUsuario} alt="avatar" style={{ marginRight: '8px', width: "40px" }} />
            <BoxPrincipal>
              <Name>Stefanie Cruz</Name>
              <Message>Boa tarde! Tudo bom? Meu nome é Stefanie Cruz..</Message>
            </BoxPrincipal>
            <BoxNotification>
              <Message>40min</Message>
              <Notification>8</Notification>
            </BoxNotification>
          </BoxChat>
        </BoxLeft>
        <BoxRight>
          <h2>Matheus Luiz - Desenvolvedor Full Stack</h2>
          <MensagemEnviada>
            <div>Olá, tudo bem?</div>
            <img src={Candidato1} alt="Candidato1" />
          </MensagemEnviada>
          <MensagemEnviada>
            <div>Vi seu perfil aqui e gostei bastante, vamos conversar?</div>
            <img src={Candidato1} alt="Candidato1" />
          </MensagemEnviada>
          <MensagemRecebida>
            <img src={Candidato1} alt="Candidato1" />
            <div>Olá, tudo certinho e com você?</div>
          </MensagemRecebida>
          <MensagemRecebida>
            <img src={Candidato1} alt="Candidato1" />
            <div>Claro! Vamos marcar uma call as 09:30 no dia 30/11/2021</div>
          </MensagemRecebida>
          <MensagemRecebida>
            <img src={Candidato1} alt="Candidato1" />
            <div>Combinado?</div>
          </MensagemRecebida>
          <MensagemEnviada>
            <div>Combinado</div>
            <img src={Candidato1} alt="Candidato1" />
          </MensagemEnviada>
          <ContainerEnviaMensagem>
            <img src={IconAnexo} alt="Icon - Anexo" />
            <input type="text" placeholder="Envie sua mensagem aqui" />
            <button type="button" className="button-no-style">
              <img src={IconEmoji} alt="Icon - Emoji" />
            </button>
            <Button type="button" tipo="secondary">
              ENVIAR
            </Button>
          </ContainerEnviaMensagem>
        </BoxRight>
      </Box>
    </Content>
  );
}
