import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBack = styled.button`
  margin-left: 32px;
  margin-top: 8px;
  padding: 4px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  gap: 4px;

  background-color: ${props => {
    return props.isActive ? '#212121' : 'tomato';
  }};
`;

export const MovieCard = styled.div`
  display: flex;
  gap: 30px;
  padding-right: 12px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.4);
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #212121;
  font-size: 20px;

  &.active {
    color: tomato;
  }
`;

export const MovieItem = styled.li`
  list-style: none;
`;
export const MovieList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const MovieTitle = styled.h3`
  color: #212121;
`;

export const WrapperCards = styled.div`
  margin-left: 32px;
  margin-right: 32px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.4);
  padding: 12px;
`;
