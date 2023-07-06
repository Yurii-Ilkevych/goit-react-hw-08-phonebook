import styled from '@emotion/styled';

const FooterBox = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 6px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
`;

const FooterContainer = styled.footer`
  border: 1px solid rgb(146, 144, 144);
  background-color: rgb(192, 192, 192);
  padding-top: 12px;
  padding-bottom: 12px;
  color: black;
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: black;
  &:hover {
    color: rgb(65, 65, 65);
  }
`;

export { FooterBox, FooterContainer, Link };
