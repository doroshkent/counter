import React, { useState } from 'react';
import './App.css';
import { Counter } from "./Counter";
import styled from "styled-components";

function App() {
  const [ value, setValue ] = useState( 0 );
  const maxValue = 5;

  return (
    <AppWrapper>
      <Counter value={ value } setValue={ setValue } maxValue={ maxValue } />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f333c;
`

export default App;
