import React from 'react';
import styled, { css } from 'styled-components';
import { getUserId } from '../utils/getUserId';
import { withRouter } from 'react-router';
// import MessageActionButton from '../components/ActionButton';
// import { ReactComponent as EditIcon } from '../assets/edit-regular.svg';
// import { ReactComponent as DeleteIcon } from '../assets/trash-alt-regular.svg';
// import { IconContainer } from '../components/IconContainer';

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
    if (sender.id === receiver.id) return null;
    if (Number(sender.id) === userId) return receiver.nick;
    if (Number(receiver.id) === userId) return null;
  };
  const nick = parseSender();

  const getTime = dateStr => {
    const date = new Date(dateStr);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hour}:${minutes}:${seconds}`;
  };

  return (
    <MessageContainer sender={nick}>
      <MessageInfoContainer>
        <span>
          <MessageAuthor>{!nick ? 'You' : nick}</MessageAuthor> -{' '}
          {getTime(created_at)}
        </span>
        <span>
          {/* <MessageActionButton>
            <IconContainer>
              <EditIcon />
            </IconContainer>
          </MessageActionButton>
          <MessageActionButton>
            <IconContainer>
              <DeleteIcon />
            </IconContainer>
          </MessageActionButton> */}
        </span>
      </MessageInfoContainer>
      <MessageBox sender={nick}>{text}</MessageBox>
    </MessageContainer>
  );
};

export default withRouter(Message);
