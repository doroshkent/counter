import { ButtonsGroup } from 'components/ButtonsGroup';
import React, { ChangeEvent, FC, useState } from 'react';
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

export const Settings: FC<SettingsPropsType> = ({
                                                  minValue, setMinValue,
                                                  maxValue, setMaxValue, setValue
                                                }) => {
  const [ error, setError ] = useState( "" );

  const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const enteredValue = Number( e.currentTarget.value );

    if (enteredValue <= minValue) {
      setError( "Invalid value" )
    } else {
      setError( "" )
    }

    setMaxValue( enteredValue );
    localStorage.setItem( 'maxValue', enteredValue.toString() );
  }
  const onMinValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const enteredValue = Number( e.currentTarget.value );
    if (enteredValue < 0 || enteredValue >= maxValue) {
      setError( "Invalid value" )
    } else {
      setError( "" )
    }
    setMinValue( enteredValue );
    localStorage.setItem( 'minValue', enteredValue.toString() )
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
