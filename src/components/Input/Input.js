import styled from 'styled-components';

const Input = styled.input`
  border: none;   
  font-size: 1rem;  
  border-radius: .25rem;  
  display: inline-flex;
  font-family: 'Montserrat' !important;  
  width: ${({ value }) => value.length }ch;
  &:focus {
    background-color: #F0F0F0;
    outline: none;
  }  
`;

export default Input;