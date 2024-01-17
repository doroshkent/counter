import { ButtonsGroup } from 'components/ButtonsGroup';
import React from 'react';
import { PATH } from "App";
import { Button } from "components/Button";
import { NavLink } from "react-router-dom";

type SettingsPropsType = {
  // minValue: number
  // setMinValue: (minValue: number) => void
  // maxValue: number
  // setMaxValue: (maxValue: number) => void
}

export const Settings: React.FC<SettingsPropsType> = () => {
  return (
    <div>
      <div>
        max value: <input type="number"/>
      </div>
      <div>
        start value: <input type="number"/>
      </div>
      <ButtonsGroup>
        <NavLink to={ PATH.counter }><Button>set</Button></NavLink>
      </ButtonsGroup>
    </div>
  );
};
