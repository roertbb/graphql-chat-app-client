import React from 'react';
import { Form, Field } from 'react-final-form';
import { Modal, ModalContent } from '../components/Modal';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import CustomLink from '../components/CustomLink';
import Title from '../components/Title';

const Register = props => {
  const handleSubmit = data => {
    console.log(data);
  };

  return (
    <Modal>
      <ModalContent>
        <Form
          onSubmit={data => handleSubmit(data)}
          render={({ handleSubmit, submitting }) => (
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

export default Register;
