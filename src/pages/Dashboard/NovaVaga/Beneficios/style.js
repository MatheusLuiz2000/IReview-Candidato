import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BeneficiosContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 0.2fr;
  align-items: center;
  margin-bottom: 20px;
  background-color: #f8f8f8;
  padding: 15px;
  font-weight: 500;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;

  p {
    color: #0c1e5b;
    font-size: 14px;
  }

  .flex-center {
    img {
      width: 15px;
    }

    .first {
      margin-right: 10px;
    }
  }
`;

export const Box = styled.form`
  border: 2px dashed #ececec;
  max-width: 900px;
  width: 900px;
  padding: 25px;
  text-align: center;

  h2 {
    margin-bottom: 30px;
    color: #0c1e5b;
  }
`;

export const ContainerNovo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .input-group {
    :nth-child(1),
    :nth-child(2) {
      margin-right: 55px;
    }
  }

  button {
    width: auto;
  }
`;
