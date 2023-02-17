import styled from 'styled-components';

export const FormStyle = styled.form`
  margin-top: 16px;
  margin-left: 32px;
`;

export const LabelStyle = styled.label`
  display: flex;
  align-items: center;
`;

export const InputStyle = styled.input`
  padding: 8px;
  width: 250px;
  font-size: 16px;

  &:focus {
    outline: none;
    border: 1px solid grey;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.4);
  }
`;

export const ButtonStyle = styled.button`
  font-size: 16px;
  height: 32px;
  padding: 4px;
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover,
  &:focus {
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.4);
  }
`;
