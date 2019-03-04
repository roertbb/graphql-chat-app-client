import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CustomLink = styled(Link)`
  color: ${({ theme }) => theme.colors.green};
  cursor: pointer;
  width: 100%;
  text-align: center;
  display: block;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default CustomLink;
