import styled from 'styled-components';

export const ContainerDashboard = styled.div`
  font-family: 'Poppins', 'Roboto', sans-serif !important;
  height: 100%;
`;

export const Container = styled.div`
  padding: 0px 20px;
  margin-left: 212px;
  height: 100%;

  &.menu-active {
    margin-left: 0px;
  }

  .flex-center.title {
    justify-content: space-between;
  }

  h1 {
    color: #0f3f62;
    font-weight: 500;
    font-size: 30px;
    margin: 35px 0px 45px 0px;
  }
`;

export const ContainerContent = styled.div`
  height: calc(100% - 220px);
`;
