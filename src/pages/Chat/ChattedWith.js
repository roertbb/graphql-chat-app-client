import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { GET_CHATTED_WITH } from '../../graphql/User';

const ChattedWith = props => {
  const { data, error, loading } = useQuery(GET_CHATTED_WITH);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <ul>
      {data.chattedWith.map(({ id, nick }) => (
        <li key={id}>
          <Link to={`/${id}`}>{nick}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ChattedWith;
