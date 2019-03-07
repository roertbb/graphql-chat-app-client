import React from 'react';
import { withRouter } from 'react-router-dom';
import { FORM_ERROR } from 'final-form';
import { useMutation } from 'react-apollo-hooks';
import { REGISTER_MUTATION } from '../graphql/Auth';

import { Form, Field } from 'react-final-form';
import { Modal, ModalContent } from '../components/Modal';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import CustomLink from '../components/CustomLink';
import Title from '../components/Title';
import Typography from '../components/Typography';
import { wsLink } from '../index';

const Register = ({ history }) => {
  const register = useMutation(REGISTER_MUTATION);

  const handleSubmit = async ({ name, password, email }) => {
    try {
      const response = await register({
        variables: { nick: name, password, email }
      });
      const { token, refreshToken } = response.data.register;
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      wsLink.subscriptionClient.tryReconnect();
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
              <Title>Register</Title>

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

              <Field name="email">
                {({ input, meta }) => (
                  <div>
                    <FormInput
                      input={input}
                      id="email"
                      label="email:"
                      placeholder="enter email"
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
                register
              </Button>
            </form>
          )}
        />

        <CustomLink to="/login">Already have an account? Login here</CustomLink>
      </ModalContent>
    </Modal>
  );
};

export default withRouter(Register);
