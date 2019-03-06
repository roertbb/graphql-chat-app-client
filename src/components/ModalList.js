import styled from 'styled-components';

const ModalList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;

  li {
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing.s};
    border-top: 1px solid ${({ theme }) => theme.colors.background};
  }
`;

export default ModalList;
