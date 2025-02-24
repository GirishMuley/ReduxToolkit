import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 10,
};

export const getUserAccount = createAsyncThunk(
  "account/getUser",
  async (useid, thunkAPI) => {
    const { data } = await axios.get(`https://localhost:80/accounts/${useid}`);
    return data.amount;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAccount.fulfilled, (state, action) => {
        state.amount = action.payload;
        state.pending = false;
      })
      .addCase(getUserAccount.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getUserAccount.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;
