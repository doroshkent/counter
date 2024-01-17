import styled from "styled-components";
import { Wrapper } from "components/Wrapper";
import { theme } from "styles/Theme";

const SettingsContent = styled(Wrapper)`
  width: 100%;
  height: 180px;
  justify-content: space-around;
  color: ${theme.colors.primary};
  font-size: 2rem;
  font-weight: 600;
`

const Setting = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Input = styled.input<{error: boolean}>`
  width: 200px;
  border: 2px solid ${props => props.error ? "red" : theme.colors.primary};
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  background-color: ${props => props.error ? "#f2a5b6" : "white"};
`

export const S = {
  SettingsContent,
  Setting,
  Input
}
