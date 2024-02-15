import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from "react-redux";
import { setMaxValue, setMinValue } from "state/counterReducer";

export const useSettings = (minValue: number, maxValue: number) => {
  const dispatch = useDispatch();
  const [ error, setError ] = useState( "" );

  const onMaxValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const enteredValue = Number( e.currentTarget.value );

    if (enteredValue <= minValue) {
      setError( "Invalid value" )
    } else {
      setError( "" )
    }

    dispatch( setMaxValue( enteredValue ) );
  }
  const onMinValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const enteredValue = Number( e.currentTarget.value );

    if (enteredValue < 0 || enteredValue >= maxValue) {
      setError( "Invalid value" )
    } else {
      setError( "" )
    }
    dispatch( setMinValue( enteredValue ) );
  }

  return {
    error,
    onMinValueChanged,
    onMaxValueChanged
  }
};
