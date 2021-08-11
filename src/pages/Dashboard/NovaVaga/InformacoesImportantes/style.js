import styled from 'styled-components';

export const Container = styled.form`
  max-width: 750px;
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

export const Label = styled.p`
  margin-bottom: 16px;
`;

export const ContainerInputGroup = styled.div`
  margin: 0 auto;
  justify-content: space-between;
  max-width: 500px;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;

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

export const LastBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  margin-bottom: 24px;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  border: 1px solid #0000001c;
  color: #7c7d8d;
  font-size: 15px;
  padding: 13px 10px 13px 15px;
  border-radius: 5px;
`;
