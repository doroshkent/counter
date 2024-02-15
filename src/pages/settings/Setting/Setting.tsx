import React, { ChangeEvent } from 'react';
import { S } from "pages/settings/Settings_Styles";

type SettingPropsType = {
  title: string
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  error: boolean
}

export const Setting: React.FC<SettingPropsType> = ({ title, value, onChange, error }) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.currentTarget.value;
    const maxLength = 6; // Maximum input length
    if (inputValue.length > maxLength) {
      inputValue = inputValue.slice(0, maxLength);
    }
    if (inputValue.startsWith("0") && inputValue.length > 1) {
      inputValue = inputValue.slice(1);
    }
    e.currentTarget.value = inputValue;
    onChange(e); // Call the onChange callback to update the value
  };
  return (
    <S.Setting>
      <p>{ title }:</p>
      <S.Input type="number" value={ value } onChange={ handleInput } error={ error } max={999999} />
    </S.Setting>
  );
};
