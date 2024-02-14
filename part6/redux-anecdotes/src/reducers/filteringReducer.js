import { createSlice } from "@reduxjs/toolkit";
const initialState = ''
const filteringSlice = createSlice({
  name: 'filtering',
  initialState,
  reducers: {
    SET_FILTER(state, action){
      return action.payload
    }
  }
})

export default filteringSlice.reducer
