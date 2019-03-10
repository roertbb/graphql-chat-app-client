import React from 'react';
import { withRouter } from 'react-router';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { useMutation } from 'react-apollo-hooks';
import { LOGIN_MUTATION } from '../graphql/Auth';

import { Modal, ModalContent } from '../components/Modal';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import CustomLink from '../components/CustomLink';
import Title from '../components/Title';
import Typography from '../components/Typography';

const Login = ({ history }) => {
  const login = useMutation(LOGIN_MUTATION);

  const handleSubmit = async ({ name, password }) => {
    try {
      const response = await login({ variables: { nick: name, password } });
      const { token, refreshToken } = response.data.login;
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      history.push('/');
    } catch (error) {
      return {
        [FORM_ERROR]: error.message.replace('GraphQL error:', '').trim()
      };
    }
  };

  return (
    <Modal>
      <ModalContent>
        <Form
          onSubmit={data => handleSubmit(data)}
          render={({ handleSubmit, submitting, submitError }) => (
            <form onSubmit={handleSubmit}>
              <Title>Login</Title>

              <Field name="name">
                {({ input, meta }) => (
                  <div>
                    <FormInput
                      input={input}
                      id="name"
                      label="name:"
                      placeholder="enter name"
                      type="text"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <FormInput
                      input={input}
                      id="password"
                      label="password:"
                      placeholder="enter password"
                      type="password"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              {submitError && <Typography error>{submitError}</Typography>}
              <Button fullWidth marginBottom disabled={submitting}>
                login
              </Button>
            </form>
          )}
        />

        <CustomLink to="/register">
          Don't have na account? Register here!
        </CustomLink>
      </ModalContent>
    </Modal>
  );
};

export default withRouter(Login);
