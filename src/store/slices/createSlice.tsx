import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  search: '',
};


const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search=action.payload;
    },
    clearSearch: (state) => {
      state.search = '';
    }

  }

});

export default searchSlice.reducer;
/*
interface SeachState {
    search:string;
}
*/