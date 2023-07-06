import { useUser } from 'hooks';
import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Puff } from 'react-loader-spinner';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { getCurentUser } from 'redux/authUser/authOperators';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const { isCurrentUser } = useUser();

  useEffect(() => {
    dispatch(getCurentUser());
  }, [dispatch]);

  return isCurrentUser ? (
    <Puff
      height="80"
      width="80"
      radius={1}
      color="rgb(69, 201, 219)"
      ariaLabel="puff-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClass=""
      visible={true}
    />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />

        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
