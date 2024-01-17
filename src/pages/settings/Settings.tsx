import { ButtonsGroup } from 'components/ButtonsGroup';
import React, { ChangeEvent } from 'react';
import { PATH } from "App";
import { Button } from "components/Button";
import { NavLink } from "react-router-dom";

type SettingsPropsType = {
  minValue: number
  setMinValue: (minValue: number) => void
  maxValue: number
  setMaxValue: (maxValue: number) => void
}

export const Settings: React.FC<SettingsPropsType> = ({minValue, setMinValue, maxValue, setMaxValue}) => {
  const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.currentTarget.value));
  }

  const onMinValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMinValue(Number(e.currentTarget.value));
  }
  return (
    <div>
      <div>
        max value: <input type="number" onChange={onMaxValueChangeHandler} value={maxValue}/>
      </div>
      <div>
        start value: <input type="number" value={minValue} onChange={onMinValueChangeHandler}/>
      </div>
      <ButtonsGroup>
        <NavLink to={ PATH.counter }><Button>set</Button></NavLink>
      </ButtonsGroup>
    </div>
  );
};
