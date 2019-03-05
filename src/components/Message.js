import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  width: 60%;
  align-self: flex-end;
`;

const MessageBox = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
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

const MessageActionButton = styled.button`
  border: 0;
  background-color: inherit;
`;

const Message = props => {
  return (
    <MessageContainer>
      <MessageInfoContainer>
        <span>
          <MessageAuthor>Lorem Ipsum</MessageAuthor> - 00:00
        </span>
        <span>
          <MessageActionButton>edit</MessageActionButton>
          <MessageActionButton>delete</MessageActionButton>
        </span>
      </MessageInfoContainer>
      <MessageBox>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sint
        officia iure quidem mollitia aliquid odio laudantium debitis distinctio
        quos et, doloribus, quod vero suscipit repellat modi beatae odit soluta
        dolorem nulla vitae, quaerat animi fuga. Tempore repudiandae alias
        dolore! Porro saepe ab totam eligendi eveniet cumque, nostrum quidem!
        Recusandae!
      </MessageBox>
    </MessageContainer>
  );
};

export default Message;
