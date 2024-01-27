import React, { FC } from 'react';
import { S } from 'pages/counter/Counter_Styles'
import { Link } from "react-router-dom";
import { PATH } from "App";
import { Button } from "components/Button";
import { ButtonsGroup } from 'components/ButtonsGroup';

type CounterPropsType = {
  value: number
  incrementCounter: () => void
  resetCounter: () => void
  maxValue: number
  minValue: number
}

export const Counter: FC<CounterPropsType> = ({
                                                value, maxValue,
                                                minValue, incrementCounter, resetCounter
                                              }) => {

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
