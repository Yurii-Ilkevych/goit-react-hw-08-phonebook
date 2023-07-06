import { useUser } from 'hooks';
import { Link } from 'components/SharedLayout/SharedLayout.styled';

const Navigation = () => {
  const { isLogin } = useUser();

  return (
    <>
      <Link to="/">Home</Link>
      {isLogin && <Link to="/contacts">Contacts</Link>}
    </>
  );
};

export default Navigation;
