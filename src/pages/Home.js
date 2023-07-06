import { useUser } from 'hooks';
import {
  Container,
  Box,
  List,
  LinkLi,
  Li,
} from 'components/SharedLayout/HomeStyles/Home.styled';

const Home = () => {
  const { isLogin } = useUser();

  return (
    <Container>
      <h2>This is a web application for saving your contacts</h2>

      {isLogin ? (
        <Box>
          <List>
            <li>
              <span>
                Click <LinkLi to="/contacts">Contacts</LinkLi> to view saved or
                create new contacts
              </span>
            </li>
          </List>
        </Box>
      ) : (
        <Box>
          <List>
            <Li>
              <span>
                Click <LinkLi to="/register">Register</LinkLi> to create an
                account
              </span>
            </Li>
            <li>
              <span>
                or <LinkLi to="/login">Login</LinkLi> if you have an account
              </span>
            </li>
          </List>
        </Box>
      )}
    </Container>
  );
};

export default Home;
