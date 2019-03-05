import React from 'react';
import { Modal, ModalContent } from '../components/Modal';
import Title from '../components/Title';

import styled from 'styled-components';

const ModalList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;

  li {
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing.s};
    border-top: 1px solid ${({ theme }) => theme.colors.background};
  }
`;

const Users = props => {
  return (
    <Modal>
      <ModalContent>
        <Title>Choose User</Title>
        <ModalList>
          <li>lorem</li>
          <li>ipsum</li>
        </ModalList>
      </ModalContent>
    </Modal>
  );
};

export default Users;
