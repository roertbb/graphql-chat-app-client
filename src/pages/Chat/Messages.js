import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery, useSubscription } from 'react-apollo-hooks';
import Message from '../../components/Message';
import {
  GET_MESSAGES,
  NEW_MESSAGE_SUBSCRIPTION
} from '../../graphql/PrivateMessage';
import { getUserId } from '../../utils/getUserId';

const Messages = ({ location }) => {
  const userId = getUserId(location);
  const { data, error, loading, refetch } = useQuery(GET_MESSAGES, {
    variables: { userId }
  });

  useEffect(() => {
    refetch();
  }, [location.pathname]);

  useSubscription(NEW_MESSAGE_SUBSCRIPTION, {
    variables: { senderId: getUserId(location) },
    onSubscriptionData: async ({ client, subscriptionData }) => {
      const { myPrivateMessages } = client.readQuery({
        query: GET_MESSAGES,
        variables: { userId: getUserId(location) }
      });
      client.writeQuery({
        query: GET_MESSAGES,
        variables: { userId: getUserId(location) },
        data: {
          myPrivateMessages: myPrivateMessages.concat([
            subscriptionData.data.newMessage
          ])
        }
      });
    }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      {data.myPrivateMessages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </>
  );
};

export default withRouter(Messages);
