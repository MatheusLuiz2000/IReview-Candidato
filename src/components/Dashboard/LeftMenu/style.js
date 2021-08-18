import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fefefe;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 100%;
  width: 250px;
  visibility: visible;
  text-align: center;
  padding: 7px 25px 15px 30px;
  position: fixed;
  transition: left 0.3s ease;

  &.menu-close {
    width: 0px;
    visibility: hidden;
  }
`;

export const ContainerLista = styled.div`
  margin-top: 30px;

  li {
    display: flex;
    align-items: center;
    padding: 15px;
    color: #79869f;

    svg {
      margin-right: 10px;
    }

    &.active {
      background-color: #0c1e5b;
      border-radius: 6px;
      color: #ffff;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      margin-bottom: 10px;

      svg,
      g,
      path {
        stroke: #ffff;
      }
    }
  }
`;

export const ContainerSair = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 30px;
  padding-bottom: 20px;

  p {
    color: #79869f;
    margin-left: 15px;
  }
`;
