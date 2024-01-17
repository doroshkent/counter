import styled from "styled-components";
import { theme } from "styles/Theme";

export const Button = styled.button<{disabled?: boolean}>`
  font-size: 5rem;
  font-weight: 600;
  color: ${theme.colors.secondary};
  opacity: ${props => props.disabled ? "0.5" : "1"};
  background-color: ${theme.colors.primary};
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
  border: unset;
  
  &:active {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  }
`
