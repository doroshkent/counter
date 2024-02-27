import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "state/counterReducer";
import { loadState, saveState } from "utils/localStorage-utils";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  counter: counterReducer
})

export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => {
  saveState({
    counter: store.getState().counter
  })
})
