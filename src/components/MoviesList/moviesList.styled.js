import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesLink = styled(Link)`
  text-decoration: none;
  color: #212121;
  font-size: 20px;

  &.active {
    color: tomato;
  }
`;

export const MoviesItem = styled.li`
  list-style: none;
`;

export const MoviesLists = styled.ul`
  display: flex;
  gap: 20px;
`;
