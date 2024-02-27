import React from 'react';
import { Counter } from "pages/counter/Counter";
import { S } from 'App_Styles';
import { Navigate, Route, Routes } from "react-router-dom";
import { Settings } from "pages/settings/Settings";
import { useSelector } from "react-redux";
import { AppRootStateType } from "state/store";
import { CounterStateType } from "state/counterReducer";

export const PATH = {
  counter: '/counter',
  settings: '/setting',
} as const

function App() {
  const {
    value,
    minValue,
    maxValue
  } = useSelector<AppRootStateType, CounterStateType>( state => state.counter );

  return (
    <S.App>
      <S.Content>
        <Routes>
          <Route path={ '/' } element={ <Navigate to={ PATH.counter } /> } />
          <Route path={ PATH.counter }
                 element={ <Counter value={ value } minValue={ minValue } maxValue={ maxValue } /> } />
          <Route path={ PATH.settings }
                 element={ <Settings minValue={ minValue } maxValue={ maxValue } /> } />
        </Routes>
      </S.Content>
    </S.App>
  );
}

export default App;
