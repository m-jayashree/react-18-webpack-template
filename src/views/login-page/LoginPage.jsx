import React, { useState } from 'react';
import LoadingIndicator from '../components/loading-indicator/LoadingIndicator';
import { Button, Alert, Form, Container } from 'react-bootstrap';
import './LoginPage.scss';
import { useForm } from 'react-hook-form';
import environment from 'environment';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import * as MasterAction from '../../stores/master/MasterAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RouteEnum from 'constants/RouteEnum';
import { I18n } from 'react-redux-i18n';

export default function LoginPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { handleSubmit, register, errors, clearError, setError } = useForm();
  const [loginErrorMessage, setloginErrorMessage] = useState(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const onSubmit = async (values) => {
    setIsRequesting(true);

    axios
      .post(environment.api.sysUserAuthenticate, {
        username: values.username,
        password: values.password,
      })
      .then((response) => {
        setIsRequesting(false);
        let sysData = response.data.data;
        let decoded;
        if (sysData.sysUserXToken !== '' && sysData.sysUserXToken !== null) {
          localStorage.setItem('access_token', sysData.sysUserXToken);
          localStorage.setItem('user_name', values.username);
          sessionStorage.setItem('username', values.username);
          sessionStorage.setItem('password', btoa(values.password));
          decoded = jwtDecode(sysData.sysUserXToken);
          dispatch(MasterAction.requestUserRoleUpdate(JSON.stringify(decoded)));
          history.push(RouteEnum.Home);
        }
      })
      .then((response) => setIsRequesting(false))
      .catch((err) => {
        setloginErrorMessage('Login failed. Invalid username or password');
        setIsRequesting(false);
      });
  };
  return (
    <LoadingIndicator isActive={isRequesting}>
      <Container>
        <div className="app-login">
          <div className="app-login-card">
            <div className="app-login-card__form">
              <h1>Crew Only Access</h1>

              {
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-4">
                    <Form.Label>{I18n.t('LOGINPAGE.USERNAME')}</Form.Label>
                    <Form.Control
                      type="text"
                      maxLength={25}
                      name="username"
                      {...register('username', {
                        required: true,
                      })}
                      autoComplete={'off'}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>{I18n.t('LOGINPAGE.PASSWORD')}</Form.Label>
                    <Form.Control
                      type="password"
                      maxLength={25}
                      name="password"
                      {...register('password', {
                        required: true,
                      })}
                      autoComplete={'off'}
                    />
                  </Form.Group>
                  <Button className="app-login-card__form--btn" type="submit">
                    Login
                  </Button>
                </Form>
              }
              {errors?.username || errors?.password || errors?.passPhrase ? (
                <Alert variant="danger">
                  <p>
                    {errors?.username && errors?.username.message
                      ? errors?.username.message
                      : errors?.password && errors?.password.message
                      ? errors?.password.message
                      : errors?.passPhrase && errors?.passPhrase.message
                      ? errors?.passPhrase.message
                      : null}
                  </p>
                </Alert>
              ) : null}

              {loginErrorMessage ? (
                <Alert variant="danger">
                  <Alert.Heading>Validation Error!.</Alert.Heading>
                  <p>{loginErrorMessage}</p>
                </Alert>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </LoadingIndicator>
  );
}
