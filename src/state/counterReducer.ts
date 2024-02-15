// types
export type CounterStateType = {
  value: number
  minValue: number
  maxValue: number
}

type IncrementValueActionType = ReturnType<typeof incrementValue>
type SetMinValueActionType = ReturnType<typeof setMinValue>
type SetMaxValueActionType = ReturnType<typeof setMaxValue>
type ResetValueActionType = ReturnType<typeof resetValue>

type CounterReducerActionsType = IncrementValueActionType
  | SetMinValueActionType
  | SetMaxValueActionType
  | ResetValueActionType

// state
const initialState: CounterStateType = {
  value: 0,
  minValue: 0,
  maxValue: 5
}

export const counterReducer = (state = initialState, action: CounterReducerActionsType): CounterStateType => {
  switch (action.type) {
    case "INCREMENT-VALUE": {
      return { ...state, value: state.value + 1 }
    }
    case "SET_MIN_VALUE": {
      return { ...state, minValue: action.minValue, value: action.minValue }
    }
    case "SET_MAX_VALUE": {
      return { ...state, maxValue: action.maxValue }
    }
    case "RESET_VALUE": {
      return { ...state, value: state.minValue }
    }
    default: {
      return state
    }
  }
}

// action creators
export const incrementValue = () => ({
  type: "INCREMENT-VALUE"
} as const)

export const setMinValue = (minValue: number) => ({
  type: "SET_MIN_VALUE",
  minValue
} as const)

export const setMaxValue = (maxValue: number) => ({
  type: "SET_MAX_VALUE",
  maxValue
} as const)

export const resetValue = () => ({
  type: "RESET_VALUE",
} as const)
