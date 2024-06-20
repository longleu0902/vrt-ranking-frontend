import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list : []
};

const DataRakingSlice = createSlice({
  name: "data-ranking",
  initialState,
  reducers: {
    setListRanking: (state, action) => {
      state.list = action.payload;
    },
  },
});
export const { setListRanking } = DataRakingSlice.actions;
export default DataRakingSlice.reducer;