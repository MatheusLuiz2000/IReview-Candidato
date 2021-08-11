import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
