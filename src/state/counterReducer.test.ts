import {
  counterReducer,
  CounterStateType,
  incrementValue,
  resetValue,
  setMaxValue,
  setMinValue
} from "state/counterReducer";

const initialState: CounterStateType = {
  value: 0,
  minValue: 0,
  maxValue: 5
}

test('value is incremented', () => {
  const action = incrementValue();
  const endState = counterReducer(initialState, action)

  expect(endState.value).toBe(1);
})

test('counter is reset to min value', () => {
  const state = {...initialState, value: 4}
  const action = resetValue();
  const endState = counterReducer(state, action)

  expect(endState.value).toBe(initialState.minValue);
})

test('new minValue is set, value is set to actual minValue', () => {
  const action = setMinValue(2);
  const endState = counterReducer(initialState, action)

  expect(endState.minValue).toBe(2);
  expect(endState.value).toBe(2);
})

test('new maxValue is set', () => {
  const action = setMaxValue(2);
  const endState = counterReducer(initialState, action)

  expect(endState.maxValue).toBe(2);
})
