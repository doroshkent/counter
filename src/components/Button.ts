import styled from "styled-components";

export const Button = styled.button<{disabled?: boolean}>`
  font-size: 5rem;
  font-weight: 600;
  color: #2f333c;
  opacity: ${props => props.disabled ? "0.5" : "1"};
  background-color: #6ddffc;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
  border: unset;
  
  &:active {
    background-color: #2f333c;
    color: #6ddffc;
  }
`
