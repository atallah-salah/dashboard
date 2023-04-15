import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  regulationEnforcement: {
    current: 45,
    target: 60,
    change: 10,
    currentDate: "1 Week",
    targetDate: "6 Month",
    chart: "chart1",
    pathColor: "#416BFF",
  },
  coverage: {
    current: 25,
    target: 50,
    change: -10,
    currentDate: "1 Week",
    targetDate: "6 Month",
    chart: "chart2",
    pathColor: "#FA6298",
  },
  resolution: {
    current: 38,
    target: 45,
    change: 10,
    currentDate: "1 Week",
    targetDate: "6 Month",
    chart: "chart3",
    pathColor: "#FFBA69",
  },
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setState: (state, action) => {
      state = { ...action.payload };
      return state;
    },
    updateState: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

export const { setState, updateState } = generalSlice.actions;

export default generalSlice.reducer;
