import React from 'react';
import { withRouter } from 'react-router';
import { SidebarContainer, TitleContainer } from '../components/Sidebar';
import { ChatContainer } from '../components/ChatContainer';
import Container from '../components/Container';
import ChatInput from './Chat/ChatInput';
import MessageActionButton from '../components/ActionButton';
import ChattedWith from './Chat/ChattedWith';
import Messages from './Chat/Messages';

const Chat = ({ history, location }) => {
  return (
    <Container>
      <SidebarContainer>
        <TitleContainer>
          <h3>Direct Messages</h3>
          <MessageActionButton onClick={() => history.push('/users')}>
            add
          </MessageActionButton>
        </TitleContainer>
        <ChattedWith />
      </SidebarContainer>
      <ChatContainer>
        <Messages />
      </ChatContainer>
      <ChatInput />
    </Container>
  );
};

export default withRouter(Chat);
