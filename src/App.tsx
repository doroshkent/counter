import React, { useEffect, useState } from 'react';
import { Counter } from "pages/counter/Counter";
import { S } from 'App_Styles';
import { Navigate, Route, Routes } from "react-router-dom";
import { Settings } from "pages/settings/Settings";

export const PATH = {
  counter: '/counter',
  settings: '/setting',
}

function App() {
  const [ minValue, setMinValue ] = useState( 0 );
  const [ maxValue, setMaxValue ] = useState( 5 );
  const [ value, setValue ] = useState( minValue );

  useEffect( () => {
    const localMinValue = localStorage.getItem( 'minValue' );
    const localMaxValue = localStorage.getItem( 'maxValue' );
    if (localMinValue) {
      setMinValue( JSON.parse( localMinValue ) )
      setValue( JSON.parse( localMinValue ) )
    }
    if (localMaxValue) {
      setMaxValue( JSON.parse( localMaxValue ) )
    }
  }, [] );
  return (
    <S.App>
      <S.Content>
        <Routes>
          <Route path={ '/' } element={ <Navigate to={ PATH.counter } /> } />
          <Route path={ PATH.counter }
                 element={ <Counter value={ value } setValue={ setValue }
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
