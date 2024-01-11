import React, { useState } from 'react';
import './App.css';
import { Counter } from "./Counter/Counter";
import { S } from './App_Styles';

function App() {
  const [ value, setValue ] = useState( 0 );
  const maxValue = 5;

  return (
    <S.App>
      <Counter value={ value } setValue={ setValue } maxValue={ maxValue } />
    </S.App>
  );
}

export default App;
