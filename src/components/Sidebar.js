import styled from 'styled-components';

export const SidebarContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  width: ${({ theme }) => theme.sidebarWidth};
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.s};

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  h3 {
    margin-top: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
