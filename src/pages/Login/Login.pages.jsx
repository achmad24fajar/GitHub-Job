import React from 'react';
import {
  Button,
  LoginCard,
  LoginCardBody,
  LoginCardHeader,
  LoginContainer,
} from './Login.styles';
import { auth, signInWithGooglePopup } from '../../utils/firebase.utils';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../redux/jobs';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <LoginContainer>
      <LoginCard>
        <LoginCardHeader>Sign in Here</LoginCardHeader>
        <LoginCardBody>
          {auth.currentUser ? (
            <Link to='/jobs'>See All Jobs</Link>
          ) : (
            <Button label='google' onClick={() => dispatch(LoginUser())}>
              Sign in with Google
            </Button>
          )}
        </LoginCardBody>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
