import { Navigate } from 'react-router-dom';
import { useUser } from 'hooks';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogin, isCurrentUser } = useUser();
console.log(redirectTo)
console.log(Component)
  const shouldRedirect = !isLogin && !isCurrentUser;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  Component: PropTypes.array.isRequired,
  redirectTo: PropTypes.string.isRequired,
}