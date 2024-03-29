import styled from "styled-components";
import { theme } from "styles/Theme";

export const ButtonsGroup = styled.div`
  width: 100%;
  height: 150px;
  border: 3px solid ${theme.colors.primary};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
