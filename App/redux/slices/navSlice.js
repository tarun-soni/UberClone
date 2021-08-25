import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin: null,
  destination: null,
}

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload
    },
    setDestination: (state, action) => {
      state.destination = action.payload
    },
  },
})

// actions
export const { setOrigin, setDestination } = navSlice.actions

//selector
export const selectOrigin = state => state.nav.origin
export const selectDestination = state => state.nav.destination

export default navSlice.reducer
