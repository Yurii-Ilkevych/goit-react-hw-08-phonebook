import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  border-bottom: 1px solid rgb(134, 153, 190);
  background-color: rgb(201, 217, 248);
`;
const Nav = styled.nav`
  align-content: center;
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  padding: 6px 16px;
`;

const Link = styled(NavLink)`
  padding: 8px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  font-weight: 500;
  background-color: rgb(247, 237, 224);
  &:hover {
    color: black;
    background-color: rgb(245, 198, 137);
  }
  &.active {
    color: black;
    background-color: rgb(69, 201, 219);
  }
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export { Header, Link, Nav, Container };
