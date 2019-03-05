import styled from 'styled-components';

export const Sidebar = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  width: ${({ theme }) => theme.sidebarWidth};
  height: 100%;
`;
