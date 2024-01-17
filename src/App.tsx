import React, { useState } from 'react';
import './App.css';
import { Counter } from "pages/counter/Counter";
import { S } from 'App_Styles';
import { Navigate, Route, Routes } from "react-router-dom";
import { Settings } from "pages/settings/Settings";

export const PATH = {
  counter: '/counter',
  settings: '/setting',
}

function App() {
  const [ minValue, setMinValue ] = useState( 1);
  const [ maxValue, setMaxValue ] = useState( 5 );
  const [ value, setValue ] = useState( minValue);

  return (
    <S.App>
      <S.Content>
        <Routes>
          <Route path={ '/' } element={ <Navigate to={ PATH.counter } /> } />
          <Route path={ PATH.counter }
                 element={ <Counter value={ value } setValue={ setValue }
                                    minValue={minValue} maxValue={ maxValue } /> } />
          <Route path={ PATH.settings } element={ <Settings /> } />
        </Routes>
      </S.Content>
    </S.App>
  );
}

export default App;
