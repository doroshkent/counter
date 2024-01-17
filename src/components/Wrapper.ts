import styled from "styled-components";
import { theme } from "styles/Theme";

export const Wrapper = styled.div`
  border: 3px solid ${theme.colors.primary};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`
