import gql from 'graphql-tag';

export const GET_CHATTED_WITH = gql`
  {
    chattedWith {
      id
      nick
    }
  }
`;
