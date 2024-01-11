import React from 'react';
import styled from "styled-components";

type CounterPropsType = {
  value: number
  setValue: (newValue: number) => void
  maxValue: number
}

export const Counter: React.FC<CounterPropsType> = ({ value, setValue, maxValue }) => {
  const incrementHandler = () => {
    value < maxValue && setValue( value + 1 )
  }

  const resetHandler = () => {
    setValue( 0 );
  }

  return (
    <CounterWrapper>
      <Value value={ value } maxValue={ maxValue }>
        { value }
      </Value>
      <ButtonsWrapper>
        <Button disabled={ value >= maxValue } onClick={ incrementHandler }>inc</Button>
        <Button disabled={ value === 0 } onClick={ resetHandler }>reset</Button>
      </ButtonsWrapper>
    </CounterWrapper>
  );
};

const CounterWrapper = styled.div`
  width: 600px;
  height: 400px;
  border: 3px solid #6ddffc;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const Value = styled.div<{ value: number, maxValue: number }>`
  width: 100%;
  height: 180px;
  font-size: 8rem;
  font-weight: 600;
  color: ${ props => props.value === props.maxValue ? "red" : "#2f333c" };
  background-color: #6ddffc;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

const ButtonsWrapper = styled.div`
  width: 100%;
  height: 150px;
  border: 3px solid #6ddffc;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Button = styled.button<{disabled: boolean}>`
  font-size: 5rem;
  font-weight: 600;
  color: #2f333c;
  opacity: ${props => props.disabled ? "0.5" : "1"};
  background-color: #6ddffc;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
`
