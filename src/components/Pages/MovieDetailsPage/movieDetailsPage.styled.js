import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBack = styled.button`
  margin: 16px auto 16px 32px;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  color: tomato;
  background-color: #b0baf5;
  border-radius: 4px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.4);
  &:hover,
  &:focus {
    background-color: #031992;
    font-style: italic;
  }
`;

export const MovieCard = styled.div`
  display: flex;
  margin: 0 32px;
  gap: 30px;
  padding: 0 12px;
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

  &:focus, &:hover {
    color: tomato;
    font-style: italic;
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
