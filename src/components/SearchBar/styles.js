import styled from 'styled-components';

export const Form = styled.form.attrs({
  novalidate: true,
})`
  display: flex;
  flex-direction: row;
  padding: 3px;
  align-items: center;
`;

export const Input = styled.input.attrs({
  type: 'text',
})`
  margin-right: 10px;
  padding: 7px;
  font-size: 15px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
`;

export const CheckboxContainer = styled.label``;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})``;

export const CheckboxLabel = styled.span`
  margin-left: 8px;
  font-size: 14px;
`;
