import styled from "styled-components";

const FormFieldContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 10px;

  &:first-of-type {
    border-top: none;
  }
`;

const Label = styled.label`
  width: 20%;
  min-width: 70px;
  padding: 11px 0;
  color: #999;
  overflow: hidden;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media all and (min-width: 576px) {
    width: 42%;
  }
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 11px 15px 11px 8px;
  color: #333;
  /* background-color: transparent; */
  animation: 1ms void-animation-out;
  box-shadow: 0 6px 9px rgb(50 50 93 / 6%), 0 2px 5px rgb(0 0 0 / 8%);
  border-radius: 4px;

  &::placeholder {
    color: #87bbfd;
  }
`;

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <FormFieldContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} required />
    </FormFieldContainer>
  );
};

export default FormField;
