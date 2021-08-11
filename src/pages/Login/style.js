import styled from 'styled-components';

import backgroundImage from '../../assets/images/background_content.jpg';

export const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  padding: 15px 30px;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;

  p,
  a {
    font-size: 14px;
    color: #979ea5;
  }

  .link_esqueceu {
    text-decoration: underline;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
`;

export const ContainerTitle = styled.div`
  color: #ffff;
  text-align: center;
  margin-bottom: 8px;

  h2 {
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 10px;
  }

  span {
    color: #ffffff91;
  }
`;

export const BoxInside = styled.div`
  background-color: #f5f9ff;
  padding: 12px 28px;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Box = styled.div`
  max-width: 500px;
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  @media (max-width: 550px) {
    width: 374px;
  }

  .link_esqueceu {
    text-align: center;
    padding-bottom: 30px;
  }

  form {
    padding-bottom: 35px;
    width: 100%;

    .input-group {
      margin: 37px 0px;
    }

    a {
      color: #264eee;
    }
  }
`;

export const ContainerButtonSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
