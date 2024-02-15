import React from 'react';
import { S } from 'pages/counter/Counter_Styles'
import { Link } from "react-router-dom";
import { PATH } from "App";
import { Button } from "components/Button";
import { ButtonsGroup } from 'components/ButtonsGroup';
import { useCounter } from "pages/counter/useCounter";

type CounterPropsType = {
  value: number
  maxValue: number
  minValue: number
}

export const Counter = ({ value, maxValue, minValue }: CounterPropsType) => {
  const { incrementCounter, resetCounter } = useCounter( value, maxValue, minValue )

  return (
    <>
      <S.Value value={ value } $maxValue={ maxValue }>
        { value }
      </S.Value>
      <ButtonsGroup>
        <Button disabled={ value >= maxValue } onClick={ incrementCounter }>inc</Button>
        <Button disabled={ value === minValue } onClick={ resetCounter }>reset</Button>
        <Button>
          <Link to={ PATH.settings }>set</Link>
        </Button>
      </ButtonsGroup>
    </>
  );
}
