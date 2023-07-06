import styled from '@emotion/styled';

const Form = styled.form`
  width: 400px;
  border: 1px solid black;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 15px;
  background-color: rgb(247, 237, 224);
  margin-top: 50px;
  padding: 8px;
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

const InputEmail = styled.input`
  margin-left: 85px;
  background-color: rgb(224, 251, 250);
  border: 1px solid rgb(74, 72, 71);
  border-radius: 4px;
`;

const InputPassword = styled.input`
  margin-left: 53px;
  background-color: rgb(224, 251, 250);
  border: 1px solid rgb(74, 72, 71);
  border-radius: 4px;
`;

const LoginBtn = styled.button`
  display: block;
  margin: auto;
  background-color: rgb(224, 251, 250);
  border: 1px solid rgb(74, 72, 71);
  border-radius: 4px;
  box-shadow: 0 1px #666;
  &:hover {
    background-color: rgb(69, 201, 219);
  }
  &:active {
    background-color: rgb(69, 201, 219);
    box-shadow: none;
    transform: translateY(1px);
  }
`;

export { Form, Tittle, FlexContainer, InputEmail, InputPassword, LoginBtn };
