import React, { useState } from 'react';
import { Counter } from "pages/counter/Counter";
import { S } from 'App_Styles';
import { Navigate, Route, Routes } from "react-router-dom";
import { Settings } from "pages/settings/Settings";

export const PATH = {
  counter: '/counter',
  settings: '/setting',
}

function App() {
  const [ minValue, setMinValue ] = useState( () => {
    const localMinValue = localStorage.getItem( 'minValue' );
    if (localMinValue) {
      return JSON.parse( localMinValue )
    }
    return 0
  } );
  const [ maxValue, setMaxValue ] = useState( () => {
    const localMaxValue = localStorage.getItem( 'maxValue' );
    if (localMaxValue) {
      return JSON.parse( localMaxValue )
    }
    return 5
  } );
  const [ value, setValue ] = useState( minValue );

  const incrementCounter = () => {
    if (value >= maxValue) {
      return;
    }
    setValue( value + 1 );
  }
  const resetCounter = () => {
    setValue( minValue );
  }

  return (
    <S.App>
      <S.Content>
        <Routes>
          <Route path={ '/' } element={ <Navigate to={ PATH.counter } /> } />
          <Route path={ PATH.counter }
                 element={ <Counter value={ value } incrementCounter={ incrementCounter } resetCounter={ resetCounter }
                                    minValue={ minValue } maxValue={ maxValue } /> } />
          <Route path={ PATH.settings }
                 element={ <Settings minValue={ minValue } maxValue={ maxValue } setMinValue={ setMinValue }
                                     setMaxValue={ setMaxValue } setValue={ setValue } /> } />
        </Routes>
      </S.Content>
    </S.App>
  );
}

export default App;
