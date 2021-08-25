import React from 'react';
import { Link } from 'react-router-dom';
import Content from '../../../components/Dashboard/Content';
import Button from '../../../components/Dashboard/Button';

import { Container, Vaga } from './style';

// Images
import ImageVaga from '../../../assets/images/image_vaga_1.jpg';
import IconOptions from '../../../assets/icons/options.svg';
import IconCalendar from '../../../assets/icons/calendar.svg';
import IconArea from '../../../assets/icons/area.svg';

export default function Vagas() {
  return (
    <Content
      titulo="Vagas"
      active="vagas"
    >
      <Container>
        <Vaga>
          <img src={ImageVaga} alt="Img - Vaga" className="header-image" />
          <div className="options">
            <img src={IconOptions} alt="Icon - Options" />
          </div>
          <div className="content">
            <h2>Desenvolvedor Full Stack</h2>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Criado em:</b>20/05/1999
              </p>
            </div>
            <div className="icon-text">
              <img src={IconArea} alt="Icon - Area" />
              <p>
                <b>Área:</b>Tecnologia e serviços de informática
              </p>
            </div>
          </div>
          <Link to="/dashboard/vagas/2">
            <Button tipo="primary">VER MAIS DETALHES DA VAGA</Button>
          </Link>
        </Vaga>
        <Vaga>
          <img src={ImageVaga} alt="Img - Vaga" className="header-image" />
          <div className="options">
            <img src={IconOptions} alt="Icon - Options" />
          </div>
          <div className="content">
            <h2>Desenvolvedor Full Stack</h2>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Criado em:</b>20/05/1999
              </p>
            </div>
            <div className="icon-text">
              <img src={IconArea} alt="Icon - Area" />
              <p>
                <b>Área:</b>Tecnologia e serviços de informática
              </p>
            </div>
          </div>
          <Link to="/dashboard/vagas/2">
            <Button tipo="primary">VER MAIS DETALHES DA VAGA</Button>
          </Link>
        </Vaga>
        <Vaga>
          <img src={ImageVaga} alt="Img - Vaga" className="header-image" />
          <div className="options">
            <img src={IconOptions} alt="Icon - Options" />
          </div>
          <div className="content">
            <h2>Desenvolvedor Full Stack</h2>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Criado em:</b>20/05/1999
              </p>
            </div>
            <div className="icon-text">
              <img src={IconArea} alt="Icon - Area" />
              <p>
                <b>Área:</b>Tecnologia e serviços de informática
              </p>
            </div>
          </div>
          <Link to="/dashboard/vagas/2">
            <Button tipo="primary">VER MAIS DETALHES DA VAGA</Button>
          </Link>
        </Vaga>
        <Vaga>
          <img src={ImageVaga} alt="Img - Vaga" className="header-image" />
          <div className="options">
            <img src={IconOptions} alt="Icon - Options" />
          </div>
          <div className="content">
            <h2>Desenvolvedor Full Stack</h2>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Criado em:</b>20/05/1999
              </p>
            </div>
            <div className="icon-text">
              <img src={IconArea} alt="Icon - Area" />
              <p>
                <b>Área:</b>Tecnologia e serviços de informática
              </p>
            </div>
          </div>
          <Link to="/dashboard/vagas/2">
            <Button tipo="primary">VER MAIS DETALHES DA VAGA</Button>
          </Link>
        </Vaga>
        <Vaga>
          <img src={ImageVaga} alt="Img - Vaga" className="header-image" />
          <div className="options">
            <img src={IconOptions} alt="Icon - Options" />
          </div>
          <div className="content">
            <h2>Desenvolvedor Full Stack</h2>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Criado em:</b>20/05/1999
              </p>
            </div>
            <div className="icon-text">
              <img src={IconArea} alt="Icon - Area" />
              <p>
                <b>Área:</b>Tecnologia e serviços de informática
              </p>
            </div>
          </div>
          <Link to="/dashboard/vagas/2">
            <Button tipo="primary">VER MAIS DETALHES DA VAGA</Button>
          </Link>
        </Vaga>
        <Vaga>
          <img src={ImageVaga} alt="Img - Vaga" className="header-image" />
          <div className="options">
            <img src={IconOptions} alt="Icon - Options" />
          </div>
          <div className="content">
            <h2>Desenvolvedor Full Stack</h2>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Criado em:</b>20/05/1999
              </p>
            </div>
            <div className="icon-text">
              <img src={IconArea} alt="Icon - Area" />
              <p>
                <b>Área:</b>Tecnologia e serviços de informática
              </p>
            </div>
          </div>
          <Link to="/dashboard/vagas/2">
            <Button tipo="primary">VER MAIS DETALHES DA VAGA</Button>
          </Link>
        </Vaga>
        <Vaga>
          <img src={ImageVaga} alt="Img - Vaga" className="header-image" />
          <div className="options">
            <img src={IconOptions} alt="Icon - Options" />
          </div>
          <div className="content">
            <h2>Desenvolvedor Full Stack</h2>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Criado em:</b>20/05/1999
              </p>
            </div>
            <div className="icon-text">
              <img src={IconArea} alt="Icon - Area" />
              <p>
                <b>Área:</b>Tecnologia e serviços de informática
              </p>
            </div>
          </div>
          <Link to="/dashboard/vagas/2">
            <Button tipo="primary">VER MAIS DETALHES DA VAGA</Button>
          </Link>
        </Vaga>
        <Vaga>
          <img src={ImageVaga} alt="Img - Vaga" className="header-image" />
          <div className="options">
            <img src={IconOptions} alt="Icon - Options" />
          </div>
          <div className="content">
            <h2>Desenvolvedor Full Stack</h2>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Criado em:</b>20/05/1999
              </p>
            </div>
            <div className="icon-text">
              <img src={IconArea} alt="Icon - Area" />
              <p>
                <b>Área:</b>Tecnologia e serviços de informática
              </p>
            </div>
          </div>
          <Link to="/dashboard/vagas/2">
            <Button tipo="primary">VER MAIS DETALHES DA VAGA</Button>
          </Link>
        </Vaga>
      </Container>
    </Content>
  );
}
