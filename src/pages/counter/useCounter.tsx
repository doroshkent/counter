import React from 'react';
import { incrementValue, resetValue } from "state/counterReducer";
import { useDispatch } from "react-redux";

export const useCounter = (value: number, maxValue: number, minValue: number) => {
  const dispatch = useDispatch()

  const incrementCounter = () => {
    if (value >= maxValue) {
      return;
    }
    dispatch( incrementValue() )
  }
  const resetCounter = () => {
    if (value === minValue) {
      return;
    }
    dispatch( resetValue() )
  }

  return {
    incrementCounter,
    resetCounter
  };
}
