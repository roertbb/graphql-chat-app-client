import styled from 'styled-components';

export const ChatInputContainer = styled.form`
  height: ${({ theme }) => theme.messageInputHeight};
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 0;
  right: 0;
  width: calc(100% - ${({ theme }) => theme.sidebarWidth});
  display: flex;
  padding: ${({ theme }) => theme.spacing.s};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.s};
  width: 100%;
  border: 0;
`;
