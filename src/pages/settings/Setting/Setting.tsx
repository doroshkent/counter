import React, { ChangeEvent } from 'react';
import { S } from "pages/settings/Settings_Styles";

type SettingPropsType = {
  title: string
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  error: boolean
}

export const Setting: React.FC<SettingPropsType> = ({ title, value, onChange, error }) => {
  return (
    <S.Setting>
      <p>{ title }:</p>
      <S.Input type="number" value={ value } onChange={ onChange } error={ error } />
    </S.Setting>
  );
};
