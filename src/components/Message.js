import React from 'react';
import styled, { css } from 'styled-components';
import MessageActionButton from '../components/ActionButton';
import { getUserId } from '../utils/getUserId';
import { withRouter } from 'react-router';

const MessageContainer = styled.div`
  width: 60%;
  ${({ sender }) =>
    sender
      ? css`
          align-self: flex-start;
        `
      : css`
          align-self: flex-end;
        `};
`;

const MessageBox = styled.div`
  background-color: ${({ theme, sender }) =>
    sender === null ? theme.colors.green : theme.colors.white};
  padding: ${({ theme }) => theme.spacing.s};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const MessageInfoContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xs};
  display: flex;
  justify-content: space-between;
`;

const MessageAuthor = styled.span`
  font-weight: bold;
`;

const Message = ({ message, location }) => {
  const { text, created_at, receiver, sender } = message;

  const userId = getUserId(location);
  const parseSender = () => {
    if (Number(sender.id) === userId) return receiver.nick;
    if (Number(receiver.id) === userId) return null;
  };
  const nick = parseSender();

  return (
    <MessageContainer sender={nick}>
      <MessageInfoContainer>
        <span>
          <MessageAuthor>{!nick ? 'You' : nick}</MessageAuthor> - {created_at}
        </span>
        <span>
          <MessageActionButton>edit</MessageActionButton>
          <MessageActionButton>delete</MessageActionButton>
        </span>
      </MessageInfoContainer>
      <MessageBox sender={nick}>{text}</MessageBox>
    </MessageContainer>
  );
};

export default withRouter(Message);
