import styled from 'styled-components';

export const Container = styled.form`
  max-width: 900px;
  margin: 0 auto;
`;

export const ContainerButtonSubmit = styled.div`
  padding: 0px 35px;
  text-align: right;
  margin-bottom: 30px;

  button {
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
