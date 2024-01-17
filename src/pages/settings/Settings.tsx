import { ButtonsGroup } from 'components/ButtonsGroup';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { PATH } from "App";
import { Button } from "components/Button";
import { NavLink } from "react-router-dom";
import { S } from "./Settings_Styles"

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
    const localMinValue = localStorage.getItem( 'minValue' );
    const localMaxValue = localStorage.getItem( 'maxValue' );
    if (localMinValue) {
      setMinValue( JSON.parse( localMinValue ) )
    }
    if (localMaxValue) {
      setMaxValue( JSON.parse( localMaxValue ) )
    }
  }, [] );
  useEffect( () => {
    if (minValue < 0 || maxValue <= minValue) {
      setError( "Invalid value" )
    } else {
      setError( "" )
    }
    localStorage.setItem( 'minValue', JSON.stringify( minValue ) )
    localStorage.setItem( 'maxValue', JSON.stringify( maxValue ) )
  }, [ minValue, maxValue ] );

  const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue( Number( e.currentTarget.value ) );
  }
  const onMinValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMinValue( Number( e.currentTarget.value ) );
  }
  const onSetHandler = () => {
    setValue( minValue )
  }
  return (
    <>
      <S.SettingsContent>
        <S.Setting>
          <p>max value: </p>
          <S.Input type="number" value={ maxValue } onChange={ onMaxValueChangeHandler } error={ !!error } />
        </S.Setting>
        <S.Setting>
          <p>start value: </p>
          <S.Input type="number" value={ minValue } onChange={ onMinValueChangeHandler } error={ !!error } />
        </S.Setting>
      </S.SettingsContent>
      <ButtonsGroup>
        <NavLink to={ PATH.counter }><Button disabled={ !!error } onClick={ onSetHandler }>set</Button></NavLink>
      </ButtonsGroup>
    </>
  );
};
