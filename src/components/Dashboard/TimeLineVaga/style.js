import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  margin-bottom: 32px;
`;

export const Box = styled.div`
  ${({ selected }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid #0000001c;
    color: #7c7d8d;
    font-size: 14px;
    padding: 4px;
    border-radius: 5px;
    margin-right: 24px;
    text-align: center;
    cursor: pointer;
    height: 56px;
    color: #112776;

    ${selected &&
    css`
        background-color: #112776;
        color: #ffffff;
    `}

    :last-child {
      margin-right: 0px;
    }
  `}
`;

export const Circle = styled.div`
  background-color: #0c1e5b;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .info {
    width: 14px;
  }

  img {
    width: 33px;
  }
`;
