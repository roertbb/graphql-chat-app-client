import gql from 'graphql-tag';

export const SEND_MESSAGE = gql`
  mutation createMessage($text: String!, $receiverId: Int!) {
    createPrivateMessage(text: $text, receiverId: $receiverId) {
      id
      text
      sender {
        id
        nick
      }
      receiver {
        id
        nick
      }
      created_at
    }
  }
`;

export const GET_MESSAGES = gql`
  query Messages($userId: Int!) {
    myPrivateMessages(otherUserId: $userId) {
      id
      text
      created_at
      sender {
        id
        nick
      }
      receiver {
        id
        nick
      }
    }
  }
`;

export const NEW_MESSAGE_SUBSCRIPTION = gql`
  subscription createMessage($senderId: Int!) {
    newMessage(senderId: $senderId) {
      id
      text
      created_at
      sender {
        id
        nick
      }
      receiver {
        id
        nick
      }
    }
  }
`;

export const NEW_DIRECT_MESSAGE_SUBSCRIPTION = gql`
  subscription newMessageReceived {
    newDirectMessage {
      id
      sender {
        id
        nick
      }
      receiver {
        id
      }
    }
  }
`;
