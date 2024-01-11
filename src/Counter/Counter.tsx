import React from 'react';
import { S } from './Counter_Styles'

type CounterPropsType = {
  value: number
  setValue: (newValue: number) => void
  maxValue: number
}

export const Counter: React.FC<CounterPropsType> = ({ value, setValue, maxValue }) => {
  const incrementHandler = () => {
    value < maxValue && setValue( value + 1 )
  }

  const resetHandler = () => {
    setValue( 0 );
  }

  return (
    <S.Counter>
      <S.Value value={ value } maxValue={ maxValue }>
        { value }
      </S.Value>
      <S.Buttons>
        <S.Button disabled={ value >= maxValue } onClick={ incrementHandler }>inc</S.Button>
        <S.Button disabled={ value === 0 } onClick={ resetHandler }>reset</S.Button>
      </S.Buttons>
    </S.Counter>
  );
};
