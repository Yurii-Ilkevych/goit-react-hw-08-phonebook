import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
const BtnLogin = styled.button`
  font-weight: 600;
  background-color: rgb(247, 237, 224);
  border: 1px solid rgb(74, 72, 71);
  border-radius: 4px;
  padding: 8px 8px;
  &:hover {
    color: black;
    background-color: rgb(245, 198, 137);
  }
`;

export { Wrapper, BtnLogin };
