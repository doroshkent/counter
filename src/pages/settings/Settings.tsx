import { ButtonsGroup } from 'components/ButtonsGroup';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { PATH } from "App";
import { Button } from "components/Button";
import { NavLink } from "react-router-dom";
import { S } from "./Settings_Styles"
import { Setting } from "pages/settings/Setting/Setting";

type SettingsPropsType = {
  minValue: number
  setMinValue: (minValue: number) => void
  maxValue: number
  setMaxValue: (maxValue: number) => void
  setValue: (value: number) => void
}

export const Settings: React.FC<SettingsPropsType> = ({ minValue, setMinValue, maxValue, setMaxValue, setValue }) => {
  const [ error, setError ] = useState( "" );

  useEffect( () => {
    if (minValue < 0 || maxValue <= minValue) {
      setError( "Invalid value" )
    } else {
      setError( "" )
    }
  }, [ minValue, maxValue ] );

  const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue( Number( e.currentTarget.value ) );
    localStorage.setItem( 'maxValue', e.currentTarget.value )
  }
  const onMinValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMinValue( Number( e.currentTarget.value ) );
    localStorage.setItem( 'minValue', e.currentTarget.value )
  }
  const onSetHandler = () => {
    setValue( minValue )
  }
  return (
    <>
      <S.SettingsContent>
        <Setting title={ "max value" } value={ maxValue } onChange={ onMaxValueChangeHandler } error={ !!error } />
        <Setting title={ "start value" } value={ minValue } onChange={ onMinValueChangeHandler } error={ !!error } />
      </S.SettingsContent>
      <ButtonsGroup>
        <NavLink to={ PATH.counter }><Button disabled={ !!error } onClick={ onSetHandler }>set</Button></NavLink>
      </ButtonsGroup>
    </>
  );
};
