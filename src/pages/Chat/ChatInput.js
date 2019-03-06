import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { useMutation } from 'react-apollo-hooks';
import Button from '../../components/Button';
import { SEND_MESSAGE, GET_MESSAGES } from '../../graphql/PrivateMessage';
import { getUserId } from '../../utils/getUserId';
import { ChatInputContainer, Input } from '../../components/ChatInput';

const ChatInput = ({ location }) => {
  const sendMessage = useMutation(SEND_MESSAGE);

  const [message, setMessage] = useState('');

  const messageUpdated = event => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async event => {
    event.preventDefault();
    await sendMessage({
      variables: {
        text: message,
        receiverId: getUserId(location)
      },
      update: (cache, { data: { createPrivateMessage } }) => {
        const { myPrivateMessages } = cache.readQuery({
          query: GET_MESSAGES,
          variables: { userId: getUserId(location) }
        });
        cache.writeQuery({
          query: GET_MESSAGES,
          variables: { userId: getUserId(location) },
          data: {
            myPrivateMessages: myPrivateMessages.concat([createPrivateMessage])
          }
        });
      }
    });
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
      <Button onClick={handleSendMessage}>Send</Button>
    </ChatInputContainer>
  );
};

export default withRouter(ChatInput);
