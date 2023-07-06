import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/authUser/authOperators';
import {
  Form,
  Tittle,
  FlexContainer,
  InputEmail,
  InputPassword,
  LoginBtn,
} from './LoginForm.styled';
import {
  selectErrorStatusLogin,
  selectPending,
} from 'redux/authUser/authSelectors';
import { useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(selectErrorStatusLogin);
  const pending = useSelector(selectPending);

  useEffect(() => {
    const notifyError = () => toast.error(`${error}`);
    if (error !== null) {
      notifyError();
    }
  }, [error]);

  const handleValue = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value.trim());
        break;
      case 'password':
        setPassword(value.trim());
        break;
      default:
        return;
    }
  };

  const hundleSubmit = evt => {
    evt.preventDefault();
    dispatch(logInUser({ email, password }));
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <>
      {pending ? (
        <ThreeDots
          height="60"
          width="70"
          radius="9"
          color="rgb(69, 201, 219)"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ justifyContent: 'center', marginTop: '100px' }}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <Form onSubmit={hundleSubmit}>
          <Tittle>Enter your details for authorization</Tittle>
          <FlexContainer>
            <label>
              Email
              <InputEmail
                type="email"
                name="email"
                pattern=".+@.+"
                title="Please enter a valid email address"
                required
                value={email}
                onChange={handleValue}
              ></InputEmail>
            </label>
            <label>
              Password
              <InputPassword
                type="password"
                name="password"
                required
                pattern="^.{7,12}$"
                title="The password must contain 7-12 characters"
                value={password}
                onChange={handleValue}
              ></InputPassword>
            </label>
          </FlexContainer>
          <LoginBtn type="submit">Submit</LoginBtn>
        </Form>
      )}
    </>
  );
};

export default LoginForm;
