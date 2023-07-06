import styled from '@emotion/styled';

const Delete = styled.button`
  background-color: rgb(247, 237, 224);
  border: 1px solid rgb(74, 72, 71);
  border-radius: 4px;
  box-shadow: 0 1px #666;
  &:hover {
    background-color: rgb(245, 198, 137);
  }
  &:active {
    background-color: rgb(247, 237, 224);
    box-shadow: none;
    transform: translateY(1px);
  }
`;

export { Delete };
