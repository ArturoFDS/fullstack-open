/* eslint-disable no-return-assign */
import { createStore } from 'redux'
export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return state.concat(action.payload)
    case 'CHANGE_IMPORTANCE':
      return state.map((value) => value.id === action.payload.id ? value.important = false : state)
    default:
      return state
  }
}

const store = createStore(noteReducer)
store.subscribe(() => {
  const storeNow = store.getState()
  console.log(storeNow)
})
export default store
