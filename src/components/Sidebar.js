import React from 'react';
import styled from 'styled-components';
import MessageActionButton from '../components/ActionButton';
import { withRouter } from 'react-router';

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

  h3 {
    margin-top: 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Sidebar = ({ history }) => {
  return (
    <SidebarContainer>
      <TitleContainer>
        <h3>Direct Messages</h3>
        <MessageActionButton onClick={() => history.push('/users')}>
          add
        </MessageActionButton>
      </TitleContainer>
      <ul>
        <li>lorem</li>
        <li>ipsum</li>
      </ul>
    </SidebarContainer>
  );
};

export default withRouter(Sidebar);
