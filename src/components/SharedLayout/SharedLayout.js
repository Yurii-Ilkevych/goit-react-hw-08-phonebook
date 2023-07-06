import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Link, Container, Nav } from './SharedLayout.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import Footer from 'components/Footer/Footer';
import { useUser } from 'hooks';
import Navigation from 'components/Navigation/Navigation';
import { ThreeDots } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';

export const SharedLayout = () => {
  const { isLogin } = useUser();

  return (
    <>
      <Header>
        <Nav>
          <Navigation />
          {isLogin ? (
            <UserMenu />
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </Nav>
      </Header>

      <Suspense
        fallback={
          <ThreeDots
            height="30"
            width="40"
            radius="9"
            color="rgb(69, 201, 219)"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClassName=""
            visible={true}
          />
        }
      >
        <main>
          <Toaster
            containerStyle={{ marginTop: '35px' }}
            toastOptions={{ duration: 3000 }}
          />
          <Container>
            <Outlet />
          </Container>
        </main>
        <Footer />
      </Suspense>
    </>
  );
};
