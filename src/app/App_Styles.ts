import styled from "styled-components";
import { Wrapper } from "components/Wrapper";
import { theme } from "styles/Theme";

const App = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.secondary};
`

const Content = styled(Wrapper)`
  width: 600px;
  height: 400px;
`

export const S = {
  App,
  Content
}
