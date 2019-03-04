import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.m};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  color: white;
  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${({ theme }) => theme.spacing.m};
    `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

export default Button;
