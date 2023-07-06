import { useUser } from 'hooks';
import { logOutUser } from 'redux/authUser/authOperators';
import { useDispatch } from 'react-redux';
import { Wrapper, BtnLogin } from './UserMenu.styled';

const UserMenu = () => {
  const { user } = useUser();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <p>{user.name}</p>
      <BtnLogin
        type="button"
        onClick={() => {
          dispatch(logOutUser());
        }}
      >
        Logout
      </BtnLogin>
    </Wrapper>
  );
};

export default UserMenu;
