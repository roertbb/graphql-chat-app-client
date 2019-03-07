import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { useQuery, useSubscription } from 'react-apollo-hooks';
import { GET_CHATTED_WITH } from '../../graphql/User';
import { NEW_DIRECT_MESSAGE_SUBSCRIPTION } from '../../graphql/PrivateMessage';
import { getUserId } from '../../utils/getUserId';

const ChattedWith = ({ location }) => {
  const { data, error, loading } = useQuery(GET_CHATTED_WITH);

  const [notified, setNotified] = useState([]);

  useEffect(() => {
    const userId = getUserId(location);
    setNotified(notified.filter(id => Number(id) !== userId));
  }, [location.pathname]);

  useSubscription(NEW_DIRECT_MESSAGE_SUBSCRIPTION, {
    onSubscriptionData: async ({ client, subscriptionData }) => {
      const userId = getUserId(location);
      const { chattedWith } = client.readQuery({
        query: GET_CHATTED_WITH
      });

      const senderData = subscriptionData.data.newDirectMessage.sender;

      if (!chattedWith.map(user => user.id).includes(senderData.id))
        client.writeQuery({
          query: GET_CHATTED_WITH,
          data: {
            chattedWith: chattedWith.concat([{ ...senderData }])
          }
        });

      if (Number(senderData.id) !== userId) {
        setNotified([...notified, senderData.id]);
      }
    }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <ul>
      {data.chattedWith.map(({ id, nick }) => (
        <li key={id}>
          <Link to={`/${id}`}>
            {notified.includes(id) && '*'}
            {nick}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(ChattedWith);
