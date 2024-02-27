const initialState: CounterStateType = {
  value: 0,
  minValue: 0,
  maxValue: 5
}

export const counterReducer = (state = initialState, action: CounterReducerActionsType): CounterStateType => {
  switch (action.type) {
    case "INCREMENT-VALUE":
      return { ...state, value: state.value + 1 }
    case "SET_MIN_VALUE":
      return { ...state, minValue: action.minValue, value: action.minValue }
    case "SET_MAX_VALUE":
      return { ...state, maxValue: action.maxValue }
    case "RESET_VALUE":
      return { ...state, value: state.minValue }
    case "SET-VALUE-FROM-LOCAL-STORAGE":
      return { ...state, value: action.value }
    default:
      return state
  }
}

// actions
export const incrementValue = () => ({ type: "INCREMENT-VALUE" } as const)
export const setMinValue = (minValue: number) => ({ type: "SET_MIN_VALUE", minValue } as const)
export const setMaxValue = (maxValue: number) => ({ type: "SET_MAX_VALUE", maxValue } as const)
export const resetValue = () => ({ type: "RESET_VALUE", } as const)
export const setValueFromLocalStorage = (value: number) => ({ type: "SET-VALUE-FROM-LOCAL-STORAGE", value} as const)
// types
export type CounterStateType = {
  value: number
  minValue: number
  maxValue: number
}
type CounterReducerActionsType = ReturnType<typeof incrementValue>
  | ReturnType<typeof setMinValue>
  | ReturnType<typeof setMaxValue>
  | ReturnType<typeof resetValue>
  | ReturnType<typeof setValueFromLocalStorage>
