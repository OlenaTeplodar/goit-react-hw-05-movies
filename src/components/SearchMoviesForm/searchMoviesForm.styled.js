import styled from 'styled-components';

export const FormStyle = styled.form`
  margin-top: 16px;
  margin-left: 60px;
`;

export const LabelStyle = styled.label`
  display: flex;
  align-items: center;
`;

export const InputStyle = styled.input`
  padding: 8px;
  width: 260px;
  font-size: 16px;

  &:focus {
    outline: none;
    border: 1px dotted grey;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.4);
  }
`;

export const ButtonStyle = styled.button`
  font-size: 16px;
  font-weight: 600;
  height: 36px;
  padding: 8px;
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  margin: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.4);
  color: tomato;
  background-color: #b0baf5;
  &:hover,
  &:focus {
    background-color: #031992;
    font-style: italic;
  }
`;
