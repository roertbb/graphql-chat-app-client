import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const ChatInputContainer = styled.form`
  height: ${({ theme }) => theme.messageInputHeight};
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 0;
  right: 0;
  width: calc(100% - ${({ theme }) => theme.sidebarWidth});
  display: flex;
  padding: ${({ theme }) => theme.spacing.s};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.s};
  width: 100%;
  border: 0;
`;

const ChatInput = props => {
  const [message, setMessage] = useState('');

  const messageUpdated = event => {
    setMessage(event.target.value);
  };

  const sendMessage = event => {
    event.preventDefault();
    console.log(message);
    setMessage('');
  };

  return (
    <ChatInputContainer>
      <Input
        type="text"
        placeholder="enter message"
        value={message}
        onChange={messageUpdated}
      />
      <Button onClick={sendMessage}>Send</Button>
    </ChatInputContainer>
  );
};

export default ChatInput;
