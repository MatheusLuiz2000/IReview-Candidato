import styled from 'styled-components';

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  align-items: center;
`;

export const ContainerRegras = styled.div`
  display: flex;
  align-items: center;

  .input-group {
    :first-child {
      margin-right: 60px;
    }
  }
`;

export const Regra = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

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

export const ContainerInformacao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 65px;

  p {
    font-weight: 500;
    color: #ababab;
    margin-left: 25px;
    text-decoration: underline;
  }
`;
export const Box = styled.div`
  border: 2px dashed #ececec;
  width: 850px;
  max-width: 850px;
  padding: 25px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 40px;

  h2 {
    margin-bottom: 30px;
    color: #0c1e5b;
  }
`;

export const ContainerButtonSubmit = styled.div`
  padding: 0px 35px;
  text-align: right;
  margin-bottom: 30px;

  button {
    width: auto;
  }
`;
