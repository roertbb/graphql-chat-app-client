import styled, { css } from 'styled-components';

export const IconContainer = styled.div`
  svg {
    width: ${({ theme }) => theme.spacing.s};
    height: ${({ theme }) => theme.spacing.s};
    ${({ theme, white }) =>
      white &&
      css`
        color: ${theme.colors.white};
      `};
  }
`;
