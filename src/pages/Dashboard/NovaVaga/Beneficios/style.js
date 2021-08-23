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

export const ContainerSubmit = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 35px 0px;
  width: 100%;

  button {
    text-align: right;
    width: auto;
  }
`;

export const ContainerInputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &.three {
    .input-group {
      :nth-child(1),
      :nth-child(2) {
        margin-right: 55px;
      }
    }
  }

  .input-group {
    :first-child {
      margin-right: 55px;
    }
  }
`;

export const ContainerImage = styled.div`
  border-radius: 8px;
  background-color: white;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 55px;
  padding: 16px;

  input {
    color: #7c7d8d;
    margin-bottom: 8px;
    font-size: 15px;

  ::-webkit-file-upload-button {
      background: #112776;
      color: white;
      padding: 12px;
      border-radius: 8px;
      cursor: pointer;
  }

  }

  label {
    color: #7c7d8d;
    margin-bottom: 8px;
    font-size: 15px;
  }

  p {
    color: #7c7d8d;
    margin-bottom: 8px;
    font-size: 15px;
  }
`;
