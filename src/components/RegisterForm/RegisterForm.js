import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectErrorStatusRegister,
  selectPending,
} from 'redux/authUser/authSelectors';
import { createUser } from 'redux/authUser/authOperators';
import {
  Form,
  RegisterBtn,
  Tittle,
  FlexContainer,
  InputEmail,
  InputName,
  InputPassword,
} from './RegisterForm.styled';
import { ThreeDots } from 'react-loader-spinner';
import toast from 'react-hot-toast';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(selectErrorStatusRegister);
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
      case 'name':
        setName(value.trim());
        break;
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
    dispatch(createUser({ name, email, password }));
    resetForm();
  };
  const resetForm = () => {
    setName('');
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
          <Tittle>Enter data to register a new user</Tittle>
          <FlexContainer>
            <label>
              Name
              <InputName
                type="text"
                name="name"
                required
                value={name}
                onChange={handleValue}
              ></InputName>
            </label>
            <label>
              Email
              <InputEmail
                type="email"
                name="email"
                pattern=".+@.+"
                title="Please enter a valid email address"
                value={email}
                required
                onChange={handleValue}
              ></InputEmail>
            </label>
            <label>
              Password
              <InputPassword
                type="password"
                name="password"
                value={password}
                pattern="^.{7,12}$"
                title="The password must contain 7-12 characters"
                required
                onChange={handleValue}
              ></InputPassword>
            </label>
          </FlexContainer>
          <RegisterBtn type="submit">Submit</RegisterBtn>
        </Form>
      )}
    </>
  );
};

export default RegisterForm;
