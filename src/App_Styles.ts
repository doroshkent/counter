import styled from "styled-components";

const App = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f333c;
`

const Content = styled.div`
  width: 600px;
  height: 400px;
  border: 3px solid #6ddffc;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

export const S = {
  App,
  Content
}
