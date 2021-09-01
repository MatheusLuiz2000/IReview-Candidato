import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-bottom: 50px;
  height: 100%;
`;

export const ListaMensagens = styled.div`
  border: 1px solid #edf2f6;
  border-radius: 5px;
  padding: 20px;
  margin-right: 50px;
  height: calc(100% - 220px);
  position: relative;

  h5 {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 22px;
    color: #0c1e5b;
  }

  h2 {
    color: #0c1e5b;
    font-size: 25px;
  }

  .chat-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
  }
`;

export const PreviaMensagem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0px;

  img {
    margin-right: 15px;
  }

  h3 {
    color: #0c1e5b;
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 10px;
  }

  p {
    color: #b5b5b5;
    font-size: 14px;
    width: 80%;
  }
`;

export const Circle = styled.div`
  margin-top: 8px;
  background-color: #3157ef;
  width: 23px;
  border-radius: 50%;
  text-align: center;
  padding: 3px 5px;
  color: #ffff;
  font-size: 14px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  margin-right: 10px;
  font-weight: 400;
`;

export const Conversas = styled.div`
  border: 1px solid #edf2f6;
  border-radius: 5px;
  padding: 18px 10px 40px 10px;

  h2 {
    color: #0c1e5b;
    font-size: 25px;
    border-bottom: 1px solid #f6f6f6;
    padding-bottom: 10px;
    margin-bottom: 25px;
  }
`;

export const MensagemEnviada = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 30px;

  div {
    background-color: #0c1e5b;
    border-radius: 15px;
    color: #ffff;
    padding: 15px 12px;
    font-size: 13px;
    margin-right: 25px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  img {
    object-fit: cover;
    border-radius: 50%;
    height: 80px;
    width: 80px;
  }
`;
export const MensagemRecebida = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;

  div {
    background-color: #ffff;
    border-radius: 15px;
    color: #b5b5b5;
    padding: 15px 12px;
    font-size: 13px;
    margin-left: 25px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  img {
    object-fit: cover;
    border-radius: 50%;
    height: 80px;
    width: 80px;
  }
`;

export const ContainerEnviaMensagem = styled.div`
  display: flex;
  align-items: center;
  bottom: 36px;

  input {
    padding: 10px 15px;
    border: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
    font-size: 15px;
    width: 100%;
    margin-left: 10px;
  }

  button {
    width: auto;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BoxLeft = styled(Conversas)`
  width: 30%;
`;

export const BoxRight = styled(Conversas)`
  width: 65%;
`;

export const BoxChat = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const BoxPrincipal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxNotification = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Name = styled.span`
  font-size: 14px;
  color: #0c1e5b;
  font-weight: 500;
`;

export const Message = styled.span`
  font-size: 12px;
  color: #4c4c4c;
  margin-top: 4px;
`;

export const Notification = styled.div`
  background: #0c1e5b;
  border-radius: 50%;
  padding: 4px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 4px;
  font-size: 14px;
`;
