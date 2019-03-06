import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Modal, ModalContent } from '../components/Modal';
import Title from '../components/Title';
import ModalList from '../components/ModalList';
import { GET_USERS } from '../graphql/User';
import { useQuery } from 'react-apollo-hooks';

const Users = props => {
  const { data, error, loading, refetch } = useQuery(GET_USERS);

  useEffect(() => {
    refetch();
  }, []);

  let content = null;
  if (error) content = <p>{error.message}</p>;
  else if (loading) content = <p>Loading...</p>;
  else {
    content = data.users.map(({ nick, id }) => (
      <li key={id}>
        <Link to={`/${id}`}>{nick}</Link>
      </li>
    ));
  }

  return (
    <Modal>
      <ModalContent>
        <Title>Choose User</Title>
        <ModalList>{content}</ModalList>
      </ModalContent>
    </Modal>
  );
};

export default withRouter(Users);
