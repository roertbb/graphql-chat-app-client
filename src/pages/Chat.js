import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { ChatContainer } from '../components/ChatContainer';
import Container from '../components/Container';
import ChatInput from '../components/ChatInput';
import Message from '../components/Message';

const Chat = props => {
  return (
    <Container>
      <Sidebar />
      <ChatContainer>
        <Message />
        <Message />
      </ChatContainer>
      <ChatInput />
    </Container>
  );
};

export default Chat;
