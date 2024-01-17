import React from 'react';
import { S } from 'pages/counter/Counter_Styles'
import { NavLink } from "react-router-dom";
import { PATH } from "App";
import { Button } from "components/Button";
import { ButtonsGroup } from 'components/ButtonsGroup';

type CounterPropsType = {
  value: number
  setValue: (newValue: number) => void
  maxValue: number
  minValue: number
}

export const Counter: React.FC<CounterPropsType> = ({ value, setValue, maxValue, minValue }) => {
  const incrementHandler = () => {
    if (value >= maxValue) {
      return;
    }
    setValue( value + 1 )
  }

  const resetHandler = () => {
    setValue( minValue );
  }

  return (
    <>
      <S.Value value={ value } maxValue={ maxValue }>
        { value }
      </S.Value>
      <ButtonsGroup>
        <Button disabled={ value >= maxValue } onClick={ incrementHandler }>inc</Button>
        <Button disabled={ value === minValue } onClick={ resetHandler }>reset</Button>
        <NavLink to={ PATH.settings }><Button>set</Button></NavLink>
      </ButtonsGroup>
    </>
  );
}
