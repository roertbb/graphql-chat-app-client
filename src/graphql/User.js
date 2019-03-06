import gql from 'graphql-tag';

export const GET_CHATTED_WITH = gql`
  {
    chattedWith {
      id
      nick
    }
  }
`;

export const GET_USERS = gql`
  query {
    users {
      id
      nick
    }
  }
`;
