import styled, { css } from 'styled-components';

const Typography = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.s};

  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.colors.red};
      text-align: center;
    `}
`;

export default Typography;
