import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: block;
`;

const StyledInput = styled.input`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.s};
  margin-bottom: ${({ theme }) => theme.spacing.s};
`;

const FormInput = ({ id, label, type, placeholder, input }) => {
  return (
    <div>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput {...input} type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
