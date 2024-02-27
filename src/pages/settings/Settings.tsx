import { ButtonsGroup } from 'components/ButtonsGroup';
import React from 'react';
import { PATH } from "app/App";
import { Button } from "components/Button";
import { NavLink } from "react-router-dom";
import { S } from "./Settings_Styles"
import { Setting } from "pages/settings/Setting/Setting";
import { useSettings } from "pages/settings/useSettings";

type SettingsPropsType = {
  minValue: number
  maxValue: number
}

export const Settings = ({ minValue, maxValue }: SettingsPropsType) => {
  const { error, onMinValueChanged, onMaxValueChanged } = useSettings( minValue, maxValue )

  return (
    <>
      <S.SettingsContent>
        <Setting title={ "max value" } value={ maxValue } onChange={ onMaxValueChanged } error={ !!error } />
        <Setting title={ "start value" } value={ minValue } onChange={ onMinValueChanged } error={ !!error } />
      </S.SettingsContent>
      <ButtonsGroup>
        <NavLink to={ PATH.counter }><Button disabled={ !!error }>set</Button></NavLink>
      </ButtonsGroup>
    </>
  );
};
