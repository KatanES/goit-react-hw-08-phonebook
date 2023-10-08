import { styled } from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  margin-bottom: 12px;
`;

export const StyledField = styled(Field)`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
  resize: none;
  margin-left: 10px;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
`;

export const ContactBtn = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  padding: 0 8px;
  border-radius: 4px;
  background-color: #3f51b5;
  color: #fff;

  width: 100px;
  height: 40px;

  &:hover,
  &:focus {
    background-color: #3f51b5;
  }
  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const ContactsLbl = styled.label`
  text-decoration: none;
  font-weight: 700;
  color: #2a363b;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const FilterInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
  resize: none;
  margin-left: 10px;
`;

export const ContactSpan = styled.span`
  padding-right: 15px;
  margin-bottom: 10px;
`;

export const FilterContactsBtn = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  padding: 0 8px;
  border-radius: 4px;
  background-color: #3f51b5;
  color: #fff;

  width: 100px;
  height: auto;

  &:hover,
  &:focus {
    background-color: #3f51b5;
  }
  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
