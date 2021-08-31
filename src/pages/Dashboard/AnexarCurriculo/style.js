import styled from 'styled-components';
import backgroundImage from '../../../assets/images/background_content.jpg';

export const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  padding: 15px 30px;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f9ff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 5px;
  min-height: 87vh;
  padding: 10px;
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  justify-content: space-around;
  width: 400px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 5px;
`;

export const Title = styled.span`
  font-size: 36px;
  margin-bottom: 16px;
`;

export const TextDark = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

export const TextLight = styled.span`
  font-size: 12px;
  color: #4c4c4c;
  margin-top: 8px;
`;

export const TextColor = styled.span`
  font-size: 24px;
  color: #112776;
  margin: 16px 0;
  font-weight: 500;
`;

export const Link = styled.a`
  text-decoration: underline;
  color: #112776;
  font-size: 14px;
`;

export const BoxButton = styled.div`
  width: 180px;
`;
