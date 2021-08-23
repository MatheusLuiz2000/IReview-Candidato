import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fefefe;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 100%;
  width: 212px;
  visibility: visible;
  text-align: center;
  padding: 16px;
  position: fixed;
  transition: left 0.3s ease;

  &.menu-close {
    width: 0px;
    visibility: hidden;
  }
`;

export const ContainerLista = styled.div`
  p {
    color: #0c1e5b;
    margin-bottom: 24px;
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
    color: #0c1e5b;
    margin-left: 15px;
  }
`;
