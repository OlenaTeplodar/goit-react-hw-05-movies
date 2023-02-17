import styled from 'styled-components';

export const ActorsList = styled.ul`
  margin-right: 32px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const ActorsItem = styled.li`
  text-align: center;
  padding: 4px;
  width: 120px;
  list-style: none;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.4);
`;

export const ActorsName = styled.h3`
  text-align: center;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const ActorsMassage = styled.h4`
  color: tomato;
  font-weight: 500;
  margin-top: 50px;
  margin-left: 50px;
`;
