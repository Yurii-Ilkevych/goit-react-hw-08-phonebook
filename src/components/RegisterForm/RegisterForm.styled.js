import styled from '@emotion/styled';

const Form = styled.form`
  width: 400px;
  border: 1px solid black;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 15px;
  background-color: rgb(232, 246, 247);
  margin-top: 50px;
  padding: 8px;
`;

const RegisterBtn = styled.button`
  display: block;
  margin: auto;
  background-color: rgb(247, 237, 224);
  border: 1px solid rgb(74, 72, 71);
  border-radius: 4px;
  box-shadow: 0 1px #666;
  &:hover {
    color: black;
    background-color: rgb(245, 198, 137);
  }
  &:active {
    background-color: rgb(245, 198, 137);
    box-shadow: none;
    transform: translateY(1px);
  }
`;

const Tittle = styled.h3`
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  margin-bottom: 10px;
`;

const InputPassword = styled.input`
  margin-left: 58px;
  background-color: rgb(247, 237, 224);
  border-radius: 4px;
  border: 1px solid rgb(74, 72, 71);
`;

const InputName = styled.input`
  margin-left: 85px;
  background-color: rgb(247, 237, 224);
  border: 1px solid rgb(74, 72, 71);
  border-radius: 4px;
`;
const InputEmail = styled.input`
  margin-left: 89px;
  background-color: rgb(247, 237, 224);
  border: 1px solid rgb(74, 72, 71);
  border-radius: 4px;
`;

export {
  Form,
  RegisterBtn,
  Tittle,
  FlexContainer,
  InputEmail,
  InputName,
  InputPassword,
};
