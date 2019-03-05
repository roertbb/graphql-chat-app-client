import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
  mutation login($nick: String!, $password: String!) {
    login(nick: $nick, password: $password) {
      token
      refreshToken
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation register($nick: String!, $email: String!, $password: String!) {
    register(nick: $nick, email: $email, password: $password) {
      token
      refreshToken
    }
  }
`;
