import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 400px;
  border: 1px solid black;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 15px;
  background-color: rgb(232, 246, 247);
  margin-top: 50px;
  padding: 8px;
`;

const Box = styled.div`
  text-align: center;
`;

const List = styled.ul`
  margin-top: 5px;
  list-style: none;
`;

const LinkLi = styled(Link)`
  text-decoration: none;
  border: 1px solid black;
  border-radius: 4px;
  padding-left: 4px;
  padding-right: 4px;
  color: black;
  background-color: rgb(247, 237, 224);
  &:hover {
    background-color: rgb(245, 198, 137);
  }
`;

const Li = styled.li`
  display: block;
  margin-bottom: 10px;
`;

export { Container, Box, List, LinkLi, Li };
