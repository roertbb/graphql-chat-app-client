import styled from 'styled-components';

export const ChatContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
  margin-bottom: ${({ theme }) => theme.messageInputHeight};
  padding: ${({ theme }) => theme.spacing.m};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;
