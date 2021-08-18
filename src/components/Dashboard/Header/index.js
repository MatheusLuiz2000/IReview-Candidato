import React, { useState } from 'react';

import { Container, ContainerUsuario } from './style';

// Icons
import IconMenu from '../../../assets/icons/menu.svg';
import IconUsuario from '../../../assets/icons/user1.svg';
import IconArrowDown from '../../../assets/icons/arrow_down.svg';
import IconNotification from '../../../assets/icons/notification.svg';

export default function Header() {
  const [open, setOpen] = useState(true);
  return (
    <Container>
      <button
        type="button"
        className="button-no-style"
        onClick={() => {
          if (open) {
            document.getElementById('menu').classList.add('menu-close');
            document.getElementById('content').classList.add('menu-active');
            setOpen(false);
          } else {
            document.getElementById('menu').classList.remove('menu-close');
            document.getElementById('content').classList.remove('menu-active');
            setOpen(true);
          }
        }}
      >
        <img src={IconMenu} alt="Icon - Menu" />
      </button>
      <ContainerUsuario>
        <img src={IconNotification} alt="Icon - Notification" />
        <img src={IconUsuario} alt="Icon - Usuario" className="avatar" />
        <div className="dados-usuario">
          <h2>Matheus Luiz</h2>
          <p>Desenvolvedor front end</p>
        </div>
        <img src={IconArrowDown} alt="Icon - Arrow Down" />
      </ContainerUsuario>
    </Container>
  );
}
